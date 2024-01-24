import Swal from 'sweetalert2';

const AddAHouse = () => {

    const handleAddHouse = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const address = form.address.value;
        const email = form.email.value;
        const countryCode = form.countryCode.value;
        const phone = form.phone.value;
        const city = form.city.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const roomSize = form.roomSize.value;
        const availability = form.availability.value;
        const rentPerMonth = form.rentPerMonth.value;
        const description = form.description.value;
        

        const addHome = {name, address, countryCode, phone, email, city, bedrooms, bathrooms, roomSize, availability, rentPerMonth, description}
        console.log(addHome);
        
        // send data to server 
        fetch('https://house-hunter-server-weld.vercel.app/house', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addHome)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'House Added',
                    icon: 'success',
                    confirmButtonText: 'OK!'
                })
            }
        })

    }

    return (
        <div className=" min-h-screen bg-base-200 mx-auto">
            <div className="hero-content flex flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Add a House</h1>
                </div>
                <div className=" card shadow-2xl bg-base-100 w-2/3">
                    <form onSubmit={handleAddHouse} className="card-body min-w-max">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Owner Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                name="address"
                                type="text"
                                placeholder="Address"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* City */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input
                                name="city"
                                type="text"
                                placeholder="City Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Country code  */}
                        <div className="form-control">
                            <label>
                                <span className="label-text">
                                    Country code{" "}
                                </span>
                            </label>
                            <select
                                name="countryCode"
                                className="input input-bordered"
                            >
                                <option value="+880">+880 Bangladesh </option>
                            </select>
                        </div>
                        {/* Phone  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                name="phone"
                                type="number"
                                placeholder="Phone Number"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* User Type  */}
                        <div className="form-control">
                            <label>
                                <span className="label-text">
                                    Select User Type{" "}
                                </span>
                            </label>
                            <select
                                name="userType"
                                defaultValue="orange"
                                className="input input-bordered"
                            >
                                <option value="owner">Owner</option>
                                <option value="renter">Renter</option>
                            </select>
                        </div>
                        {/* Email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        
                        {/* Rent / month */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent Per Month</span>
                            </label>
                            <input
                                name="rentPerMonth"
                                type="number"
                                placeholder="Rent Per Month"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Bedroom */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bedrooms</span>
                            </label>
                            <input
                                name="bedrooms"
                                type="number"
                                placeholder="NUmber of Bedrooms"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Bathroom */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bathrooms</span>
                            </label>
                            <input
                                name="bathrooms"
                                type="number"
                                placeholder="Number of Bathrooms"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        
                        {/* Room size */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room Size in sqft</span>
                            </label>
                            <input
                                name="roomSize"
                                type="number"
                                placeholder="Room Size"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Availability  */}
                        <div className="form-control">
                            <label>
                                <span className="label-text">
                                    Availability
                                </span>
                            </label>
                            <select
                                name="availability"
                                className="input input-bordered"
                            >
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                        </div>
                        {/* Add Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                name="description"
                                type="text"
                                placeholder="Description"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Submit Button  */}
                        <div className="form-control mt-6">
                            <input
                                value="Add the House"
                                type="submit"
                                className="btn btn-primary"
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddAHouse
