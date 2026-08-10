import Header from "../components/Header"
import Investment from '../../public/images.png';
import Footer from "../components/Footer"
import Image from "next/image";

export default function ForgotPassword(){
    return <>
        <Header whiteLogo={false} />

        <div className="form-panel">
            <div className="form-container">
                <h2>Forgot Password</h2>

                <form>
                    <div className="form-content">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter your email"/>
                    </div>

                    <div className="form-content">
                        {/* <input type="submit" value="Submit" /> */}
                        <button>Reset</button>
                    </div>

                    <center className="extra-form">
                        <p>Remember Password? <a href="/login">Login</a></p>

                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </center>
                </form>
            </div>

            <Image src={Investment} alt="Login Image" />
        </div>

        <Footer />
    </>
}