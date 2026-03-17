import './globals.css'
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'Tanishq Chauhan | Data Science & Software Development Portfolio',
  description: 'Portfolio of Tanishq Chauhan - Final-year Computer Science Engineering student specializing in Data Science and Software Development. Proficient in Python, Java, Machine Learning, and AI.',
  keywords: 'Data Science, Machine Learning, AI, Tanishq Chauhan, Data Science, Machine Learning, AI, Software Development, Python, Java, SQL',
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