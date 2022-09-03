import React from 'react';
import IData from '../../utils/interfaces/IData.interface';
import data from '../../utils/mocks/data';
import Button from '../button';
import Select from '../formInputs/select';
import ShoppingCarContainer from './ShoppingCar.style';

type ShoppingCardProps = {
  selectedItems: IData[];
  setSelectedItems: React.Dispatch<IData[]>;
};

const ShoppingCard = ({
  selectedItems,
  setSelectedItems,
}: ShoppingCardProps) => {
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const handleAddItem = React.useCallback(() => {
    const currentItem = selectRef.current;
    if (currentItem) {
      const selectedItem = data.find((item) => item.id === +currentItem.value);
      let filterItem = selectedItems.find(
        (item) => item.id === +currentItem.value
      );
      if (filterItem) {
        filterItem = {
          ...filterItem,
          amount: filterItem.amount + 1,
        };
        const newValues = selectedItems.filter(
          (item) => item.id !== +currentItem.value
        );
        setSelectedItems([...newValues, filterItem]);
      } else {
        if (selectedItem) {
          setSelectedItems([
            ...selectedItems,
            { ...selectedItem, amount: selectedItem.amount + 1 },
          ]);
        }
      }
    }
  }, [selectedItems, setSelectedItems]);

  return (
    <ShoppingCarContainer>
      <h2>Shopping list</h2>
      <div className="form-container">
        <Select ref={selectRef}>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
        <Button className="button-lg" onClick={handleAddItem}>
          Add
        </Button>
      </div>
    </ShoppingCarContainer>
  );
};

export default ShoppingCard;
