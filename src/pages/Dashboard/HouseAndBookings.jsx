import { Link } from "react-router-dom"
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
                                house.map(item => <tr key={item._id}>
                                    <th>{item.city}</th>
                                    <td>{item.address}</td>
                                    <td>{item.bedrooms}</td>
                                    <td>{item.bathrooms}</td>
                                    <td>{item.roomSize}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.countryCode}{item.phone}</td>
                                    <td>{item.rentPerMonth}</td>
                                    <td> <input type="btn" /> </td>
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
