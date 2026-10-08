import { useState } from "react";
import AdhesionHero from "../sections/adhesion/AdhesionHero";
import ApplicationForm from "../sections/adhesion/ApplicationForm";
import ApplySteps from "../sections/adhesion/ApplySteps";
import FreeModel from "../sections/adhesion/FreeModel";
import MemberAccess from "../sections/adhesion/MemberAccess";

export default function Adhesion() {
  const [prefillEmail, setPrefillEmail] = useState("");

  const onQuickApply = (email: string) => {
    setPrefillEmail(email);
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
    document.getElementById("prenom")?.focus({ preventScroll: true });
  };

  return (
    <main>
      <AdhesionHero onQuickApply={onQuickApply} />
      <ApplySteps />
      <FreeModel />
      <ApplicationForm prefillEmail={prefillEmail} />
      <MemberAccess />
    </main>
  );
}