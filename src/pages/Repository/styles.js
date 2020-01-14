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
    font-size: 35px;
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
    font-size: 19px;
    justify-content: center;
  }
`;

export const IssuesList = styled.div`
  padding-top: 22px;
  margin-top: 22px;
  border-top: 1px solid #eee;

  flex-direction: column;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;
    }

    a {
      text-decoration: none;
      color: #333;
      &:hover {
        color: #7159c1;
      }
    }
    span {
      background: #7159f3;
      color: #eee;
      border-radius: 2px;
      font-size: 12px;
      font-weight: 600;
      height: 20px;
      padding: 3px 4px;
      margin-left: 10px;
    }

    p {
      font-size: 15px;
      color: #999;
      margin-top: 5px;
    }
  }
`;
