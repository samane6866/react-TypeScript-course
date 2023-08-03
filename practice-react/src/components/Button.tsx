// we define interface to define de shape of our props



interface Props {
    
    children: string;
    color? : "primary" | "secondary" | "danger";
    onClick: () => void;

}

function Button({ children, onClick, color = "primary" }: Props) {
    
    
return (
        <>
        <button className={"btn btn-" + color} onClick={onClick}>{children}</button>

        </>
    
    );
}
export default Button;