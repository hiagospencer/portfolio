import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;
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

export const BoxSkills = styled.div`
    display: flex;
    width: 100%;
`;
