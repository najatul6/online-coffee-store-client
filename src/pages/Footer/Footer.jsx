import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div style={{
            backgroundImage: `url("/13.jpg")`
        }}>

            <footer className="flex flex-col md:flex-row justify-between p-10 text-[#1B1A1A] max-w-[1440px] mx-auto">

                <div className="space-y-8">
                    <img className="w-[72px] h-[90px]" src="/logo1.png" alt="Brand Logo" />
                    <p className="text-3xl md:text-5xl text-[#331A15]">Espresso Emporium</p>
                    <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className="flex items-center gap-5 text-5xl">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsInstagram></BsInstagram>
                        <BsLinkedin></BsLinkedin>
                    </div>
                    <h2 className="text-3xl md:text-5xl">Get in Touch</h2>

                    <div className="text-xl">
                        <div className="flex gap-6 items-center">
                            <BsFillTelephoneFill className="text-2xl"></BsFillTelephoneFill>
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className="flex gap-6 items-center">
                            <BsFillEnvelopeFill className="text-2xl"></BsFillEnvelopeFill>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="flex gap-6 items-center">
                            <FaLocationDot className="text-2xl"></FaLocationDot>
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <h2 className="text-3xl md:text-5xl text-[#331A15]">Connect with Us</h2>
                    <form className="space-y-5 mt-8">
                        <input type="text" name="name" placeholder="Name" id="" className="py-4 px-5 w-full text-base rounded-md" />
                        <br />
                        <input type="email" name="email" id="" placeholder="Email" className="py-4 px-5 w-full text-base rounded-md" />
                        <br />
                        <textarea placeholder="Message" rows={5} className="py-4 px-5 w-full text-base rounded-md"></textarea>
                        <br />
                        <input type="submit" value="Send Message" className="text-2xl text-[#331A15] border-[#331A15] border-2 rounded-full py-3 px-6" />
                    </form>
                </div>
            </footer>
            <div style={{
                backgroundImage: `url("/24.jpg")`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"100%"
            }}>
                <p className="text-base md:text-xl text-white py-4 text-center">Copyright Espresso Emporium ! All Rights Reserved || Najatul Islam</p>
            </div>
        </div>
    );
};

export default Footer;