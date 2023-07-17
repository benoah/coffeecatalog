import React from 'react'
import useTruncateName from "../../hooks/useTruncateName";
import { ICoffeeItem } from "../../ICoffeeItem";

interface CoffeeHeaderProps {
  item: ICoffeeItem;
}

const CoffeeHeader: React.FC<CoffeeHeaderProps> = ({ item }) => {
    const { truncateName } = useTruncateName();
    return (
        <header className="coffee-drink-card__header">
            <div className="coffee-drink-card__name">
                {truncateName(item.name)}
            </div>
            <div className="coffee-drink-card__form">{item.formCode}</div>
        </header>
    )
}

export default CoffeeHeader;
