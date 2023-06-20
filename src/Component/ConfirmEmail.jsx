import { useEffect ,useState} from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function ConfirmEmail (props){
    const {token} = useParams()
// console.log(token)
    const {setAuthenticated, setUserName, setUserId} = props
    
const [message, setMessage] = useState("")
const [errorMessage, setErrorMessage] = useState("")

useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/api/auth/confirm-email/${token}`)
    .then(res=>{
        setMessage(res.data)
        console.log(res)}
        )
    .catch(err => setErrorMessage(err.message))
}, [])

return( <div>
    {message && <h2> Your Account has been verified</h2>}
    {errorMessage && <h2 style={{color:"red"}}>{errorMessage}</h2>}
</div>)}