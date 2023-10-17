import { Link } from "react-router-dom";
// import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const { signInUser } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = {
                    email,
                    lastLogInAt: result.user?.metadata?.lastSignInTime
                }
                // update data  Last log in data base

                fetch('http://localhost:5000/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {

                            // Alert 
                            Swal.fire(
                                'Great !',
                                'Log In Successfully!',
                                'success'
                            )
                            form.reset()
                        }
                    })

            })
            .catch(error => {
                Swal.fire({
                    title: 'Oops...',
                    text: error.message,
                    icon: 'error',
                })
            })
    }

    return (
        <div style={{ backgroundImage: "url(/9.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%", mixBlendMode: 'darken' }}>
            <div className="max-w-[1440px] min-h-screen mx-auto py-5 flex justify-center items-center">
                <div className="relative flex flex-col items-center rounded-xl bg-transparent bg-clip-border text-[#331A15] shadow-xl md:p-8">
                    <h4 className="block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Log in
                    </h4>
                    <p className="mt-1 block leading-relaxed text-[#331A15] antialiased">
                        Enter your details to Log in.
                    </p>
                    <form onSubmit={handleLogIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    id=""
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 text-sm text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#331A15] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#331A15] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#331A15] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#331A15] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    id=""
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 text-sm text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#331A15] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#331A15] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#331A15] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#331A15] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>

                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-[#331A15] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#331A15] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Log in
                        </button>
                    </form>
                    {/* <div>
                        <div className="flex justify-center items-center py-4">
                            <p className="h-1 w-9 bg-[#331A15] rounded-full"></p>
                            <p className="text-lg mx-2"> Continue With</p>
                            <p className="h-1 w-9 bg-[#331A15] rounded-full"></p>
                        </div>
                        <div className="bg-[#331A15] flex justify-center text-white text-center rounded-xl py-2 px-3">
                            <button className="flex justify-center gap-2 items-center text-lg font-semibold uppercase text-center">
                                <BsGoogle></BsGoogle>
                                Google
                            </button>
                        </div>
                    </div> */}
                    <p className="mt-4 block text-center text-lg font-bold leading-relaxed text-[#331A15] antialiased">
                        Create an account?
                        <Link
                            className="ml-2 font-bold text-[#49e864] transition-colors hover:text-blue-700"
                            to='/signup'
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;