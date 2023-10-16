import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-[1440px] mx-auto">
                <Link to="/" className="flex justify-center gap-3 items-center text-3xl text-[#374151] mt-12">
                    <FaArrowLeftLong></FaArrowLeftLong>
                    Back to home
                </Link>
                <img className="mx-auto" src="/404.gif" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;