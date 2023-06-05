import './globals.css'
import { Inter, Kalam, Roboto } from 'next/font/google'

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ['latin'] 
})
const kalam = Kalam({ 
  weight: "700",
  display: "swap",
  variable: "--font-kalam",
  subsets: ["latin"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto"
})

export const metadata = {
  title: '3MWorkshop',
  description: 'Homebase server for MonMonMnemonics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={kalam.variable + " " + inter.variable + " " + roboto.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
