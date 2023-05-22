import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-width: 1100px;
    margin:  0 auto;
    padding: 0 2%;
`;

export const Title = styled.h1`
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

export const Perfil = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 0;

    @media screen and (max-width: 768px){
        display: block;
    }
`;

export const Biografia = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`;

export const SubTitle = styled.h2`
    padding-bottom: 30px;
`;

export const Descricao = styled.p`
    line-height: 32px;
`;

export const BoxImg = styled.div`
    width: 50%;
    filter: drop-shadow(0 0 0.4em rgb(38, 212, 255));

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 25px;
    }
`;

export const Img = styled.img`
    border-radius: 50%;
    border: 4px solid white;
    width: 350px;
    max-width: 100%;
    height: 350px;
    margin-left: 20%;

`;


export const Button = styled.a`
    display: block;
    position: relative;
    padding: 12px 40px;
    margin-top: 40px;
    background-color:#1CA33A;
    border: none;
    border-radius: 5px;
    transition: 0.4s ease;
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    width: 200PX;
    height: 40px;
    transition: 0.6s ease;
    cursor: pointer;

    &:hover{
        background-color: #6AD65B;
    }

    svg {
        position: absolute;
        right: 45px;
        bottom: 14px;
        font-size: 17px;

    }

    @media screen and (max-width: 768px){
        width: 200PX;
        margin: 12px auto;
    }
    svg {
        position: absolute;
        right: 30px;
        bottom: 14px;
        font-size: 17px;

    }
`;
