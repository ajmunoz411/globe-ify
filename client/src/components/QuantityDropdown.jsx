import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const QuantityDropdown = ({ setDataQuantity }) => {
  const [dropQuantity, setDropQuantity] = useState(5);

  const setQuantity = (num) => {
    setDropQuantity(num);
    setDataQuantity(num);
  };

  const dropDownItem = (quantity) => (
    <Dropdown.Item key={quantity} onClick={() => setQuantity(quantity)}>{quantity}</Dropdown.Item>
  );

  const quants = [5, 10, 25, 50];

  return (
    <DropdownButton className="dropdown-quantity-button" title={dropQuantity} variant="outline-dark" size="sm">
      {quants.map((num) => dropDownItem(num)) }
    </DropdownButton>
  );
};

export default QuantityDropdown;
