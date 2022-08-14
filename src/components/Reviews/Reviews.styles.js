import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    h1 {
        color: var(--midGrey);
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`;
export const Content = styled.div`
    border-radius: 20px;
    border: 1px solid var(--medGrey);
    padding: 20px;
    .author {
        display: flex;
        align-items: center;
        margin: 0 0 10px 0;

        img {
            height: 70px;
            width: 70px;
            border-radius: 50%;
            margin-right: 10px;
        }
        h3 {
        }
    }

    :hover {
        opacity: 0.9;
    }
    

`;

export const Text = styled.span`
        cursor: pointer;
        font-size: var(--fontSmall);
`;
