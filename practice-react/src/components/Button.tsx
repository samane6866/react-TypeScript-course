// we define interface to define de shape of our props

interface Props {
    
    children: string
    color?: "secondary" | "primary" | "danger";
    onClick: () => void;

}

function Button({children,onClick,color}:Props) {
return (
        <>
        <button type="button" className={"btn btn"+ color} onClick={onClick}>{children}</button>

        </>
    
    );
}
export default Button;