import Header from "../components/Header"
import Investment from '../../public/investment.png';
import Footer from "../components/Footer"
import Image from "next/image";

export default function Signup(){
    return <>
        <Header whiteLogo={false} />

        <div className="form-panel">
            <div className="form-container">
                <h2>Sign Up</h2>

                <form>
                    <div className="form-content">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter your email"/>
                    </div>

                    <div className="form-content">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password"/>
                    </div>

                    <div className="form-content">
                        {/* <input type="submit" value="Submit" /> */}
                        <button>Submit</button>
                    </div>

                    <center className="extra-form">
                        <p>Do you have an account? <a href="/login">Login</a></p>
                    </center>
                </form>
            </div>

            <Image src={Investment} alt="Signup Image" />
        </div>

        <Footer />
    </>
}