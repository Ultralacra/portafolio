"use client";

import { useI18n } from "@/lib/i18n/provider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          {"<Cesar /> - 2026"}
        </p>
        <p className="text-xs text-muted-foreground">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
