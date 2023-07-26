import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      date: '',
      comment: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.onChange(this.state.value)
    this.setState({
      value: '',
      date: '',
      comment: '',
    })
  }

  onChange = (e) => {
    const {value, name} = e.target;

    this.setState({
      [name]: name === 'balance' ? +value : value
    })
  }
 
  render() {
    return ( 
      <form onSubmit={this.onSubmit}>
        <input
        type="date"
        name="date"
        value={this.state.date}
        onChange={this.onChange} />
        <input
        type="number" 
        name='value' 
        placeholder='Sum'
        value={this.state.value}
        onChange={this.onChange}
        />
        <textarea 
        name="comment"
        value={this.state.comment}
        onChange={this.onChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func
}
 
export default Form;