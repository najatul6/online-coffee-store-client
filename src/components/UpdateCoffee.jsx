import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, supplier, category, chef, taste, details, photo };
        console.log(updatedCoffee)

        // Send Data to the server 
        fetch(`https://online-coffee-store-server-qkjbw3zjx-jinkalas-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Great',
                        text: 'Coffee Updated Successfully!',
                    })
                }
            })

    }

    return (
        <div className="max-w-[1440px] mx-auto min-h-screen">
            <Link to="/" className="flex gap-3 w-fit items-center text-3xl text-[#374151] mt-12 py-4 px-2 hover:bg-[#D2B48C] hover:rounded-lg">
                <FaArrowLeftLong></FaArrowLeftLong>
                Back to home
            </Link>

            <div className="bg-[#F4F3F0] rounded-lg py-8 md:w-3/4 mx-auto my-10">
                <h2 className="text-4xl text-[#374151] text-center">Update Existing Coffee Details</h2>
                <p className="text-center my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                <form className="mx-auto w-3/4" onSubmit={handleUpdateCoffee}>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="space-y-6">
                            <div className="text-lg font-semibold space-y-4">
                                <p>Name</p>
                                <input className="w-full p-3 rounded-lg bg-white" type="text" name="name" id="" defaultValue={name} placeholder="Enter coffee name" />
                            </div>
                            <div className="text-lg font-semibold space-y-4">
                                <p>Supplier</p>
                                <input className="w-full p-3 rounded-lg bg-white" type="text" name="supplier" id="" defaultValue={supplier} placeholder="Enter coffee supplier" />
                            </div>
                            <div className="text-lg font-semibold space-y-4">
                                <p>Category</p>
                                <input className="w-full p-3 rounded-lg bg-white" type="text" name="category" id="" defaultValue={category} placeholder="Enter coffee category" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="text-lg font-semibold space-y-4">
                                <p>Chef</p>
                                <input className="w-full p-3 rounded-lg bg-white" type="text" name="chef" id="" defaultValue={chef} placeholder="Enter coffee chef" />
                            </div>
                            <div className="text-lg font-semibold space-y-4">
                                <p>Taste</p>
                                <input className="w-full p-3 rounded-lg bg-white" type="text" name="taste" id="" defaultValue={taste} placeholder="Enter coffee taste" />
                            </div>
                            <div className="text-lg font-semibold space-y-4">
                                <p>Details</p>
                                <input className="w-full p-3 rounded-lg bg-white" type="text" name="details" id="" defaultValue={details} placeholder="Enter coffee details" />
                            </div>
                        </div>
                    </div>
                    <div className="text-lg font-semibold space-y-4 mt-6">
                        <p>Photo</p>
                        <input className="w-full p-3 rounded-lg bg-white" type="text" name="photo" id="" defaultValue={photo} placeholder="Enter photo URL" />
                    </div>

                    <button type="submit" className="py-4 text-[#331A15] border-2 border-[#331A15] bg-[#D2B48C] text-center w-full rounded-lg mt-6 text-2xl">
                        Update Coffee Details
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateCoffee;