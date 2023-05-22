import styled from "styled-components";


export const RedeSociais = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ItensRedeSociais = styled.a`
    font-size: 30px;
    margin-top: 20px;
    border: 2px solid white;
    margin-right: 5px;
    color: gray;
    background-color: #151515;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #353535;
        transform: scale(1.2);
    }

    &:hover:nth-of-type(1){
        transition: 0.4s;
        transform: translateY(-5px);

        svg {
            color: white;
        }
    }

    &:hover:nth-of-type(2){
        transition: 0.4s;
        transform: translateY(-5px);

        svg{
            color: #2962ff;
            background-color: white;
        }
    }

    &:hover:nth-of-type(3){
        transition: 0.4s;
        transform: translateY(-5px);
        color: green;

        svg{
            color: white;
            background-color: #3b58;
        }
    }
`;
