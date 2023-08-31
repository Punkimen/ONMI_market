import './globals.scss';
import React from 'react';
import type {Metadata} from 'next';
import {manrope} from "@/app/fonts";
import {Header} from "@/app/_components/blocks/Header/Header";
import localFont from 'next/font/local'
import {Footer} from "@/app/_components/blocks/Footer/Footer";

export const metadata: Metadata = {
  title: 'Onmi Market',
  description: 'Onmi Market',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={manrope.className}>
    <Header/>
    <main className='main'>{children}</main>
    <Footer/>
    </body>
    </html>
  )
}
