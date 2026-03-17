import './globals.css'
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'Alex Chen | Data Science Engineer Portfolio',
  description: 'Portfolio of Alex Chen - 4th Year Computer Science Engineering Student specializing in Data Science, Machine Learning, and AI.',
  keywords: 'Data Science, Machine Learning, AI, Deep Learning, Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}