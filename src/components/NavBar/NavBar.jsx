import { Link } from "react-router-dom"

const NavBar = () => {
    const navOptions = <>
        <li className="bg-slate-200">
            <a>
            <Link to='/'>Home</Link>
            </a>
        </li>
        <li className="bg-slate-200">
            <a>
            <Link to='/login'>Login</Link>
            </a>
        </li>
        <li className="bg-slate-200">
            <a>
            <Link to='/register'>Register</Link>
            </a>
        </li>
        <li className="bg-yellow-500">
            <a>
            <Link to='/dashboard/bookHouse'>Dashboard</Link>
            </a>
        </li>


        {/* <li><Link to="/dashboard/userHome">User Dashboard</Link></li> */}
    </>
    return (
        <>
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">House Hunter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
        </>
        
    )
}

export default NavBar
