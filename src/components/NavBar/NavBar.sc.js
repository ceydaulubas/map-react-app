import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
`;

export const Logo = styled.a`
  color: #ff8500;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;

  img {
    max-width: 100%;
    max-height: 45px;
    height: auto;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Link = styled.a`
  color: #ff8500;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
