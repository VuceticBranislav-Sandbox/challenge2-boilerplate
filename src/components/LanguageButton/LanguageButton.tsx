import { IconButton, Tooltip } from "@mui/material";
import { memo, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import styles from "./styles.module.css";
import { LanguageContext } from "context/language/LanguageContext";

const LanguageButton = () => {
  const { t, i18n } = useTranslation();
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.languageState);

  useEffect(() => {
    i18n.changeLanguage(language);
    languageContext.languageState=language;
  }, [language, i18n]);

  return (
    <Tooltip title={t("Language")}>
      <IconButton
        className={styles.languageButton_badge}
        onClick={() => {
          setLanguage(language === "GB" ? "RS" : "GB");
        }}
      >
        <ReactCountryFlag
          className={styles.languageButton_flag}
          countryCode={language}
          svg
          title={language}
        />
      </IconButton>
    </Tooltip>
  );
};

export default memo(LanguageButton);
