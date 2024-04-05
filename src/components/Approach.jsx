import styles from "../components/css/approach.module.css";

function Approach() {
  const approach = [
    {
      id: 1,
      count: "01",
      approach_heading: "Brand strategy",
      approach_para:
        "Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.",
    },
    {
      id: 2,
      count: "02",
      approach_heading: "Brand design",
      approach_para:
        "Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.",
    },
    {
      id: 3,
      count: "03",
      approach_heading: "Web design",
      approach_para:
        "A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.",
    },
  ];
  return (
    <div className={styles.approachContainer}>
      <h1 className={`${styles.approachHeading} commissioner extrabold`}>
        Our approach for creating a winning brand
      </h1>
      <div className={styles.approachStepContainer}>
        {approach.map((approach) => (
          <div key={approach.id} className={styles.approachSteps}>
            <span
              className={`${styles.approachStepCount} commissioner extrabold`}
            >
              {approach.count}
            </span>
            <h1
              className={`${styles.approachStepHeading} commissioner extrabold`}
            >
              {approach.approach_heading}
            </h1>
            <p className={`${styles.approachStepPara} commissioner regular`}>
              {approach.approach_para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
