import "./globals.css";
import { Provider } from  "./provider";
import { Roboto } from 'next/font/google'
import { Inter } from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: '300'})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={roboto.className}>{children}</body>
      </Provider>
    </html>
  );
}

