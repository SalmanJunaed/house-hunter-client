// import { Link } from "react-router-dom"
import useHouse from "../../hooks/useHouse"

const HouseAndBookings = () => {
    const [house] = useHouse()
    return (
        <div>
            <h2 className="text-2xl text-center py-4">House and Bookings </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>City </th>
                                <th>Address</th>
                                <th>Bed room</th>
                                <th>Bath room</th>
                                <th>Size</th>
                                <th>Owner Name</th>
                                <th>E-mail</th>
                                <th>Contact no.</th>
                                <th>Rent/month</th>
                                <th>Add Room</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                house.map((item, index) => <tr key={item._id}>
                                    <th>{index+1}</th>
                                    <td>{item.city}</td>
                                    <td>{item.address}</td>
                                    <td>{item.bedrooms}</td>
                                    <td>{item.bathrooms}</td>
                                    <td>{item.roomSize}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.countryCode}{item.phone}</td>
                                    <td>{item.rentPerMonth}</td>
                                    <td>{item.availability != true ? <p className="text-green-600 font-bold text-center"><button type="submit" className="btn">Book House</button></p> : <p className="text-red-600 font-bold bg-red-200 py-2 text-center">Reserved</p>}</td>
                                </tr> )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HouseAndBookings
