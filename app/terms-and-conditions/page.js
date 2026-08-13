import Footer from "../components/Footer"
import Header from "../components/Header"

export default function TermsAndCondition(){
    return <>
        <Header whiteLogo={false} />

        <section className="article-section">
            <center>
                <span className="rounded-text2">Terms & Conditions</span>

                <h1>Terms & Conditions</h1>
            </center>

            <div className="article-content">
                <h3>Comments</h3>

                <p>Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
            </div>

            <div className="article-content">
                <h3>Medias</h3>

                <p>
                    Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.  
                </p>
            </div>

            <div className="article-content">
                <h3>Cookies</h3>

                <p>
                    Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks.

If you log out of your account, the login cookies will be removed.

If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                </p>
            </div>

            <div className="article-content">
                <h3>What rights you have over your data</h3>

                <p>
                    Suggested text: If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    
                </p>
            </div>

            <div className="article-content">
                <h3>Where your data is sent</h3>

                <p>
                    Suggested text: Visitor comments may be checked through an automated spam detection service 
                </p>
            </div>
        </section>

        <Footer />
    </>
}