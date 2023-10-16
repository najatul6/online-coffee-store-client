
const Banner = () => {



    return (
        <div>
            <div
                style={{ backgroundImage: "url(/3.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", width: "100%" }}
            >
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex justify-end items-center h-[100vh] px-2">
                        <div>
                            <h2 className="text-3xl lg:text-5xl text-white">Would you like a Cup of Delicious Coffee?</h2>
                            <p className="text-white my-8">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <button className="text-2xl py-2 px-6 bg-[#E3B577]">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#ECEAE3] py-12 px-2">
                <div className="max-w-[1440px] mx-auto grid grid-cols-2  lg:grid-cols-4 gap-9">
                    <div>
                        <img className="w-[70px] h-[70px]" src="/public/icons/1.png" alt="" />
                        <h2 className="text-2xl lg:text-4xl my-4">Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img className="w-[70px] h-[70px]" src="/public/icons/2.png" alt="" />
                        <h2 className="text-2xl lg:text-4xl my-4">High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img className="w-[70px] h-[70px]" src="/public/icons/3.png" alt="" />
                        <h2 className="text-2xl lg:text-4xl my-4">Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img className="w-[70px] h-[70px]" src="/public/icons/4.png" alt="" />
                        <h2 className="text-2xl lg:text-4xl my-4">Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;