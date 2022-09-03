import styled from 'styled-components';

const TableContainer = styled.table`
  max-width: 776px;
  width: 100%;
  margin: auto;
  color: ${(props) => props.theme.applaudoNavyblue};
  border-collapse: collapse;

  & > .table-header-container {
    border-bottom: 1px solid black;
    & > tr {
      & > th {
        padding: 16px;
      }
    }
  }

  & > tbody {
    & > .total {
      td {
        padding-top: 24px;
        text-align: right;
      }
    }
  }
`;

export default TableContainer;
