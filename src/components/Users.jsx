import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);

    const handleDelete = id => {
        Swal.fire({
            icon: 'question',
            title: 'Do you want to Delete?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Saved!', '', 'success')
                            const remainingUser = users.filter(remaincoffee => remaincoffee._id !== id);
                            setUsers(remainingUser)
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Coffee is not Deleted', '', 'info')
            }
        })
    }

    return (
        <div className="bg-gray-500">
            <div className="max-w-[1440px] mx-auto py-5">
                <div className="flex justify-center items-center min-h-screen">
                    <div>
                        <h2 className="text-4xl text-center py-5">Total Users : {users.length}</h2>
                        <div className="overflow-x-auto">
                            <table className="table border">
                                {/* head */}
                                <thead>
                                    <tr className="text-center text-xl">
                                        <th className="border">Serial</th>
                                        <th className="border">Name</th>
                                        <th className="border">Email</th>
                                        <th className="border">Create Date</th>
                                        <th className="border">Last Log In</th>
                                        <th className="border">Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        users.map(user =>
                                            <tr key={user._id}>
                                                <th className="border">&square;</th>
                                                <td className="border">{user.name}</td>
                                                <td className="border">{user.email}</td>
                                                <td className="border">{user.createdAt}</td>
                                                <td className="border">{user.lastLogInAt}</td>
                                                <td className="border text-center text-red-500 text-xl">
                                                    <button onClick={() => handleDelete(user._id)}>
                                                        <IoPersonRemoveSharp></IoPersonRemoveSharp>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;