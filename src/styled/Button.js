import styled from "styled-components"



export const Button = styled.button`
    background-color: black;
    color: white;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 10px  18px;
    min-width: 220px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: transparent;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    };
`;
export const OutlineButton = styled(Button)`// styled(Button=> all properties of above button comes in outlinebutton excepted changes properties)
    background-color: transparent;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
    };
`;