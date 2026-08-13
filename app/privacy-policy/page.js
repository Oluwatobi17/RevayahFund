import Footer from "../components/Footer"
import Header from "../components/Header"

export default function PrivacyPolicy(){
    return <>
        <Header whiteLogo={false} />

        <section className="article-section">
            <center>
                <span className="rounded-text2">Privacy Policy</span>

                <h1>Privacy Policy Information</h1>
            </center>

            <div className="article-content">
                <h3>What information do we collect?</h3>

                <p>
                    When you interact with us, we may collect your name, address, email address(es), telephone number(s), and, where appropriate, date of birth.
                </p>
            </div>

            <div className="article-content">
                <h3>How do we collect information?</h3>

                <p>
                    We may collect information about you whenever you interact with us. For example, when you contact regarding our activities, register as a supporter, send or receive information or sign a petition, you specifically and knowingly provide us with your personal information. We may also receive information about you from third parties – but only if you have given them permission to share your information.
                </p>
            </div>

            <div className="article-content">
                <h3>Confidentiality</h3>

                <p>
                    We will not be responsible for the privacy of data collected by websites not owned or managed by Charity, including those linked through our website.    
                </p>
            </div>

            <div className="article-content">
                <h3>Making a complaint</h3>

                <p>
                    If you are not satisfied with the response, please contact us at hello@revayahfund.com with the details explaining your concerns. We will review your complaint and investigate if the right procedures have been followed and respond back to you as appropriate. We aim to complete this investigation within 15 working days of receiving your complaint, however, in some cases it may take longer. If you are still unsatisfied with the response, you may contact us.
                </p>
            </div>
        </section>

        <Footer />
    </>
}