import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const MonComposant = () => {
  useEffect(() => {
    const slideUp = {
      distance: "550%",
      origin: "bottom",
      opacity: null,
    };

    ScrollReveal().reveal(".slide-up", slideUp);
  }, []);

  return (
    <div className="slide-up">
      {/* Contenu de votre élément */}
      <h1>Contenu animé avec ScrollRevealJS</h1>
      <p>Plus de contenu...</p>
    </div>
  );
};

export default MonComposant;
