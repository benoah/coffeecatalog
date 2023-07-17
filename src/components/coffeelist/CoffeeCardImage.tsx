import React, { FC, useEffect, useRef, useState } from "react";
import CoffeeCardRating from "./CoffeeCardRating";

interface CoffeeCardImageProps {
  imageUrl: string;
}

const CoffeeCardImage: FC<CoffeeCardImageProps> = ({ imageUrl }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isStarActive, setStarActive] = useState(false);

  const toggleStar = () => {
    setStarActive((prevState) => !prevState);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <figure
      style={{
        backgroundImage: isImageLoaded ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${imageUrl})` : "none",
      }}
      className="coffee-drink-card__image coffee-drink-card__image-with-gradient"
    >
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Coffee"
        style={{ display: "none" }}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="coffee-drink-card__rating">
        <CoffeeCardRating isStarActive={isStarActive} toggleStar={toggleStar} />
      </div>
    </figure>
  );
};

export default CoffeeCardImage;
