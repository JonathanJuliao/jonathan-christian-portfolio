import { useState } from "react";
import { profile } from "../data";

export default function DownloadCv({ className, children }) {
  const [status, setStatus] = useState("idle");

  async function onClick(event) {
    event.preventDefault();
    if (status === "busy") return;
    setStatus("busy");
    try {
      const [{ pdf }, { ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("../cv/ResumeDocument.jsx"),
      ]);
      const siteUrl = profile.website || window.location.origin;
      const blob = await pdf(<ResumeDocument siteUrl={siteUrl} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "jonathan-christian-curriculo.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const label = status === "busy" ? "Gerando currículo..." : status === "error" ? "Tentar de novo" : children;

  return (
    <a className={className} href={profile.cv} onClick={onClick} aria-busy={status === "busy"}>
      {label}
    </a>
  );
}
