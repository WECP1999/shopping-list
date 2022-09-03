import React from 'react';
import ShoppingCar from './components/shoppingCar';
import Table from './components/table';
import IData from './utils/interfaces/IData.interface';

function App() {
  const [selectedItems, setSelectedItems] = React.useState<IData[]>([]);

  return (
    <div id="root">
      <ShoppingCar
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <Table
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
}

export default App;
