import { async } from "@firebase/util"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navegate = useNavigate()

    const {registerUser} = useContext(UserContext)

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("Procesando Form: ", email, password)
        console.log("Usuario registrado")
        navegate("/")
        try {
            await registerUser(email, password)
        } catch (error) {
            console.log(error.code)
        }
    }

  return (
    <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Ingrese email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Ingrese Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    </>
  )
}

export default Register