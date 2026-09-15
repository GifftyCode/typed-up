import type { ReactNode } from "react";

// type InfoBoxPrrops = {
//   mode: "hint" | "warning";
//   severity?: "low" | "high" | "medium";
//   children: ReactNode;
// };

// export default function InfoBox({ mode, severity, children }: InfoBoxPrrops) {
//   if (mode === "hint") {
//     return (
//       <aside className="infobox infobox-hint">
//         <p>{children}</p>
//       </aside>
//     );
//   }

//   return (
//     <aside className={`infobox infobox-warning warning--${severity}`}>
//       <h2>Warning</h2>
//       <p>{children}</p>
//     </aside>
//   );
// }

// To use discriminated props/uniom

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxPrrops = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxPrrops) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint ">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
