import styled from 'styled-components';

export const Span = styled.span`

    &::after{
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: pisca .7s infinite;
    }

    @keyframes pisca{
        0%, 100%{

            color: white;
        }
        100% {
            color: rgba( 0,0,0,0);
        }
    }
`;
