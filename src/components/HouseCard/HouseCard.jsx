const HouseCard = ({item}) => {

    const {ownerName, address, email, countryCode, phone, city, bedrooms, bathrooms, roomSize, availability, rentPerMonth, description } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className=" p-4 ">
                <h2 className="text-lg font-bold">Address: {address}</h2>
                <p>City: {city}</p>
                <p>Bed Room:{bedrooms}</p>
                <p>Bath Room:{bathrooms}</p>
                <p>size: {roomSize}</p>
                {item.availability != true ? <p>Available</p> : <p>Not Available</p> }
                <div className=" card-actions justify-center">
                    <button className="btn btn-primary">Book Home</button>
                </div>
            </div>
        </div>
    )
}

export default HouseCard
