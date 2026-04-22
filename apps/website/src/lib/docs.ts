import fs from "node:fs";
import path from "node:path";

type DocMetadata = {
  title: string;
  description: string;
  section?: string;
  order?: number;
};

type DocSection = {
  title: string;
  slug: string;
  docs: Array<{
    slug: string;
    title: string;
    description: string;
    order: number;
  }>;
};

const publicDocSlugs = [
  "introducao",
  "comecar-rapido",
  "voz-natural",
  "editor-com-ia",
  "templates-institucionais",
  "integracao-pacs-ris",
  "crit-achados",
  "api-mcp",
  "planos",
  "seguranca-lgpd",
];

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match?.[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock?.trim().split("\n") || [];
  const metadata: Partial<DocMetadata> = {};

  for (const line of frontMatterLines) {
    const [key, ...valueArr] = line.split(": ");
    if (key) {
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1");
      const trimmedKey = key.trim();
      if (trimmedKey === "order") {
        metadata.order = Number.parseInt(value, 10);
      } else if (
        trimmedKey === "title" ||
        trimmedKey === "description" ||
        trimmedKey === "section"
      ) {
        metadata[trimmedKey] = value;
      }
    }
  }

  return { metadata: metadata as DocMetadata, content };
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getDocsData() {
  const docsDir = path.join(process.cwd(), "src", "app", "docs", "content");

  if (!fs.existsSync(docsDir)) {
    return [];
  }

  const mdxFiles = getMDXFiles(docsDir);
  return mdxFiles
    .filter((file) => publicDocSlugs.includes(path.basename(file, path.extname(file))))
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(docsDir, file));
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    });
}

export function getDocBySlug(slug: string) {
  if (!publicDocSlugs.includes(slug)) {
    return null;
  }

  const docsDir = path.join(process.cwd(), "src", "app", "docs", "content");
  const filePath = path.join(docsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { metadata, content } = readMDXFile(filePath);
  return {
    metadata,
    slug,
    content,
  };
}

export function getAllDocSlugs(): string[] {
  const docsDir = path.join(process.cwd(), "src", "app", "docs", "content");

  if (!fs.existsSync(docsDir)) {
    return [];
  }

  const mdxFiles = getMDXFiles(docsDir);
  return mdxFiles
    .map((file) => path.basename(file, path.extname(file)))
    .filter((slug) => publicDocSlugs.includes(slug));
}

// Navigation structure for the sidebar
export const docsNavigation: DocSection[] = [
  {
    title: "Começar",
    slug: "comecar",
    docs: [
      {
        slug: "introducao",
        title: "Introdução",
        description: "O que a plataforma resolve",
        order: 1,
      },
      {
        slug: "comecar-rapido",
        title: "Começar rápido",
        description: "Primeiros passos no editor",
        order: 2,
      },
      {
        slug: "voz-natural",
        title: "Voz natural",
        description: "Como ditar do seu jeito",
        order: 3,
      },
    ],
  },
  {
    title: "Produto",
    slug: "produto",
    docs: [
      {
        slug: "editor-com-ia",
        title: "Editor com IA",
        description: "Ditado, edição e assinatura",
        order: 1,
      },
      {
        slug: "templates-institucionais",
        title: "Templates institucionais",
        description: "Máscaras, descritores e padronização",
        order: 2,
      },
      {
        slug: "planos",
        title: "Planos",
        description: "RadRes+, PRO e Enterprise",
        order: 3,
      },
    ],
  },
  {
    title: "Institucional",
    slug: "institucional",
    docs: [
      {
        slug: "integracao-pacs-ris",
        title: "Integração PACS/RIS",
        description: "Implantação no fluxo existente",
        order: 1,
      },
      {
        slug: "crit-achados",
        title: "CRIT",
        description: "Achados críticos com SLA e prova",
        order: 2,
      },
      {
        slug: "seguranca-lgpd",
        title: "Segurança e LGPD",
        description: "Governança para ambientes sensíveis",
        order: 3,
      },
    ],
  },
  {
    title: "Técnico",
    slug: "tecnico",
    docs: [
      {
        slug: "api-mcp",
        title: "API e MCP",
        description: "Integração programática e conectores",
        order: 1,
      },
    ],
  },
];

export function getDocNavigation() {
  return docsNavigation;
}
