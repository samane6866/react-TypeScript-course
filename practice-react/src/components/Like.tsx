import {BsHeart} from "react-icons/bs";

interface Props{
    onClick: () => void;
}

function Like({onClick,}:Props) {
    
    return (
        <>
            <BsHeart size= "40" />
        </> 


    )
}

export default Like;