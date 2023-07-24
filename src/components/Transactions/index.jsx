import Transaction from '../Transaction';
import PropTypes from 'prop-types'

const Transactions = ({transactions = []}) => {
  return transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)
}

Transaction.prototype = {
  transactions: PropTypes.array
}

export default Transactions;
