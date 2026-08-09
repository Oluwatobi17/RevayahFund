'use client';
import Penguin from '../../public/penguin.png';
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

export default function Header({navColor}){
    const [showNavs, setShowNavs] = useState(false);

    return <header>
        <div>
            <Image src={Penguin} alt="Logo" />
        </div>

        <ul className='nav-links'>
            <li> <a href="" className={navColor}>Home</a> </li>
            <li> <a href="" className={navColor}>Services</a> </li>
            <li> <a href="" className={navColor}>About</a> </li>
            <li> <a href="" className={navColor}>Contact</a> </li>
        </ul>

        <ul className='nav-links'>
            <li> <a href="" className={navColor}>Login</a> </li>
            <li> <a href="" className={navColor}>Signup</a> </li>
        </ul>

        {!showNavs && <span className='hamburger' onClick={()=>setShowNavs(true)}>
            <FiMenu  />
        </span>}

        {showNavs && <span className='close-icon' onClick={()=>setShowNavs(false)}>
            <IoMdClose />
        </span>}

        {showNavs && <ul className='nav-links-mobile'>
            <li> <a href="">Home</a> </li>
            <li> <a href="">Services</a> </li>
            <li> <a href="">About</a> </li>
            <li> <a href="">Contact</a> </li>

            <li> <a href="">Login</a> </li>
            <li> <a href="">Signup</a> </li>
        </ul>}
    </header>
}