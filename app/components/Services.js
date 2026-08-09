import Service from "./Service";
import Image1 from '../../public/GettyImages-2170384534-1.webp';
import Image2 from '../../public/GettyImages-2065938875-1.webp';
import Image3 from '../../public/GettyImages-1215205229-1.webp';
import Image4 from '../../public/gettyimages-1848417745-1024x1024-1.webp';

export default function Services(){
    return <section className="services">
        <p className="rounded-text">Services</p>

        <h2 className="section-title">We Champion the Bold to Achieve the Extraordinary</h2>

        <div className="our-services">
            <Service image={Image1} title="Consulting"/>
            <Service image={Image2} title="Asset Management"/>
            <Service image={Image3} title="Risk & Financial"/>
            <Service image={Image4} title="AI & Analytics"/>
        </div>
    </section>
}