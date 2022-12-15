import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const UnderConstruction = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="d-flex flex-column align-items-start justify-content-center p-3">
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: "600",
          }}
        >
          {languagePage.projects_under_construction_title}
        </h1>
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "var(--color-secondary-text)",
          }}
        >
          {languagePage.projects_under_construction_subtitle}
        </h2>
      </div>
      <div className="text-center mt-3">
        <img
          src={require("../../assets/under-construction.png")}
          alt="Under Construction"
          style={{
            height: "250px",
            width: "100%",
            objectFit: "contain",
          }}
        />
        <a
          href="http://www.freepik.com"
          style={{
            fontSize: "0.5rem",
            color: "var(--color-secondary-text)",
          }}
          target="_blank"
          rel="noreferrer"
        >
          Designed by studiogstock / Freepik
        </a>
      </div>
    </div>
  );
};
