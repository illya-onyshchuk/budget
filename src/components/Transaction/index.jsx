import PropTypes from 'prop-types'
import { Wrapper, TransactiononDate, Value, Comment } from './style';

const Transaction = ({ transaction: {value, date, comment } }) => {
  return (
    <Wrapper value={value}>
      <TransactiononDate>{date}</TransactiononDate>
      <Value>{value.toFixed(3)}</Value>
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

