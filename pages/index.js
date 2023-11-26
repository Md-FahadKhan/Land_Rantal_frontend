import { Inter } from 'next/font/google'
import Display from './Component/Display/Display'
import Navbar from './Component/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    
    <Navbar />
    <Display />
   </>
  )
}
