import { BsHeart } from "react-icons/bs";
 import { useState } from "react";

interface Props{
    onClick: () => void;
}



function Like({onClick}:Props) {
    const [status, setStatus] = useState(true);
    function handelToggel() {
        setStatus(!status)
        onClick();
    
    }
    return (
        <>
            <BsHeart size="40" style={{ backgroundColor: status ? "" : "red" }} onClick={handelToggel } />
        </> 


    )
}

export default Like;