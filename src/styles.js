import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const DeleteButtonStyled = styled.button`
  background: ${(props) => props.theme.red};
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.red};
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  margin-bottom: 2%;
  display: block;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const LogoDark = styled(Link)`
  padding: "0.30em 1em";
  img {
    width: 15%;
  }
`;

export const LogoLight = styled(Link)`
  padding: "0.30em 1em";
  img {
    width: 15%;
  }
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  &.active {
    color: red;
  }
`;

export const AddButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
`;

export const CreateButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const BackButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
  margin-top: 2%;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const LoadingWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 10%;
`;

export const ShopButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 6%;
`;
