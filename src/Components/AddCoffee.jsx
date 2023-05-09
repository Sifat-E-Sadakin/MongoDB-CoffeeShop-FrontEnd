import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {


    let add = event => {
        event.preventDefault();
        let name = event.target.name.value;
        let quantity = event.target.quantity.value;
        let supplier = event.target.supplier.value;
        let test = event.target.test.value;
        let category = event.target.category.value;
        let details = event.target.details.value;
        let photo = event.target.photo.value;
        let price = event.target.price.value;


        let newCoffee = { name, quantity, supplier, test, category, details, photo, price }
        console.log(newCoffee);

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Item Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })
    }
    return (
        <div>
            <h1>Add Coffee</h1>
            <form onSubmit={add}>
                <div className='flex justify-around'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Coffee Name</span>
                            <input required name='name' type="text" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Available Quantity</span>
                            <input required name='quantity' type="number" placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div>

                </div>
                <div className='flex justify-around'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier Name</span>
                            <input required name='supplier' type="text" placeholder="Supplier Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Coffee Taste</span>
                            <input required name='test' type="text" placeholder="Coffee Taste" className="input input-bordered" />
                        </label>
                    </div>

                </div>
                <div className='flex justify-around'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input required name='category' type="text" placeholder="Category" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input required name='details' type="text" placeholder="Details" className="input input-bordered" />
                        </label>
                    </div>

                </div>
                <div className='flex justify-around'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Photo URL</span>
                            <input required name='photo' type="text" placeholder="Photo URL" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input required name='price' type="number" placeholder="Price" className="input input-bordered" />
                        </label>
                    </div>

                </div>
                <input type="submit" className='btn btn-block my-3' />

            </form>

        </div>
    );
};

export default AddCoffee;