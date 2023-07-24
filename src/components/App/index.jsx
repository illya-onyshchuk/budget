import {Component} from "react"
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import { AppStyle } from "./style";

let id = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };

    this.onChange = this.onChange.bind(this)
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [{value, label: 'change', id: ++id}, ...state.transactions]
    }))
  }

  render() {
    return (
      <AppStyle> 
        <Balance balance={this.state.balance}/>
        <Form onChange={this.onChange} />
         <hr />

         <Transactions transactions={this.state.transactions}/>
      </AppStyle>
    )
   }
 }

 export default App