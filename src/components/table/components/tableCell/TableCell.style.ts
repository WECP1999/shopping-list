import styled from 'styled-components';

const TableCellContainer = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.applaudoNavyblue};
  & > td {
    padding: 16px 16px;

    & > .detail-column__name {
        font-weight: bold;
        margin-bottom: 8px;
    }
  }

  & > td.action-column {
    display: flex;
    flex-flow: row wrap;
    justify-content: right;
    align-items: center;
    gap: 16px;
  }
`;

export default TableCellContainer;
