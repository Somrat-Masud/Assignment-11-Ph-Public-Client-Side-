import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import{Navigate} from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;