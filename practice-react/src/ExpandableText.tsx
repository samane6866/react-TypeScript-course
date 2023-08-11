import { useState } from "react"

interface Props{

    maxChars?: number,  //has difault value
    children: string,
   
}

function ExpandableText({ maxChars=100,children}: Props) {
     const [isExpanded, setExpanded] = useState(false)
    const text = isExpanded? children: children.substring(0,maxChars)
    return (
        <>
            
            <div>{children.length <= maxChars ? <p>{children}</p> : <p>{text}...<button onClick={()=> setExpanded(!isExpanded)}>{isExpanded? "Less": "More" }</button></p> }</div>
            {/* <button onClick={onClose}>More</button> */}
        
        </>
    )
}


export default ExpandableText;