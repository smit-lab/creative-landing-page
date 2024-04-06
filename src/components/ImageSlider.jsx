import styles from "../components/css/imageSlider.module.css";
import { useState } from "react";

function ImageSlider() {
  const images = [
    "/src/assets/desktop/image-slide-1.jpg",
    "/src/assets/desktop/image-slide-2.jpg",
    "/src/assets/desktop/image-slide-3.jpg",
  ];
  const imagesTablet = [
    "/src/assets/tablet/image-slide-1-tablet.jpg",
    "/src/assets/tablet/image-slide-2-tablet.jpg",
    "/src/assets/tablet/image-slide-3-tablet.jpg",
  ];
  const imagesMobile = [
    "/src/assets/mobile/image-slide-1-mobile.jpg",
    "/src/assets/mobile/image-slide-2-mobile.jpg",
    "/src/assets/mobile/image-slide-3-mobile.jpg",
  ];

  const textHeadings = [
    "Brand naming & guildelines",
    "Brand identity & merchandise",
    "Brand identity & web design",
  ];
  const imageTexts = [
    { title: "Learn Product Roadmap", project_year: "2019" },
    { title: "New Majestic Hotel", project_year: "2018" },
    { title: "Crypto Dashboard", project_year: "2016" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };
  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.imageSliderContainer}>
      <div className={styles.sliderTextContainer}>
        <h1 className={`commissioner extrabold`}>
          {textHeadings[currentImageIndex]}
        </h1>
        <div className={styles.buttonContainer}>
          <button className={styles.sliderArrowBtn} onClick={prevImage}>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="matrix(-1 0 0 1 40 0)"
                stroke="#F94F4F"
                fill="none"
                fillRule="evenodd"
              >
                <circle cx="20" cy="20" r="19.5" />
                <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
              </g>
            </svg>
          </button>
          <button className={styles.sliderArrowBtn} onClick={nextImage}>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#F94F4F" fill="none" fillRule="evenodd">
                <circle cx="20" cy="20" r="19.5" />
                <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <picture className={styles.imageContainer}>
          <source
            media="(min-width: 800px)"
            srcSet={images[currentImageIndex]}
          />
          <source
            media="(min-width: 500px)"
            srcSet={imagesTablet[currentImageIndex]}
          />
          <source
            media="(max-width: 500px)"
            srcSet={imagesMobile[currentImageIndex]}
          />
          <img
            src={images[currentImageIndex]}
            alt=""
            className={styles.imageSliderImage}
          />
        </picture>
        <div className={styles.imageText}>
          <h2 className={`commissioner extrabold`}>
            {imageTexts[currentImageIndex].title}
          </h2>
          <p className={`commissioner regular`}>
            {imageTexts[currentImageIndex].project_year} Project
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
