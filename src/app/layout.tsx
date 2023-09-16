"use client";
import './_styles/globals.scss';
import React from 'react';
import {manrope} from "@/app/fonts";
import {Header} from "@/app/_components/blocks/Header/Header";
import {Footer} from "@/app/_components/blocks/Footer/Footer";
import { usePathname } from 'next/navigation';

export default function RootLayout({children}: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="page">
          <div className="page-content">
            {!pathname.includes('/login') && <Header/>}
            <main className='main'>{children}</main>
          </div>
          {!pathname.includes('/login') && <Footer/>}
        </div>
      </body>
    </html>
  );
}
