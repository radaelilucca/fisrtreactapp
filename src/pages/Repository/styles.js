import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 120px;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #666;
    max-width: 400px;
    text-align: center;
  }

  a {
    display: flex;
    text-decoration: none;
    margin-bottom: 15px;
    color: #7159c1;
    font-size: 16px;
    justify-content: center;
  }
`;
