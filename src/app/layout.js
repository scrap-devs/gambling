import "./globals.css";
import { Provider } from  "./provider";
import { Roboto } from 'next/font/google'

const roboto = Roboto({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={roboto.className}>{children}</body>
      </Provider>
    </html>
  );
}

