import React from "react"; 
import turmeric from "../../assets/spices/turmeric.png";
import chilli from "../../assets/spices/chilli.png";
import coriander from "../../assets/spices/coriander.jpg";
import mustard from "../../assets/spices/mustard.jpg";
import cumin from "../../assets/spices/cumin.jpg";
import garamMasala from "../../assets/spices/garammasala.webp";
import fenugreek from "../../assets/spices/fenugreek.webp";
import blackPepper from "../../assets/spices/blackpepper.webp";
import clove from "../../assets/spices/cloves.webp";
import cardamom from "../../assets/spices/cardamom.webp";
import cinnamon from "../../assets/spices/cinnamon.webp";
import starAnise from "../../assets/spices/staranise.webp";
import nutmeg from "../../assets/spices/nutmeg.webp";
import bayLeaf from "../../assets/spices/bayleaf.webp";
import fennel from "../../assets/spices/fennel.webp";
import driedGinger from "../../assets/spices/driedginger.webp";
import mace from "../../assets/spices/mace.webp";
import ajwain from "../../assets/spices/ajwain.webp";

export default function Spices() {
  const items = [
    { name: "Turmeric", image: turmeric },
    { name: "Chilli Powder", image: chilli },
    { name: "Coriander Powder", image: coriander },
    { name: "Mustard Seeds", image: mustard },
    { name: "Cumin", image: cumin },
    { name: "Garam Masala", image: garamMasala },
    { name: "Fenugreek", image: fenugreek },
    { name: "Black Pepper", image: blackPepper },
    { name: "Clove", image: clove },
    { name: "Cardamom", image: cardamom },
    { name: "Cinnamon", image: cinnamon },
    { name: "Star Anise", image: starAnise },
    { name: "Nutmeg", image: nutmeg },
    { name: "Bay Leaf", image: bayLeaf },
    { name: "Fennel Seeds", image: fennel },
    { name: "Dried Ginger", image: driedGinger },
    { name: "Mace", image: mace },
    { name: "Ajwain", image: ajwain },
  ];

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {items.map((item) => (
        <div key={item.name} className="group text-center">
          <div className="overflow-hidden rounded-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="mt-2 text-sm font-medium text-gray-800">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
