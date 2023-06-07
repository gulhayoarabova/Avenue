import React from 'react'
import Image from 'next/image'
import logo from "../assets/images/Avenue.png"
import classes from "../app/styles/Header.module.scss"
const Header = () => {
  return (
    <div className={classes.header_wrapper}>
<div className={classes.container}>
    <Image src={logo} alt=""/>

    <ul>
        <li>Home</li>
        <li>Service</li>
        <li>Service</li>
        <li>Contact Us</li>
        <button>Login</button>
    </ul>
</div>
    </div>
  )
}

export default Header