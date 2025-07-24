import React from "react";
import mango from "../../assets/fruits/mango.jpg";
import guava from "../../assets/fruits/guava.webp";
import pineapple from "../../assets/fruits/pineapple.jpg";
import pomegranate from "../../assets/fruits/pomegranate.jpg";
import banana from "../../assets/fruits/banana.jpeg";
import lychee from "../../assets/fruits/lychee.jpeg";
import grapes from "../../assets/fruits/grapes.jpg";
import orange from "../../assets/fruits/orange.webp";

export default function Fruits() {
  const items = [
    { name: "Mangoes", image: mango },
    { name: "Guavas", image: guava },
    { name: "Pineapple", image: pineapple },
    { name: "Pomegranate", image: pomegranate },
    { name: "Banana", image: banana },
    { name: "Lychee", image: lychee },
    { name: "Grapes", image: grapes },
    { name: "Orange", image: orange },
  ];

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map(({ name, image }) => (
        <div key={name} className="group text-center">
          <div className="overflow-hidden rounded-md">
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="mt-2 text-sm font-medium text-gray-800">{name}</div>
        </div>
      ))}
    </div>
  );
}
