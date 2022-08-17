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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;

`;
export const Content = styled.div`
    .author {
        display: flex;
        align-items: center;
        box-shadow: 0 0 1px rgb(0 0 0 / 12%);
        border: 1px solid var(--lightGrey);
        border-bottom: none;
        padding: 3px 5px 3px 10px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        h3 {
            margin: 0;
        }
    }
    :hover {
        opacity: 0.9;
    }
`;

export const Text = styled.div`
    cursor: pointer;
    font-size: var(--fontSmall);
    box-shadow: 0 0 1px rgb(0 0 0 / 12%);
    border: 1px solid var(--lightGrey);
    padding: 5px 5px 5px 10px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;
