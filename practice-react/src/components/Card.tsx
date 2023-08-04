import styled from "styled-components";

interface CardProps {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  }
  
  const BoxCard = styled.div<CardProps>`
    background-color: ${(props) => props.backgroundColor || "red"};
    color: ${(props) => props.textColor || "black"};
    border: 1px solid ${(props) => props.borderColor || "#ccc"};
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  `;
  
  function Card() {
    return (
      <>
        <BoxCard backgroundColor="" textColor="yellow" borderColor="green">
          HOLA
        </BoxCard>
      </>
    );
  }

export default Card;