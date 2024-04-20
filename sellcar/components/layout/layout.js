import React from 'react'
import Style from "./layout.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <>
    <header className={Style.header}>
        <Link href="/">
        <h2>Javad Cars</h2>
        <p>choose your favorite car</p>
        </Link>
    </header>
    <div className={Style.container}>
    {children}
    </div>
<footer className={Style.footer}>
    this is my footer &copy;
</footer>
    </>
  )
}

export default Layout