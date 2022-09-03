import React from 'react';
import IData from '../../utils/interfaces/IData.interface';
import TableCell from './components/tableCell';
import TableContainer from './Table.style';

type TableProps = {
  selectedItems: IData[];
  setSelectedItems: React.Dispatch<IData[]>;
};

const Table = ({ selectedItems, setSelectedItems }: TableProps) => {
  const total = React.useMemo(() => {
    let currentTotal = 0;
    for (const item of selectedItems) {
      currentTotal += item.amount * item.price;
    }
    return currentTotal;
  }, [selectedItems]);

  const removeItem = React.useCallback(
    (selectedItem: IData) => {
      const newData = selectedItems.filter(
        (item) => item.id !== selectedItem.id
      );
      setSelectedItems(newData);
    },
    [selectedItems, setSelectedItems]
  );

  const onChangeAmount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const foundItem = selectedItems.find((item) => item.id === id);
      const filteredItems = selectedItems.filter((item) => item.id !== id);
      if (foundItem && +event.target.value > 0) {
        const newItem = {
          ...foundItem,
          amount: +event.target.value,
        };
        setSelectedItems([...filteredItems, newItem]);
      }
    },
    [selectedItems, setSelectedItems]
  );

  return (
    <TableContainer>
      <thead className="table-header-container">
        <tr className="table-header-container__header">
          <th align="left">Item</th>
          <th align="right">Actions</th>
        </tr>
      </thead>
      <tbody className="">
        {selectedItems.map((item) => (
          <TableCell
            key={item.id}
            data={item}
            onChangeAmount={onChangeAmount}
            removeData={removeItem}
          />
        ))}
        <tr className="total">
          <td colSpan={2}>
            <b>Total</b>: ${total}
          </td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default Table;
