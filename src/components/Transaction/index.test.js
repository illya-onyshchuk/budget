import React  from "react";
import Transaction from '.';
import { shallow } from 'enzyme';

describe('Transaction component', () => {
  let sut;
  let props;


  beforeEach(() => {
    props = {
      transaction: {
        value: 23,
        date: '24.04.2023',
        comment: 'Some coments' 
      }
    }

    sut = shallow(<Transaction {...props}/>);
  });

  it('should show transaction', () => {
      expect(sut).toMatchSnapshot();
    });

  it('should show 2 zeros after amount', () => {
      expect(sut.find('Value').text()).toBe('23.00')
  });
}) 