import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #10183F;
    width: 100%;
    padding: 20px ;
    border-bottom: 2px solid #3CA63A;

`;

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

`;

export const Logo = styled.img`
    width: 100px ;
    height: 80px;
    max-width: 100%;
    border-radius: 40px;
    border: 3px solid #3CA63A;
    cursor: pointer;
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;

    @media screen and (max-width:768px){
        display: none;
    }
`;

export const Itens = styled(Link)`
    font-size: 20px;
    position: relative;
    color: white;
    cursor: pointer;

    &:before {
        content: '';
        bottom: -5px;
        position: absolute;
        width: 0%;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        background: #3CA63A;
        transition: width 0.4s;
    }

    &:hover{
        &:before {
            width: 100%;
        }
    }
`;

export const IconMobile = styled.div`
    display: none;
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 30px;
    color: white;
    cursor: pointer;

    @media screen and (max-width:768px){
        display: block;
    }
`;
