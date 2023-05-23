import styled  from "styled-components";
import img from  '../../assets/images/plano-fundo.jpeg';

export const Container = styled.div`
    width: 100%;
    background-color: #303030;
    // background: linear-gradient(0, #120c56, #000000);
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    height: 700px;
    padding-top: 100px;

    @media screen and (max-width: 768px){
        background-position: 100% 100%;
        background-size: cover;
    }
`;

export const Apresentacao = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
    line-height: 60px;

    svg {
        position: fixed;
        z-index: 9999;
        right: 3%;
        bottom: 7%;
        font-size: 40px;
        background-color: green;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        animation: top 3s ease-in infinite;

        @keyframes top {
            0% {
             transform: translateY(0);
             }

            50% {
                transform: translateY(20px);
             }
            100% {
              transform: translateY(0);
             }
        }

        @media screen and (max-width: 768px){
            right: 8%;
            bottom: 13%;
        }
    }

    @media screen and (max-width: 768px){
        padding-top: 160px;
        width: 95%;
        text-align: center;
    }
`;

export const Name = styled.h1`
    font-size: 46px;
    font-weight: 700;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 36px;
        text-align: center;
    }
`;

export const Paragrafo = styled.p`
    font-size: 26px;
    font-style: italic;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 20px;
        text-align: center;
    }
`;
