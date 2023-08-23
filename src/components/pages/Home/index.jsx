import { useState, useEffect } from "react"
import Balance from "../../Balance";
import Transactions from "../../Transactions";
import ChangeBalance from "../../ChangeBalance";
import ErrorBoundary from "../../ErrorBoundary";

import { useData } from "../../hooks/useData";
import { Wrapper } from "./style";
import { STATUS } from "../../../constants";
import { getItems } from "../../../utils/indexdb";


const Home = () => {
  const [balance, setBalance] = useState(0);
  const {transactions, status, pushTransaction, onDelete, onStarClick} = useData();

    useEffect(() => {
      getItems().then(res => {
        const totalCash = res.reduce((acc, total) => acc + total.value,0)
        setBalance(totalCash)
      }).catch(e => console.error(e))
  }, []);

const onChange = (transaction) => {
    pushTransaction(transaction)
    setBalance(balance + Number(transaction.value));
  }

    return (
      <ErrorBoundary>
          <Wrapper> 
            {/* <BalanceData balnace={balance}>
              {() => <Balance balance={balance}/>}
            </BalanceData> */}
            <Balance balance={balance}/>
            <ChangeBalance onChange={onChange} />
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