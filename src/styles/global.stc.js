import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  
  .info {
    width: 400px;
  }
  .detail {
    background-color: #f9f3df;
    color: #272739;
    padding: 2px 5px;
    border-radius: 5px;
  }
  @media (max-width: 430px){
    .info{
      width: auto;
    }
  }
`;

export const ActionButton = styled.button`
  padding: 10px 13px;
  border-radius: 3px;
  border: none;
  background-color: #272739;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
`;
