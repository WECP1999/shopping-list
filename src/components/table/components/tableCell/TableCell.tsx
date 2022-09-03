import React from 'react';
import IData from '../../../../utils/interfaces/IData.interface';
import Button from '../../../button';
import CustomInput from '../../../formInputs/customInput';
import TableCellContainer from './TableCell.style';

type TableCellProps = {
  data: IData;
  removeData: (selectedItem: IData) => void;
  onChangeAmount: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: number
  ) => void;
};

const TableCell = ({ data, onChangeAmount, removeData }: TableCellProps) => {
  return (
    <TableCellContainer key={data.id}>
      <td className="detail-column">
        <div className="detail-column__name">{data.name}</div>
        <div className="detail-column__price">${data.price}</div>
      </td>
      <td align="right" className="action-column">
        <CustomInput
          type="number"
          label={`Amount of ${data.name}`}
          value={data.amount}
          onChange={(event) => onChangeAmount(event, data.id)}
          className="detail-column__input"
        />
        <Button
          onClick={() => removeData(data)}
          className="detail-column__button"
        >
          X
        </Button>
      </td>
    </TableCellContainer>
  );
};

export default TableCell;
