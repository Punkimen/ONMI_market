import './_styles/globals.scss';
import React from 'react';
import {manrope} from "@/app/fonts";
import {Layout} from "@/app/_components/layouts/Layout";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="page">
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  );
}
