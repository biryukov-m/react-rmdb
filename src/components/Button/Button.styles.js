import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    height: 60px;
    font-size: var(--fontBig);
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    ${props => ((props.size === "small") ? ([
        "height: 30px;",
        "font-size: var(--fontSmall);",
        "min-width: 150px;",
        "width: 17%;"
    ])

        : "")}

    ${props => ((props.position === "center") ? ("margin: 20px auto;") : "")}


    :hover {
        opacity: 0.8;
    }

`;

