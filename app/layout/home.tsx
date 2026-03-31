import { Link } from "react-router";
import underConstruction from "assets/images/under-construction.svg"

// import { useTranslation } from "react-i18next";

export default function AppSummary() {
  // const { i18n } = useTranslation();
  return <>
    {/* {
      ["en", "es"].map((lang) => (
        <button key={lang} type="submit" onClick={() => i18n.changeLanguage(lang)}>
          {lang.toUpperCase()}
        </button>
      ))
    } */}
    <img src={underConstruction} alt="Under Construction" width={"400"} />
  </>;
}
