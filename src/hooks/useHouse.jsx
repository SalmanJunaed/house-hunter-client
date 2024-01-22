import { useEffect, useState } from "react";

const useHouse = () => {
    const [house, setHouse] = useState([]);
    const [loading, setLoading] = useState (true);
    useEffect(()=>{
        fetch('homedata.json')
            .then(res => res.json())
            .then(data => {
                setHouse(data);
                setLoading(false);
            });
    }, [])
    return [house, loading]
}

export default useHouse;