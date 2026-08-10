// import Banner from '../../public/GettyImages-1364057902.webp';
import Header from './Header';

export default function Navigator(){
    return <nav>
        <Header navColor="white" whiteLogo={true}/>

        <div className='banner'>
            <h1>Your Trusted 
                <br />
                Asset Manager
            </h1>
            
            <a href='' className='getting_started'>Get Started</a>
        </div>
    </nav>
}