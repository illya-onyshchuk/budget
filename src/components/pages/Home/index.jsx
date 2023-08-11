import { useState } from "react"
import Balance from "../../Balance";
import Transactions from "../../Transactions";
import Form from "../../Form";
import ErrorBoundary from "../../ErrorBoundary";

import { useData } from "../../hooks/useData";
import { Wrapper } from "./style";
import { STATUS } from "../../../constants";


const Home = () => {
  const [balance, setBalance] = useState(0);
  const {transactions, status, pushTransaction, onDelete, onStarClick} = useData();

const onChange = (transaction) => {
    pushTransaction(transaction)
    setBalance(balance + Number(transaction.value));
  }

    return (
      <ErrorBoundary>
          <Wrapper> 
            <Balance balance={balance}/>
            <Form onChange={onChange} />
            <hr />
            {status === STATUS.PENDING 
              ? <div>Loading...</div>
              : null
            }

            {status === STATUS.SUCCESS
              ? <Transactions
                  transactions={transactions}
                  onDelete={onDelete}
                  onStarClick={onStarClick}
                />
              : null
            }
          </Wrapper>
      </ErrorBoundary>
    ) 
 }

 export default Home