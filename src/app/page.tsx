'use client';

import React from 'react';
import s from './page.module.scss';
import {Title} from "@/app/_components/partials/Title/Title";
import {Text} from "@/app/_components/partials/Text/Text";
import cn from "classnames";
import {ICardOmi} from "@/app/_types/cards.types";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {CardsNavigations} from "@/app/_components/blocks/CardsNavigations/CardsNavigations";
import {NextPage} from "next";
import {PhoneScreens} from "@/app/_components/blocks/PhoneScreens/PhoneScreens";
import {Question} from "@/app/_components/partials/Question/Question";
import {Platform} from "@/app/_components/blocks/Platform/Platform";
// images
import body1 from '@/../public/img/bodys/body_1.png'
import body2 from '@/../public/img/bodys/body_2.png'
import body3 from '@/../public/img/bodys/body_3.png'
import body4 from '@/../public/img/bodys/body_4.png'
import decor from '@/../public/img/reality_bg_half.png'
import Image from "next/image";
import {dataClothes} from "@/app/state/dataClothes";
import {BtnBig} from "@/app/_components/partials/BtnBig/BtnBig";
import {BtnSmall} from "@/app/_components/partials/BtnSmall/BtnSmall";
import {Routes} from "@/app/_utils/Routes";


const cardsOmi: ICardOmi[] = [
  {
    id: 1,
    imgSrc: body1,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  },
  {
    id: 2,
    imgSrc: body2,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  },
  {
    id: 3,
    imgSrc: body3,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  },
  {
    id: 4,
    imgSrc: body4,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  }
]
const questions: Array<{ title: string, text: string[] }> = [
  {
    "title": "What is onmi?",
    "text": ["onmi is an innovative AR game that allows players to interact with virtual objects and events in the real world."]
  },
  {
    "title": "Where can I play onmi?",
    "text": ["onmi launches in certain limited areas but our coverage will expand worldwide in due time. Follow us on social media for updates."]
  },
  {
    "title": "Can I play for free?",
    "text": ["The game is free to play for everyone with the ghost system. To get the full potential out of onmi, players are encouraged to acquire an Omi body."]
  },
  {
    "title": "Why AR?",
    "text": ["We utilize AR to enhance the mundane environment, creating unique and thrilling experiences.", "We call it \"philosophy of reality's hidden layer\": Art galleries, conceptual changes to otherwise ordinary places and advanced real-life interactions like clothes fitting and AR collaboration."]
  },
  {
    "title": "Why Fashion?",
    "text": ["onmi is the first game to incorporate the art of digital fashion, letting players express themselves in novel, creative ways.", "Every article of clothing in the game has an in-game value backed by gameplay usecases."]
  },
  {
    "title": "Can I earn in this game?",
    "text": [`<p>Of course. But It depends on many factors, like:</p>
        <ul>
          <li>Your endurance</li>
          <li>Being ahead of the curve</li>
          <li>Your social skills</li>
          <li>Clever resource management</li>
          <li>A tiny bit of luck</li>
        </ul>
        <p>We also offer special programs for talented people to profit off their art in ONMI.</p>`]
  },
  {
    "title": "How does onmi collaborate with offline brands?",
    "text": ["Partner brands can create unique digital goods and experiences for onmi playerbase.", "AR technology allows for expanded interaction with partners' works."]
  },
  {
    "title": "How does onmi's economy work?",
    "text": ["onmi economy is based on tokens and resources that could only be mined by interacting with ORBs. These resources are then placed in circulation and used to create goods to fuel the internal economy.", "Tokens are also circulating in Challenges and mini-games. A certain amount is stored and used for player rewards."]
  },
  {
    "title": "What is \"The Hunger Games\"?",
    "text": ["The Hunger Games is an international competition between worthy onmi players.", "Players all around the world can bet and watch live as the contestants overcome several rounds of challenges. We do not disclose the mechanics beforehand as to keep everyone on equal footing when the games commence.", "The winner will be generously rewarded and will forever be remembered in onmi's hall of fame."]
  },
  {
    "title": "Is onmi a game or a service?",
    "text": ["It's both. Game elements are incorporated in game design mechanics, intriguing quests, standoffs and whole storylines.", "The \"Service\" part is collaborating with brands, artists, clubs and events to provide a system of offline benefits for onmi players."]
  },
  {
    "title": "How do I get clothes?",
    "text": ["Players can craft various articles of clothing and sell on them the market. You can view all available collections and listings on the market.", "onmi doesn't sell in-game clothes with the exception of the starter collection."]
  },
  {
    "title": "Can I buy clothes right away on launch?",
    "text": ["There will be a time before the first clothes are crafted. For players to express themselves, there will be a limited amount unique clothes for sale by onmi. These clothes will not provide gameplay benefits."]
  },
  {
    "title": "What are the differences between Omi bodies?",
    "text": ["There is a difference in stats, upgrade potential and which rarity of clothes they can wear. Higher class bodies will generate more loot for the player and will be much more versatile in the long run."]
  },
  {
    "title": "Why blockchain and crypto?",
    "text": ["Blockchain technology is used for additional security, and transparency for the user's assets and their transactions. It is also used to support the game economy and its players."]
  }
]


const Home: NextPage = () => {
  return (
    <>
      <section className={s.gallery}>
        <div className="container">
          <Title tag='h1' className={cn(s['gallery__title'], 'gradient-text')}>
            onmi® Gallery
          </Title>
          <Text className={s['gallery__text']}>
            <>
              <div className={'row'}>Take four simple steps and start exploring</div>
              <div className={'row'}>the ONMI world</div>
            </>
          </Text>
        </div>
        <Catalog className={s.catalog} cards={cardsOmi} cardsType={'omi'} countsRow={4} label={'Omi Bodys'}/>
      </section>
      <section className={s['omi-world']}>
        <div className="container">
          <Title tag={'h2'}>
            <>
              <div className="row">
                <div><span className='color_gray'>Omi</span> opens up super</div>
              </div>
              <div className="row">
                <div>powers</div>
              </div>
            </>
          </Title>
          <Text className={s['omi-world__text']}>
            <>
              <div className="row">Take four simple steps and start exploring</div>
              <div className="row">the ONMI world</div>
            </>
          </Text>
          <CardsNavigations/>
        </div>
      </section>
      <section className={s.zero}>
        <div className="container">
          <Title tag='h2'>
            <><span className='color_gray'>onmi®</span> zero</>
          </Title>
          <Text className={s['zero__text']}>
            <div className='row'>Pre collection. Only for sale</div>
          </Text>
        </div>
        <Catalog className={s.zero__catalog} cards={dataClothes.filter(el => el.category === 'hats')} countsRow={5}/>
        <BtnSmall className={s.zero__btn} href={Routes.CLOTHES}>
          Open collection
        </BtnSmall>
      </section>
      <section className={s.available}>
        <Title tag={'h2'}>
          <>
            <div className="row">
              <div><span className='color_gray'>Omi</span> available</div>
            </div>
            <div className="row">
              <div>in onmi® game</div>
            </div>
          </>
        </Title>
        <Text className={s['available__text']}>
          <>
            <div className="row">Take four simple steps and start exploring</div>
            <div className="row">the ONMI world</div>
          </>
        </Text>
        <PhoneScreens className={s.screens}/>
        {questions.map((el, index) => {
          return <Question key={index} title={el.title} text={el.text}/>
        })}
      </section>
      <Platform/>
    </>
  )
}
export default Home;
