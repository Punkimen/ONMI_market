import {dataClothes} from "@/app/state/dataClothes";
import React from 'react';
import {Clothe} from "@/app/_components/screens/Clothe/Clothe";

const Page = ({params}: { params: { id: string } }) => {
  const id = params.id
  const clothe = dataClothes.filter(el => el.id === +id)[0]
  return (
    <Clothe clothe={clothe}/>
  )
}

export async function generateStaticParams() {
  return dataClothes.map((el) => ({
    id: el.id.toString(),
  }))
}

export default Page
