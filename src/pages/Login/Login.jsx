import { Link } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
    const axiosSecure = useAxiosSecure;
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginValue = {email, password}
        console.log(loginValue);

        // sending login data to server 
        axiosSecure.post("/userLogin", loginValue)
        .then (res => {
            const data = res.data;
            if (data.login){
                
            } 
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <p className="py-6">
                        login to access adding / booking house for rant.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input value='Login' type="submit" className="btn btn-primary"  />
                        </div>
                    </form>
                    <p className=" px-6 text-center py-6">
                        Do not have an account? then
                        <Link to="/register">
                            <span className="text-blue-600 font-blue">
                                Register
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
