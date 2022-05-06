import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.postBackgroundColor};
  /* background: #000; */
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
  a {
    /* color: #fff; */

    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: 16px; //caso tenha um link anterior, adiciona margin no link seguinte
    }
  }
`;
