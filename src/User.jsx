import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function User(){

const [users,setUsers]=useState([])


useEffect(()=>{

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>res.json())
.then(data=>setUsers(data))



},[])

return(
<>
{users.map(friend => <Friend friend={friend}></Friend>)}
</>





)





}