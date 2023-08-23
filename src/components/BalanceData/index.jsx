import React, {useState} from 'react';
import PropTypes from 'prop-types';

const BalanceData = ({children, balnace}) => {
  const [balance] = useState(12)


  return (
      children(balance)
  );
}

export default BalanceData;

BalanceData.PropTypes = {
  children: PropTypes.func.isRequired,
}
