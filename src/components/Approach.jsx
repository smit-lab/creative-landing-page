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
    <div className="approach-container">
      <h1 className="approach-heading commissioner-extrabold">
        Our approach for creating a winning brand
      </h1>
      <div className="step-container">
        {approach.map((approach) => (
          <div key={approach.id} className="step">
            <span className="step-count commissioner-extrabold">
              {approach.count}
            </span>
            <h1 className="step-heading commissioner-extrabold">
              {approach.approach_heading}
            </h1>
            <p className="step-para commissioner-regular">
              {approach.approach_para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
