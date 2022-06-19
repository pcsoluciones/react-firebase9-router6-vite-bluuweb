import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const {user} = useContext(UserContext)

    if (!user){
        return <Navigate to="/login" />
    }

  return children       // redendizará el resto de los componentes
}

export default RequireAuth