import { useState } from "react"

export default function State(){
let [count,countSet]=useState(0)


const increaseNum=()=>{

    count +=1
    countSet(count)

}

const deccreaseNum=()=>{
 count -=1
 countSet(count)
    
}

return(



<div>
<h3>Counter: {count}</h3>
<button onClick={increaseNum}>Increase</button>
<button onClick={deccreaseNum}>Decrease</button>

</div>



)







}