import Philosophy from "./Philosophy";
import Image1 from '../../public/GettyImages-2170384534-1.webp';
import Image2 from '../../public/GettyImages-2065938875-1.webp';
import Image3 from '../../public/GettyImages-1215205229-1.webp';
import Image4 from '../../public/gettyimages-1848417745-1024x1024-1.webp';

export default function Philosophies(){
    return <section className="services2">
        <p className="rounded-text">Our Philosophies</p>

        <h2 className="section-title" style={{textAlign: "center"}}>Strategic Interventions that <br /> Transform our Clients' Business
 <br /> Trajectory</h2>

        <div className="philosophies">
            <Philosophy content={"With the technologies, business models and ecosystems of every client’s market"} title={"Deep expertise"}/>
            <Philosophy content="A hands-on, collaborative approach to developing solutions for long-term success" title="Collaborative approach"/>
            <Philosophy content="Data-driven insights tackling core issues through analysis and research" title="Philosophy of evidence"/>
            <Philosophy content="Turning insights into impactful action by overcoming strategic barriers" title="The know-how"/>
        </div>
    </section>
}