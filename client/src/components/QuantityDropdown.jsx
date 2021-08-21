import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const QuantityDropdown = (props) => {
  const [dropQuantity, setDropQuantity] = useState(5);
  const { setDataQuantity } = props;

  const setQuantity = (num) => {
    setDropQuantity(num);
    setDataQuantity(num);
  };

  return (
    <DropdownButton className="dropdown-quantity-button" title={dropQuantity} variant="outline-dark" size="sm">
      <Dropdown.Item onClick={() => setQuantity(5)}>5</Dropdown.Item>
      <Dropdown.Item onClick={() => setQuantity(10)}>10</Dropdown.Item>
      <Dropdown.Item onClick={() => setQuantity(25)}>25</Dropdown.Item>
      <Dropdown.Item onClick={() => setQuantity(50)}>50</Dropdown.Item>
    </DropdownButton>
  );
};

export default QuantityDropdown;
