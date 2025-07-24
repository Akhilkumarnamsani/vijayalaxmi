import React from "react";

import Tomato from "../../assets/vegetables/tomato.jpg";
import Onion from "../../assets/vegetables/onion.jpeg";
import Brinjal from "../../assets/vegetables/brinjal.jpg";
import BottleGourd from "../../assets/vegetables/bottlegourd.jpg";
import RidgeGourd from "../../assets/vegetables/ridgegourd.jpg";
import Drumstick from "../../assets/vegetables/drumsticks.jpg";
import GreenChilli from "../../assets/vegetables/greenchilli.webp";
import CorianderLeaves from "../../assets/vegetables/corianderleaves.JPG";
import Spinach from "../../assets/vegetables/spinach.jpg";
import BitterGourd from "../../assets/vegetables/bittergourd.webp";
import LadyFinger from "../../assets/vegetables/ladyfinger.jpg";
import CurryLeaves from "../../assets/vegetables/curryleaves.jpg";
import Mint from "../../assets/vegetables/mint.jpeg";
import GreenBeans from "../../assets/vegetables/greenbeans.jpg";
import Carrot from "../../assets/vegetables/carrot.jpeg";
import Cabbage from "../../assets/vegetables/cabbage.webp";
import Cauliflower from "../../assets/vegetables/cauliflower.jpg";
import TaroRoot from "../../assets/vegetables/arvi.jpg";

const vegetables = [
  { name: 'Tomato', image: Tomato },
  { name: 'Onion', image: Onion },
  { name: 'Brinjal', image: Brinjal },
  { name: 'Bottle Gourd', image: BottleGourd },
  { name: 'Ridge Gourd', image: RidgeGourd },
  { name: 'Drumstick', image: Drumstick },
  { name: 'Green Chilli', image: GreenChilli },
  { name: 'Coriander Leaves', image: CorianderLeaves },
  { name: 'Spinach', image: Spinach },
  { name: 'Bitter Gourd', image: BitterGourd },
  { name: 'Lady Finger (Bhendi)', image: LadyFinger },
  { name: 'Curry Leaves', image: CurryLeaves },
  { name: 'Mint', image: Mint },
  { name: 'Green Beans', image: GreenBeans },
  { name: 'Carrot', image: Carrot },
  { name: 'Cabbage', image: Cabbage },
  { name: 'Cauliflower', image: Cauliflower },
  { name: 'Taro Root (Arbi)', image: TaroRoot },
];

export default function Vegetables() {
  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {vegetables.map(({ name, image }, index) => (
        <div key={index} className="group text-center">
          <div className="overflow-hidden rounded-md">
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-800">{name}</p>
        </div>
      ))}
    </div>
  );
}
