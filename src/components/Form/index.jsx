import { useState } from 'react';
import PropTypes from 'prop-types';
import { Comment, Button, Input, Row } from './style';
import { FormattedMessage } from 'react-intl';

const Form = (props) =>{
  const [form, setForm] = useState({
    value: '',
    date: new Date().toISOString().substring(0, 10),
    comment: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()

    props.onChange(form)
    setForm({
      ...form,
      value: '',
      comment: '',  
    })
  }

  const onChange = (e) => {
    const {value, name} = e.target;

    setForm({
      ...form,
      [name]: value
    })
  }

    return ( 
      <>
        <FormattedMessage id='hello'/>
        <form onSubmit={onSubmit}>
            <Row>
              <Input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
              />
              <Input
                type="number" 
                name='value' 
                placeholder='Sum'
                value={form.value}
                onChange={onChange}
              />
            </Row>
            <Row>
              <Button>Save</Button>
              <Comment 
                name="comment"
                value={form.comment}
                onChange={onChange}
              />
            </Row>
        </form>
      </>
    );
}

Form.propTypes = {
  onChange: PropTypes.func
}
 
export default Form;