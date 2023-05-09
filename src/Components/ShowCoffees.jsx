import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowCoffees = ({ coffee, Data, setData }) => {

    let { _id, name, quantity, supplier, test, category, details, photo, price } = coffee

    let remove = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/coffee/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )

                        }
                        console.log(data);

                        let remaining = Data.filter( item => item._id != id);
                        setData(remaining)
                          
                    })
            }
        })

    }


    return (
        <div>
            <div className="card lg:card-side bg-gray-400 shadow-xl">
                <figure><img src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <div className="card-actions justify-end ">
                        <div className="btn-group btn-group-vertical space-y-2">
                            <button className="btn btn-active">Button</button>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => remove(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowCoffees;