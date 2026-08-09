import Image from 'next/image'

export default function Service({image, title}){
    return <a className='service_panel'>
        <Image src={image} alt="Logo" />

        <p>{title}</p>
    </a>
}