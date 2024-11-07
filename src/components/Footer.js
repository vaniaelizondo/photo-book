import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer>
      <div className="icons">
        <a href="https://www.instagram.com/heloise_bld/" target='_blank' rel="noreferrer">
          <img src='/images/logos/instagram.png' alt="Instagram" />
        </a>
        <a href={"mailto:heloisebld.pro@gmail.com?subject=" + t("footer.mail_subject")}>
          <img src='/images/logos/email.png' alt="Mail" />
        </a>
      </div>
      <div>
        <p>Copyright © {year}</p>
      </div>
    </footer>
  );
}