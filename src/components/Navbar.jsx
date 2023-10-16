import { NavLink } from "react-router-dom";
import { BiSolidUserCircle, BiFolderPlus, BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
    return (
        <div>
            <div className="btm-nav">
                <NavLink to="/" className="bg-pink-600">
                    <button className="text-white font-semibold text-xl flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <span className="btm-nav-label">Home</span>
                    </button>
                </NavLink>
                <NavLink to="/users" className="bg-blue-600">
                    <button className="active font-semibold text-white text-xl flex items-center gap-2 border-blue-600 border-2">
                        <BiSolidUserCircle></BiSolidUserCircle>
                        <span className="btm-nav-label">User</span>
                    </button>
                </NavLink>
                <NavLink to="/login" className="bg-teal-600">
                    <button className=" font-semibold text-white text-xl flex items-center gap-2">
                        <BiLogInCircle></BiLogInCircle>
                        <span className="btm-nav-label">Log In</span>
                    </button>
                </NavLink>
                <NavLink to="/addCoffee" className="bg-teal-800">
                    <button className=" font-semibold text-white text-xl flex items-center gap-2">
                        <BiFolderPlus></BiFolderPlus>
                        <span className="btm-nav-label">Add Coffee</span>
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;