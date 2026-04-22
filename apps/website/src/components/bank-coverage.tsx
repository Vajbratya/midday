"use client";

import { Icons } from "@midday/ui/icons";
import { Input } from "@midday/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@midday/ui/select";
import { useMemo, useState } from "react";

type CoverageItem = {
  name: string;
  segment: string;
};

const items: CoverageItem[] = [
  { name: "Tomografia Computadorizada", segment: "Modalidade" },
  { name: "Ressonância Magnética", segment: "Modalidade" },
  { name: "Radiografia", segment: "Modalidade" },
  { name: "Ultrassonografia", segment: "Modalidade" },
  { name: "Doppler", segment: "Modalidade" },
  { name: "Mamografia", segment: "Modalidade" },
  { name: "Clínicas de pequeno porte", segment: "Cenário" },
  { name: "Grupos de radiologia", segment: "Cenário" },
  { name: "Hospitais", segment: "Cenário" },
  { name: "Implantação PACS / RIS", segment: "Integração" },
  { name: "SSO / SAML", segment: "Integração" },
  { name: "API e conectores customizados", segment: "Integração" },
];

const segments = ["Todos", "Modalidade", "Cenário", "Integração"];

export function BankCoverage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSegment, setSelectedSegment] = useState("Todos");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesSegment =
        selectedSegment === "Todos" || item.segment === selectedSegment;

      return matchesSearch && matchesSegment;
    });
  }, [searchQuery, selectedSegment]);

  return (
    <div className="min-h-screen">
      <div className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl leading-tight text-foreground">
                  Cobertura completa para a operação radiológica
                </h1>
                <p className="font-sans text-sm text-muted-foreground">
                  A plataforma cobre as principais modalidades e cenários de
                  implantação, do radiologista individual ao hospital com
                  integração institucional.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Icons.Search className="absolute pointer-events-none left-3 top-[11px] text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar modalidade, integração ou cenário"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Select
                  value={selectedSegment}
                  onValueChange={setSelectedSegment}
                >
                  <SelectTrigger className="w-full sm:w-[220px] bg-background border-border">
                    <SelectValue placeholder="Selecione um segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    {segments.map((segment) => (
                      <SelectItem key={segment} value={segment}>
                        {segment}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-0">
                <div className="flex items-center justify-between bg-secondary px-2 py-2">
                  <span className="font-sans text-sm font-medium text-muted-foreground">
                    Cobertura
                  </span>
                  <span className="font-sans text-sm font-medium text-muted-foreground">
                    Tipo
                  </span>
                </div>

                <div className="space-y-0 pt-2">
                  {filteredItems.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="flex items-center justify-between py-3 border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted border border-border flex-shrink-0" />
                        <span className="font-sans text-sm text-foreground">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-sans text-sm text-muted-foreground">
                        {item.segment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
