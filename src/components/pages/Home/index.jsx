import {Component} from "react"
import Balance from "../../Balance";
import Transactions from "../../Transactions";
import Form from "../../Form";
import { Wrapper } from "./style";
import ErrorBoundary from "../../ErrorBoundary";
import { getItems, addItem } from "../../../utils/indexdb";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };

    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    getItems().then(transactions => {
      this.setState({
        transactions
      })
    }).catch(e => {
      
    })
  }

  onChange = ({value, date, comment}) => {
    const transaction = {
      value: +value,
      comment,
      date,
      id: Date.now()
    };

    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        transaction,
         ...state.transactions]
    }));

    addItem(transaction);
  }

  render() {
    return (
      <ErrorBoundary>
          <Wrapper> 
            <Balance balance={this.state.balance}/>
            <Form onChange={this.onChange} />
            <hr />
            <Transactions transactions={this.state.transactions}/>
          </Wrapper>
      </ErrorBoundary>
    )
   }
 }

 export default Home