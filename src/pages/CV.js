import { useTranslation } from "react-i18next";

export default function CV() {
	const { t } = useTranslation();

	return (
		<div className="curriculum">
			<h3>2024</h3>
			<ul>
				<li>{t("cv.2024_1")}</li>
				<li>{t("cv.2024_2")}</li>
				<li>{t("cv.2024_3")}</li>
				<li>{t("cv.2024_4")}</li>
			</ul>

			<h3>2023</h3>
			<ul>
				<li>{t("cv.2023_1")}</li>
				<li>{t("cv.2023_2")}</li>
				<li>{t("cv.2023_3")}</li>
				<li>{t("cv.2023_4")}</li>
				<li>{t("cv.2023_5")}</li>
				<li>{t("cv.2023_6")}</li>
				<li>{t("cv.2023_7")}</li>
				<li>{t("cv.2023_8")}</li>
			</ul>

			<h3>2022 </h3>
			<ul>
				<li>{t("cv.2022_1")}</li>
				<li>{t("cv.2022_2")}</li>
				<li>{t("cv.2022_3")}</li>
				<li>{t("cv.2022_4")}</li>
				<li>{t("cv.2022_5")}</li>
				<li>{t("cv.2022_6")}</li>
				<li>{t("cv.2022_7")}</li>
			</ul>

			<h3>2021</h3>
			<h4>{t("cv.2021_location")}</h4>
			<ul>
				<li>{t("cv.2021_1")}</li>
			</ul>

			<h3>2019</h3>
			<ul>
				<li>{t("cv.2019_1")}</li>
				<li>{t("cv.2019_2")}</li>
				<li>{t("cv.2019_3")}</li>
				<li>{t("cv.2019_4")}</li>
				<li>{t("cv.2019_5")}</li>
			</ul>

			<h3>2018</h3>
			<h4>{t("cv.2018_location")}</h4>
			<ul>
				<li>{t("cv.2018_1")}</li>
				<li>{t("cv.2018_2")}</li>
				<li>{t("cv.2018_3")}</li>
				<li>{t("cv.2018_4")}</li>
			</ul>

			<h3>2016</h3>
			<ul>
				<li>{t("cv.2016_1")}</li>
				<li>{t("cv.2016_2")}</li>
			</ul>

			<h3>2015</h3>
			<ul>
				<li>{t("cv.2015_1")}</li>
				<li>{t("cv.2015_2")}</li>
				<li>{t("cv.2015_3")}</li>
				<li>{t("cv.2015_4")}</li>
				<li>{t("cv.2015_5")}</li>
				<li>{t("cv.2015_6")}</li>
			</ul>

			<h3>2014</h3>
			<h4>{t("cv.2014_location")}</h4>
			<ul>
				<li>{t("cv.2014_1")}</li>
				<li>{t("cv.2014_2")}</li>
				<li>{t("cv.2014_3")}</li>
				<li>{t("cv.2014_4")}</li>
				<li>{t("cv.2014_5")}</li>
				<li>{t("cv.2014_6")}</li>
				<li>{t("cv.2014_7")}</li>
				<li>{t("cv.2014_8")}</li>
			</ul>
		</div>
	);
}
