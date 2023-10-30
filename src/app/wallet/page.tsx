"use client";
import React from 'react';
import {NextPage} from "next";
import {Wallet} from "@/app/_components/blocks/Wallet/Wallet";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
const Page: NextPage = () => {
  const windowWidth = useWindowWidth();
  return (
    <Wallet hide={windowWidth>450}/>
  );
};




export default Page;
