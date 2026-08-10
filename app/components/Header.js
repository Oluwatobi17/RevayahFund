'use client';
import Penguin from '../../public/penguin.png';
import Penguin2 from '../../public/penguin2.png';
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

export default function Header({navColor, whiteLogo}){
    const [showNavs, setShowNavs] = useState(false);

    return <header>
        <div>
            {whiteLogo && <Image src={Penguin2} alt="Logo" />}
            {!whiteLogo && <Image src={Penguin} alt="Logo" />}
        </div>

        <ul className='nav-links'>
            <li> <a href="/" className={navColor}>Home</a> </li>
            <li> <a href="" className={navColor}>Services</a> </li>
            <li> <a href="" className={navColor}>About</a> </li>
            <li> <a href="" className={navColor}>Contact</a> </li>
        </ul>

        <ul className='nav-links'>
            <li> <a href="/login" className={navColor}>Login</a> </li>
            <li> <a href="/signup" className={navColor}>Signup</a> </li>
        </ul>

        {!showNavs && <span className='hamburger' onClick={()=>setShowNavs(true)}>
            <FiMenu className={whiteLogo ? 'white':'business'} />
        </span>}

        {showNavs && <span className='close-icon' onClick={()=>setShowNavs(false)}>
            <IoMdClose className={whiteLogo ? 'white':'business'} />
        </span>}

        {showNavs && <ul className='nav-links-mobile'>
            <li> <a href="/">Home</a> </li>
            <li> <a href="">Services</a> </li>
            <li> <a href="">About</a> </li>
            <li> <a href="">Contact</a> </li>

            <li> <a href="/login">Login</a> </li>
            <li> <a href="/signup">Signup</a> </li>
        </ul>}
    </header>
}