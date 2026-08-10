import Header from "../components/Header"
import Investment from '../../public/images.png';
import Footer from "../components/Footer"
import Image from "next/image";

export default function Login(){
    return <>
        <Header whiteLogo={false} />

        <div className="form-panel">
            <div className="form-container">
                <h2>Welcome Back</h2>

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
                        <a href="/forgot-password">Forgot Password?</a>

                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </center>
                </form>
            </div>

            <Image src={Investment} alt="Login Image" />
        </div>

        <Footer />
    </>
}