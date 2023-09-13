import './_styles/globals.scss';
import React from 'react';
import type {Metadata} from 'next';
import {manrope} from "@/app/fonts";
import {Header} from "@/app/_components/blocks/Header/Header";
import {Footer} from "@/app/_components/blocks/Footer/Footer";
import Template from "@/app/template";


export const metadata: Metadata = {
  title: 'Onmi Market',
  description: 'Onmi Market',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="page">
          <div className="page-content">
            <Header/>
            <main className='main'>{children}</main>
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
