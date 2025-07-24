import React from 'react';
import toorDal from '../../assets/pulses/toordal.webp';
import moongDal from '../../assets/pulses/moongdal.webp';
import chanaDal from '../../assets/pulses/chanadal.webp';
import masoorDal from '../../assets/pulses/masoordal.webp';
import uradDal from '../../assets/pulses/uraddal.webp';
import rajma from '../../assets/pulses/rajma.webp';
import kabuliChana from '../../assets/pulses/kabulichana.webp';
import greenGram from '../../assets/pulses/greengram.webp';
import blackChana from '../../assets/pulses/blackchana.webp';

export default function Pulses() {
  const items = [
    { name: 'Toor Dal', image: toorDal },
    { name: 'Moong Dal', image: moongDal },
    { name: 'Chana Dal', image: chanaDal },
    { name: 'Masoor Dal', image: masoorDal },
    { name: 'Urad Dal', image: uradDal },
    { name: 'Rajma', image: rajma },
    { name: 'Kabuli Chana', image: kabuliChana },
    { name: 'Green Gram', image: greenGram },
    { name: 'Black Chana', image: blackChana },
  ];

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
