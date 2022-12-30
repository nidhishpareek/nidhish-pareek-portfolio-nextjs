import MyApp from '../components/App'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <MyApp />
    </>
  )
}
