import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, supplier, category, chef, taste, details, photo };
        console.log(newCoffee)

        // Send Data to the server 
        fetch('https://online-coffee-store-server-qkjbw3zjx-jinkalas-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Great',
                        text: 'Coffee Added Successfully!',
                    })
                    form.reset()
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
                <h2 className="text-4xl text-[#374151] text-center">Add New Coffee</h2>
                <p className="text-center my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                <form className="mx-auto w-3/4" onSubmit={handleAddCoffee} >
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

                        {/* Form Left Rows  */}
                        <div className="space-y-6">
                            {/* Form Rows  */}
                            <div className="text-lg font-semibold space-y-4">
                                <p>Name</p>
                                <input required className="w-full p-3 rounded-lg bg-white" type="text" name="name" id="" placeholder="Enter coffee name" />
                            </div>

                            {/* Form Rows  */}
                            <div className="text-lg font-semibold space-y-4">
                                <p>Supplier</p>
                                <input required className="w-full p-3 rounded-lg bg-white" type="text" name="supplier" id="" placeholder="Enter coffee supplier" />
                            </div>
                            {/* Form Rows  */}
                            <div className="text-lg font-semibold space-y-4">
                                <p>Category</p>
                                <input required className="w-full p-3 rounded-lg bg-white" type="text" name="category" id="" placeholder="Enter coffee category" />
                            </div>
                        </div>

                        {/* Form Right Rows  */}
                        <div className="space-y-6">

                            {/* Form Rows  */}
                            <div className="text-lg font-semibold space-y-4">
                                <p>Chef</p>
                                <input required className="w-full p-3 rounded-lg bg-white" type="text" name="chef" id="" placeholder="Enter coffee chef" />
                            </div>

                            {/* Form Rows  */}
                            <div className="text-lg font-semibold space-y-4">
                                <p>Taste</p>
                                <input required className="w-full p-3 rounded-lg bg-white" type="text" name="taste" id="" placeholder="Enter coffee taste" />
                            </div>

                            {/* Form Rows  */}
                            <div className="text-lg font-semibold space-y-4">
                                <p>Details</p>
                                <input required className="w-full p-3 rounded-lg bg-white" type="text" name="details" id="" placeholder="Enter coffee details" />
                            </div>
                        </div>
                    </div>
                    {/* Form Rows  */}
                    <div className="text-lg font-semibold space-y-4 mt-6">
                        <p>Photo</p>
                        <input required className="w-full p-3 rounded-lg bg-white" type="text" name="photo" id="" placeholder="Enter photo URL" />
                    </div>
                    {/* Form Button  */}
                    <button type="submit" className="py-4 text-[#331A15] border-2 border-[#331A15] bg-[#D2B48C] text-center w-full rounded-lg mt-6 text-2xl">
                        Add Coffee
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddCoffee;