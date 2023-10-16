
import { FaEye, FaPen } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    // Delete Button 
    const handleDelete = _id => {
        Swal.fire({
            icon:'question',
            title: 'Do you want to Delete?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Saved!', '', 'success')
                            const remainingCoffees = coffees.filter(remaininggcoffee => remaininggcoffee._id !== _id);
                            setCoffees(remainingCoffees)
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Coffee is not Deleted', '', 'info')
            }
        })
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#F5F4F1] shadow-xl rounded-xl py-4 px-8">
                <div className="p-4">
                    <img className="rounded-lg h-[239px] w-[185px]" src={photo} alt="" />
                </div>
                <div>
                    <h2>Name : {name}</h2>
                    <p>Chef : {chef}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Category : {category}</p>
                    <p>Taste : {taste}</p>
                    <p>Details : {details}</p>
                </div>
                <div className='text-xl flex flex-col'>
                    <button className='rounded-lg p-3 bg-[#D2B48C]'><FaEye className=' text-white'></FaEye></button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className='rounded-lg bg-[#3C393B] p-3 my-5'> <FaPen className=' text-white'></FaPen></button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className='rounded-lg bg-[#EA4744] p-3'><MdDeleteForever className=' text-white'></MdDeleteForever>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CoffeeCard;