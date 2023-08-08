import PropTypes from 'prop-types'
import { useCallback, useContext } from 'react';

import { AppContext } from '../../providers/context';
import { Wrapper, TransactiononDate, Value, Comment, Icon } from './style';
import Star from '../../assets/img/star-empty-icon.svg'
import StarFilled from '../../assets/img/star-symbol-icon.svg'


const Transaction = ({ transaction: {id, value, date, comment, isStarred }, onDelete, onStarClick }) => {

  const {state} = useContext(AppContext)

  const deleteItem = useCallback(() => onDelete(id), [id])

  return (
    <Wrapper value={value}>

      <Icon onClick={() => onStarClick(id)}>
        <img src={isStarred ? StarFilled : Star} alt='star'/>
      </Icon>
      <TransactiononDate>{date}</TransactiononDate>
      <Value>{value.toFixed(2)}, {state.currency}</Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}>Delete</button>
    </Wrapper>
  );
}
  
Transaction.prototype = {
  transaction: PropTypes.shape({ 
    comment: PropTypes.string,
    value: PropTypes.number,
    id: PropTypes.number,
    date: PropTypes.string,
    isStarred: PropTypes.bool,
  }),
  onStarClick: PropTypes.func,
  onDelete: PropTypes.func
};

Transaction.defaultProps = {
  transaction: {
    comment: '',
    value: 0,
  }
}; 

export default Transaction;

