import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr minmax(100px, auto);
  grid-gap: 40px;
  position: relative;

  .logos{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user {
    font-size: var(--fontSmall);
    color: var(--white);
    display: flex;
    align-items: center;
  }

  .user::before {
    content: " ";
    position: relative;
    left: -15px;
    background: var(--lightGrey);
    background: var(--medGrey);
    padding: 20px 1px;
  }

  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;
