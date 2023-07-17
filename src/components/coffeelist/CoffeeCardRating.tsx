import React, { FC } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface CoffeeCardRatingProps {
  isStarActive: boolean;
  toggleStar: () => void;
}

const CoffeeCardRating: FC<CoffeeCardRatingProps> = ({ isStarActive, toggleStar }) => {
  return (
    <div className="coffee-drink-card__rating">
      <div className="coffee-drink-card__star" onClick={toggleStar}>
        {isStarActive ? (
          <StarOutlined className="coffee-drink-card__star--outlined" />
        ) : (
          <StarFilled className="coffee-drink-card__star coffee-drink-card__star--filled" />
        )}
      </div>
      <div className="coffee-drink-card__rating-number">4.5</div>
    </div>
  );
};

export default CoffeeCardRating;
