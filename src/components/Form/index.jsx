import { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, Button, Input, Row } from './style';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      date: new Date().toISOString().substring(0, 10),
      comment: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.onChange(this.state)
    this.setState({
      value: '',
      comment: '',
    })
  }

  onChange = (e) => {
    const {value, name} = e.target;

    this.setState({
      [name]: value
    })
  }
 
  render() {
    return ( 
      <form onSubmit={this.onSubmit}>
        <Row>
          <Input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.onChange} />
          <Input
          type="number" 
          name='value' 
          placeholder='Sum'
          value={this.state.value}
          onChange={this.onChange}
          />
        </Row>
        <Row>
          <Button>Save</Button>
          <Comment 
          name="comment"
          value={this.state.comment}
          onChange={this.onChange}
          />
        </Row>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func
}
 
export default Form;