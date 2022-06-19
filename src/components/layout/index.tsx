import { ReactElement } from 'react'
import Loader from '../Loader'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      {false ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="h-[500px]">{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}
