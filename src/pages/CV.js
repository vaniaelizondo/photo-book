import { useTranslation } from "react-i18next";

export default function CV() {
	const { t } = useTranslation();

	const cvData = t("cv", { returnObjects: true });

	return (
		<div className="curriculum">
			{cvData
				.sort((a, b) => b.year - a.year)
				.map((entry, index) => (
					<div key={index}>
						<h3>{entry.year}</h3>
						{entry.location && <h4>{entry.location}</h4>}
						<ul>
							{entry.entries.map((item, itemIndex) => (
								<li key={itemIndex}>{item}</li>
							))}
						</ul>
					</div>
				))}
		</div>
	);
}
