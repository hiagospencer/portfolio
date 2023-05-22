import styled from "styled-components";

export const Skills = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const GridSkill = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    padding: 40px 50px;
    border: #303030 1px solid;
    filter: drop-shadow(0 0 0.2em #1CA33A);
    margin: 0 auto;
    transition: 1s all ease;
    background-color: #303030;

    &:hover{
        border: 1px solid #1CA33A;
        transform: scale(1.1);
    }
`;

export const Skill = styled.img`
    min-width: 80px;
    max-height: 80px;
    width: 100%;
    pointer-events: none;
`;
