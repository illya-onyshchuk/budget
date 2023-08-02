import {useState, useEffect} from "react"
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
      id: Date.now()
    };

    setTransactions([
        transaction,
      ...transactions
    ]);

    setBalance(balance + Number(value));

    addItem(transaction);
  }

    return (
      <ErrorBoundary>
          <Wrapper> 
            <Balance balance={balance}/>
            <Form onChange={onChange} />
            <hr />
            <Transactions transactions={transactions}/>
          </Wrapper>
      </ErrorBoundary>
    )
 }

 export default Home