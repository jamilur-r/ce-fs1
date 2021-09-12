import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  margin: 30px 0;
  min-width: 300px;
`;

export const TableHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    h2 {
      margin-bottom: 30px;
    }
  }
`;

export const TableFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    padding: 15px 13px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`;

export const TableSTC = styled.table`
  width: 100%;
  table-layout: fixed;

  display: block;
  overflow: scroll;
  text-align: left;
  border-radius: 5px;
  thead {
    width: 100%;
    background-color: #272739;
    color: #fff;
    th {
      box-sizing: border-box;
      padding: 18px 15px;
      font-size: 0.8rem;
      font-weight: 300;
    }
  }

  tbody {
    td {
      box-sizing: border-box;
      padding: 0 15px;
      span {
        background-color: #f9f3df;
        color: #272739;
        padding: 2px 5px;
        border-radius: 5px;
        margin-right: 7px;
      }
      font-size: 0.8rem;
      font-weight: 400;
      &:nth-child(1) {
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
    tr {
      &:nth-child(even) {
        background: #f7f7f7;
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 30px 15px;

  .btns {
    display: flex;
    flex-direction: row;
    button {
      margin: 0 10px;
    }
  }

  select {
    padding: 10px 13px;
    box-sizing: border-box;
    border: none;
    background-color: #f9f3df;
  }
`;
