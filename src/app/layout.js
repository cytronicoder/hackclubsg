import './globals.css'

export const metadata = {
  title: 'Hack Club Singapore',
  description: 'Supporting the next generation of makers, builders, and hackers across Singapore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
