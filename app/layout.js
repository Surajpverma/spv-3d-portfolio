import Head from 'next/head'
import './globals.css'


export const metadata = {
  title: 'SPV | Portfolio',
  description: '3D version of personal portfolio of Surajpal Verma'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconDark.png" type="image/png" sizes="32x32" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
