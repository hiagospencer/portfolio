import styled from "styled-components";

export const Footer = styled.footer`
    color: white;
    background-color: #303030;
    text-align: center;
    width: 100%;
    padding: 0 0 10px 0;
    margin-top: 60px;
`;

export const Paragrafo = styled.p`
    padding: 15px 0;
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
`;

export const Links = styled.a`


    svg {
        font-size: 25px;
        margin-left: 7px;
        color: white;
        cursor: pointer;
        color: gray;
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
            background: #3b58;
        }
    }


`;
