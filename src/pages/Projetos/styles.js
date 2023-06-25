import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1200px;
    margin:  0 auto;
    padding: 0 2%;
`;

export const Title = styled.h1`
    margin-top: 100px;
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    color: white;
    padding: 60px 0;

    &::before{
        content: '';
        position: absolute;
        display: block;
        bottom: 35px;
        left: 47.5%;
        width: 60px;
        height: 2px;
        background-color: #1CA33A;
    }
`;

export const BoxProjeto = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`;

export const Projeto = styled.div`
    width: 32%;
    background-color: #303030;
    border-radius: 7px;
    border: #303030 1px solid;
    transition: 200ms ease-in;


    &:hover{
        border: 1px solid #1CA33A;
        transform: scale(1.03);
    }

    @media screen and (max-width: 768px){
        width: 85%;
        margin: 10px auto;
    }
`;

export const Img = styled.img`
    max-width: 100%;
    width: 80%;
    height: 200px;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    padding-top: 10px;
`;

export const Titulo = styled.h3`
    font-weight: normal;
    font-style: italic;
    text-align: center;
    padding-top: 15px;
`;

export const Descricao = styled.p`
    text-align: center;
    padding: 10px 15px;
    line-height: 25px;
    font-size: 16px;
    color: #ccc;
`;


export const Button = styled.a`
    display: block;
    margin: 10px auto;
    text-align: center;
    background-color: #02fcf3;
    color: #161618;
    border-radius: 10px;
    width: 130px;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;

    svg {
        font-size: 13px;
    }

    &:hover{
        background-color: #a9e4cf;
        svg {
            margin-left: 5px;
        }
    }
`;
