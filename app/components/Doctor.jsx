import React from 'react'
import Image from 'next/image'
function Doctor({ jsonData }) {
  return (
    <div>
      <Image src={jsonData.image} alt={jsonData.name} width={200} height={200} />
      <h1>{jsonData.name}</h1>
      <h1>{jsonData.id}</h1>
      <h1>{jsonData.description}</h1>
      <h2>{jsonData.address}</h2>
      <h2>{jsonData.fees}</h2>
      <h1>{jsonData.attributes[0].trait_type} : {jsonData.attributes[0].value}</h1>
      <h1>{jsonData.attributes[1].trait_type} : {jsonData.attributes[1].value}</h1>
      <h1>{jsonData.attributes[2].trait_type} : {jsonData.attributes[2].value}</h1>
      <h1>{jsonData.attributes[3].trait_type} : {jsonData.attributes[3].value}</h1>
      <h1>{jsonData.attributes[4].trait_type} : {jsonData.attributes[4].value}</h1>
      <h1>{jsonData.attributes[5].trait_type} : {jsonData.attributes[5].value}</h1>


    </div>
  )
}

export default Doctor