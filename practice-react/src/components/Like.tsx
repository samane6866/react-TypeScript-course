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


// the other way to this exercise could be through if conditional and and add other icon with diffrent color, in case that if is false show else; example : if (status) return <iconHeartRED oncliCk={handelTogel}/>
// return <iconHeartWhite onClicke={handelTogel}/>