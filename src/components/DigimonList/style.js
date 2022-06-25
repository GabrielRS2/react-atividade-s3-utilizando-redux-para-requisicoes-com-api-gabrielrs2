import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;


  }

  li {
    height: 400px;
    width: 350px;
  }

  li img {
    width: 350px;
    height: 350px;
  }
`;