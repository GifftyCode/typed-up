import type { ReactNode } from "react";

type InfoBoxPrrops = {
  mode: "hint" | "warning";
  severity?: "low" | "high" | "medium";
  children: ReactNode;
};

export default function InfoBox({ mode, severity, children }: InfoBoxPrrops) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
