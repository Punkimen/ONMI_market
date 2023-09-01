'use client';
import s from "./Home.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {CardsNavigations} from "@/app/_components/blocks/CardsNavigations/CardsNavigations";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import {Routes} from "@/app/_utils/Routes";
import {PhoneScreens} from "@/app/_components/blocks/PhoneScreens/PhoneScreens";
import {Question} from "@/app/_components/partials/Question/Question";
import {Platform} from "@/app/_components/blocks/Platform/Platform";
import React, {FC, useLayoutEffect, useRef} from "react";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";
import {useCatalogState, useQuestionsState} from "@/app/_state/store";
import {ICardOmi, IClothe} from "@/app/_types/cards.types";

export const Home: FC = () => {

    const clothes: IClothe[] = useCatalogState((state) => state?.clothes)
    const bodies: ICardOmi[] = useCatalogState((state) => state?.bodies)
    const questions = useQuestionsState((state) => state?.questions)
    return (
        <div className={s.content}>
            <section className={s.gallery}>
                <div className="container">
                    <Title tag='h1' className={cn(s['gallery__title'], 'gradient-text')}>
                        <span className={'text-line'}>onmi® Gallery</span>
                    </Title>
                    <Text className={s['gallery__text']}>
                        <>
                            <div className={'row'}>
                                <span className={'text-line'} data-delay="0.1">Take four simple steps and start exploring</span>
                            </div>
                            <div className={'row'}>
                                <span className={'text-line'} data-delay="0.2">the ONMI world</span>
                            </div>
                        </>
                    </Text>
                </div>
                <Catalog className={s.catalog} cardsOmi={bodies} cardsType={'omi'} countsRow={4} label={'Omi Bodys'}/>
            </section>
            <section className={s['omi-world']}>
                <div className="container">
                    <Title tag={'h2'}>
                        <>
                            <div className="row">
                                <div className={'text-line'}><span className='color_gray'>Omi</span> opens up super
                                </div>
                            </div>
                            <div className="row">
                                <div className={'text-line'}>powers</div>
                            </div>
                        </>
                    </Title>
                    <Text className={s['omi-world__text']}>
                        <>
                            <div className="row">
                                <span className={'text-line'}>Take four simple steps and start exploring</span>
                            </div>
                            <div className="row">
                                <span className={'text-line'}>the ONMI world</span>
                            </div>
                        </>
                    </Text>
                    <CardsNavigations/>
                </div>
            </section>
            <section className={s.zero}>
                <div className="container">
                    <Title tag='h2'>
                        <div className={'text-line'}><span className='color_gray'>onmi®</span> zero</div>
                    </Title>
                    <Text className={s['zero__text']}>
                        <div className='row'>
                            <span className={'text-line'}>Pre collection. Only for sale</span>
                        </div>
                    </Text>
                </div>
                <Catalog className={s.zero__catalog} isCardsStats={false}
                         cardsClothe={clothes.filter(el => el.category === 'hats')} countsRow={5}/>
                <BtnSmall className={cn(s.zero__btn, 'text-line')} href={Routes.CLOTHES}>
                    Open collection
                </BtnSmall>
            </section>
            <section className={s.available}>
                <Title tag={'h2'}>
                    <>
                        <div className="row">
                            <div className={'text-line'}><span className='color_gray'>Omi</span> available</div>
                        </div>
                        <div className="row">
                            <div className={'text-line'} data-delay={0.1}>in onmi® game</div>
                        </div>
                    </>
                </Title>
                <Text className={s['available__text']}>
                    <>
                        <div className="row">
                            <span className={'text-line'}>Take four simple steps and start exploring</span>
                        </div>
                        <div className="row">
                            <span className={'text-line'}>the ONMI world</span>
                        </div>
                    </>
                </Text>
                <PhoneScreens className={s.screens}/>
                <div className={s.questions}>
                    {questions.map((el, index) => {
                        return <Question key={index} title={el.title} text={el.text}/>
                    })}
                    <LineDecor position={"bottom"}/>
                </div>
            </section>
            <Platform/>
        </div>
    )
}
