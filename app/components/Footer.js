import Image from 'next/image'
import Penguin2 from '../../public/penguin2.png';

export default function Footer(){
    return <footer>
        <div>
            <div>
                <Image src={Penguin2} alt="Logo" /> 

                <p>+234 816 571 1302</p>

                <a href='/contact' className='heavy-link'>Contact Us</a>
            </div>
        </div>

        <br />
        <hr />

        <div className='footer-base'>
            <p>© 2026 Revayah Fund. All Rights Reserved</p>

            <ul>
                <li> <a href='/terms'>Terms</a> </li>
                <li> <a href='/privacy'>Privacy</a> </li>
            </ul>
        </div>
    </footer>
}