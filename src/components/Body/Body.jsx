import useHouse from "../../hooks/useHouse";
import HouseCard from "../HouseCard/HouseCard";


const Body = () => {
    const [house] = useHouse();
    return (
        <div>
            <h1 className="text-3xl text-center">Search Home by city name</h1>
            <div className="mx-auto text-center bg-slate-300">
                <input type="text" placeholder=" Search....." className="search border-1 my-4 px-4"/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
                    {
                        house.map(item => <HouseCard
                        key={item._id}
                        item={item}
                        ></HouseCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Body;