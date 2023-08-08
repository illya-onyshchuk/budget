import {useState, useEffect, useCallback} from "react"
import Balance from "../../Balance";
import Transactions from "../../Transactions";
import Form from "../../Form";
import { Wrapper } from "./style";
import ErrorBoundary from "../../ErrorBoundary";
import { getItems, addItem } from "../../../utils/indexdb";


const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getItems().then(items => {
      setTransactions(items)
    }).catch(e => {
      console.error('error', e)
    })
  }, [setTransactions]);

const onChange = ({value, date, comment}) => {
    const transaction = {
      value: +value,
      comment,
      date,
      id: Date.now(),
    };

    setTransactions([
        transaction,
      ...transactions
    ]);

    setBalance(balance + Number(value));

    addItem(transaction);
  }

  const onDelete = useCallback((id) => {
    setTransactions((transactions) => transactions.filter((transaction) => transaction.id !== id))
  }, [setTransactions]);

  const onStarClick = useCallback((id) => {
    setTransactions((transactions) => transactions.map((transaction) => transaction.id !== id 
        ? transaction 
        : {
          ...transaction,
           isStarred: !transaction.isStarred
          }
    ))
  });

    return (
      <ErrorBoundary>
          <Wrapper> 
            <Balance balance={balance}/>
            <Form onChange={onChange} />
            <hr />
            <Transactions transactions={transactions}
               onDelete={onDelete}
               onStarClick={onStarClick}/>
          </Wrapper>
      </ErrorBoundary>
    )
 }

 export default Home