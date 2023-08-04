import PropTypes from 'prop-types'
import { useContext } from 'react';

import { AppContext } from '../../providers/context';
import { Wrapper, TransactiononDate, Value, Comment } from './style';

const Transaction = ({ transaction: {value, date, comment } }) => {
  const {state} = useContext(AppContext)

  return (
    <Wrapper value={value}>
      <TransactiononDate>{date}</TransactiononDate>
      <Value>{value.toFixed(2)}, {state.currency}</Value>
      <Comment>{comment}</Comment>
    </Wrapper>
  );
}

Transaction.prototype = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  })
};

Transaction.defaultProps = {
  transaction: {
    label: '',
    value: 0,
  }
};

export default Transaction;

