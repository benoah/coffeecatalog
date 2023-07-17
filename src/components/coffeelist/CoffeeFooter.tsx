import React from 'react'
import { Icon } from "@iconify/react";


export default function CoffeeFooter() {
  return (
    <footer className="coffee-drink-card__footer">
    <div className="coffee-drink-card__price">
      <div className="coffee-drink-card__currency-symbol">$</div>
      <div className="coffee-drink-card__amount">2.45</div>
    </div>
    <button className="coffee-drink-card__add-btn">
      <Icon
        icon="akar-icons:plus"
        style={{
          color: "rgba(255, 239, 213, 1)",
          width: "1rem",
          height: "1rem",
          background: "rgba(217, 128, 70, 1)",
        }}
      />
    </button>
  </footer>
  )
}
