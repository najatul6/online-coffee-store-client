import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import CoffeeCard from "../../components/CoffeeCard";
import { useState } from "react";

const HomePage = () => {
    const coffeeCollection = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeCollection)

    return (
        <div>
            <Banner></Banner>
            <div style={{ backgroundImage: "url(/1.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%", }}>
                <div className="max-w-[1440px] mx-auto my-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-center my-10">Our Popular Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            coffees.map(coffee => <CoffeeCard
                                 key={coffee._id} 
                                 coffee={coffee}
                                 coffees={coffees}
                                 setCoffees={setCoffees}
                                 ></CoffeeCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;