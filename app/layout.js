import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from '@/context'



export const metadata = {
  title: 'VitalEase',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalState>
          {/* {isAuthUser &&<DashNav/>} */}
          <main>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
