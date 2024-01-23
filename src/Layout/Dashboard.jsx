import { NavLink, Outlet,} from "react-router-dom";


const Dashboard = () => {
    return ( <div className="flex">
            {/* Dashboard Sidebar */}
            <div className="w-64 min-h-screen bg-slate-500">
                <ul className="menu">
                    {/* Renter dashboard  */}
                    <li>
                        <NavLink to='/dashboard/bookings'>Listed House & Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink  to='/dashboard/addHouse'>Add a House</NavLink>
                    </li>



                    <li>
                        <NavLink to='/dashboard/bookHouse'>Book house</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/ownerHouse'>Owned House</NavLink>
                    </li>

                    
                    {/* Shared nav link  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>


                </ul>
            </div>

            {/* Dashboard Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;