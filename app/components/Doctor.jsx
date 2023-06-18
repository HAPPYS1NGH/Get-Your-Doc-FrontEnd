import React from 'react';
import Image from 'next/image';

function Doctor({ jsonData }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <Image
          src={jsonData.image}
          alt={jsonData.name}
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold mt-4">{jsonData.name}</h1>
        <h1 className="text-xl font-semibold">{jsonData.id}</h1>
        <h1 className="mt-4">{jsonData.description}</h1>
        <h2 className="text-lg font-medium mt-4">{jsonData.address}</h2>
        <h2 className="text-lg font-medium">{jsonData.fees}</h2>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {jsonData.attributes.map((attribute, index) => (
            <div key={index} className="flex flex-col">
              <h1 className="text-lg font-semibold">
                {attribute.trait_type}:
              </h1>
              <h1 className="text-lg">{attribute.value}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
