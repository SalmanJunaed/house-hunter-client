import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const countryCode = form.countryCode.value;
        const phone = form.phone.value;
        const userType = form.userType.value;
        const email = form.email.value;
        const password = form.password.value;

        const registration = {name, countryCode, phone, userType, email, password}
        console.log(registration);
        
        // send data to server 
        fetch('https://house-hunter-server-weld.vercel.app/newUser', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(registration)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Registered Successfully',
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
                    <h1 className="text-5xl font-bold text-center">Register</h1>
                </div>
                <div className=" card shadow-2xl bg-base-100 w-2/3">
                    <form onSubmit={handleRegister} className="card-body min-w-max">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* Country COde  */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country code</span>
                            </label>
                            <input
                                name="countryCode"
                                type="number"
                                placeholder="+880"
                                className="input input-bordered"
                                defaultValue="+880"
                                // value='+880'

                                // required
                            />
                        </div> */}
                        {/* User Type  */}
                        <div className="form-control">
                            <label> 
                                <span className="label-text">Country code </span> 
                            </label>
                            <select name="countryCode" className="input input-bordered">
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
                                <span className="label-text">Select User Type </span> 
                            </label>
                            <select name="userType" defaultValue="orange" className="input input-bordered">
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
                        {/* Password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input value='Register' type="submit" className="btn btn-primary"  />
                        </div>
                    </form>
                    <p className=" px-6 text-center py-6">
                        Already registered? then
                        <Link to="/login">
                            <span className="text-blue-600 font-blue">
                                Login
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
