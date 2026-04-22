import { openai } from "@ai-sdk/openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { streamText } from "ai";

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 h"), // 10 requests per hour per IP
  analytics: true,
  prefix: "docs-assistant",
});

const DOCS_SYSTEM_PROMPT = `You are Laudos.AI's documentation assistant. Help users understand how to use Laudos.AI, a radiology workflow platform focused on voice dictation, structured reporting, institutional templates, critical findings communication, and integrations.

You can answer questions about:
- **Copilot**: Voice dictation, AI-assisted writing, structured report generation
- **Editor**: Drafting, revising, refining, and standardizing reports in one flow
- **Templates**: Personal and institutional templates, descriptors, vocabulary, standardization
- **PACS/RIS**: Integration, institutional rollout, API and enterprise onboarding
- **CRIT**: Critical findings communication, SLA, acknowledgement, and audit trail
- **Insights**: Usage, productivity, auditability, and operational visibility
- **Mobile & browser use**: Desktop, tablet, and mobile browser workflows
- **API & MCP**: Programmatic integrations and AI tool connectivity
- **Plans**: Resident, individual, and enterprise use cases
- **Security**: Access control, governance, and LGPD-oriented operational concerns

Key product details:
- Laudos.AI is assistive software and does not replace clinical decision-making
- Voice dictation is designed for radiology language in Portuguese
- The editor keeps dictation, refinement, and final review in the same workflow
- Templates can be personal or institutional
- CRIT is designed for auditable critical-finding communication
- Enterprise covers PACS/RIS integration, SSO/SAML, and institutional rollout

Keep answers concise and actionable. Use numbered steps for how-to questions.
When referencing documentation, mention the page name naturally without using markdown link syntax.
If you don't know something specific about Laudos.AI, say so rather than guessing.
Don't make up features that don't exist.`;

export async function POST(req: Request) {
  const isDev = process.env.NODE_ENV === "development";

  let remaining = 999;
  let reset = Date.now() + 3600000;

  // Skip rate limiting in development
  if (!isDev) {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0]?.trim() : "127.0.0.1";

    const result = await ratelimit.limit(ip ?? "127.0.0.1");
    remaining = result.remaining;
    reset = result.reset;

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: "Rate limit exceeded. Try again later.",
          remaining: 0,
          resetAt: reset,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          },
        },
      );
    }
  }

  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: DOCS_SYSTEM_PROMPT,
    messages,
  });

  return result.toTextStreamResponse({
    headers: {
      "X-RateLimit-Remaining": remaining.toString(),
      "X-RateLimit-Reset": reset.toString(),
    },
  });
}
