import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="information">
        <dl>
          <div>
            <dt>{t("home.height")}</dt>
            <dd>{t("home.height_value")}</dd>
          </div>
          <div>
            <dt>{t("home.chest")}</dt>
            <dd>{t("home.chest_value")}</dd>
          </div>
          <div>
            <dt>{t("home.waist")}</dt>
            <dd>{t("home.waist_value")}</dd>
          </div>
          <div>
            <dt>{t("home.hips")}</dt>
            <dd>{t("home.hips_value")}</dd>
          </div>
          <div>
            <dt>{t("home.size")}</dt>
            <dd>{t("home.size_value")}</dd>
          </div>
          <div>
            <dt>{t("home.shoes")}</dt>
            <dd>{t("home.shoes_value")}</dd>
          </div>
          <div>
            <dt>{t("home.eyes")}</dt>
            <dd>{t("home.eyes_value")}</dd>
          </div>
          <div>
            <dt>{t("home.hair")}</dt>
            <dd>{t("home.hair_value")}</dd>
          </div>
          <div>
            <dt>{t("home.tattoos")}</dt>
            <dd>{t("home.tattoos_value")}</dd>
          </div>
          <div>
            <dt>{t("home.piercings")}</dt>
            <dd>{t("home.piercings_value")}</dd>
          </div>
        </dl>
        <div className="picture">
          <img src="/images/home.jpeg" alt="Heloise Profile" />
        </div>
      </div>
      <div className="home-text">
        <p>{t("home.title")}</p>
        <p>{t("home.paragraph_1")}</p>
        <p>{t("home.paragraph_2")}</p>
        <p>{t("home.paragraph_3")}</p>
        <p>
          {t("home.contact")}:{" "}
          <a
            href={
              "mailto:heloisebld.pro@gmail.com?subject=" +
              t("home.mail_subject")
            }
          >
            heloisebld.pro@gmail.com
          </a>
        </p>
        <p>{t("home.paragraph_4")} ✨</p>
        <p>Héloïse Baland</p>
      </div>
    </>
  );
}
