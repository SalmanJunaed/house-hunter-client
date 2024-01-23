import useAxiosPublic from "../hooks/useAxiosPublic";

const Authprovider = () => {
    const axiosPublic = useAxiosPublic();

    // track current loggedIn user
    const trackUser = (userName, userEmail, userRole) => {
        localStorage.setItem('name', userName);
        localStorage.setItem('email', userEmail);
        localStorage.setItem('userType', userRole);
        if (userEmail) {
            const userInfo = { email: userEmail };
            axiosPublic.post("/jwt", userInfo)
                .then(res => {
                    const data = res.data;
                    const token = data?.token;
                    if (token) {
                        localStorage.setItem('access-token', token);
                    }
                })
        }
        else {
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('role');
            localStorage.removeItem('access-token');
        }
    }
    return (
        
        <>
        </>
    );
};

export default Authprovider;