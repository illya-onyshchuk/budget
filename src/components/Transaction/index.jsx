import PropTypes from 'prop-types'
import { Wrapper } from './style';

const Transaction = ({ transaction: {value, label } }) => {
  return (
    <Wrapper value={value}>
        Label: {label}
        <p>Value: {value}</p>
      <br/>
    </Wrapper>
  );
}

Transaction.prototype = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  })
}

export default Transaction;
