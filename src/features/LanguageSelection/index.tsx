import "./style.css";
import { useTranslation } from "react-i18next";
import { BrasilFlag, EuaFlag } from "src/assets";

const Flag = ({ image, isSelected, ...props }: any) => (
  <img
    alt="flag"
    src={image}
    className={isSelected ? "flag selected" : "flag"}
    {...props}
  />
);

const LanguageSelection = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;
  return (
    <div className="flags-container">
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === "pt-BR"}
        onClick={() => handleChangeLanguage("pt-BR")}
      />
      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === "en-US"}
        onClick={() => handleChangeLanguage("en-US")}
      />
    </div>
  );
};

export default LanguageSelection;
