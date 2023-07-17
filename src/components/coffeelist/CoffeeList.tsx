import { FC } from "react";
import CoffeeFooter from "./CoffeeFooter";
import CoffeeHeader from "./CoffeeHeader";
import { CoffeeListProps } from "../../ICoffeeItem";

import CoffeeCardImage from "./CoffeeCardImage";

import "../../sass/CoffeeList.scss";



const CoffeeList: FC<CoffeeListProps> = ({ item }) => {
  
  const imageUrl = item.assets.masterImage?.uri || item.assets.fullSize.uri;

  return (
    <section className="coffee-drink-card">
      <article className="coffee-drink-card__content">
        <CoffeeCardImage imageUrl={imageUrl} />
    
        <CoffeeHeader item={item} />
        <CoffeeFooter />
      </article>
    </section>
  );
};

export default CoffeeList;
