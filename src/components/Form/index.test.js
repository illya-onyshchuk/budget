import React  from "react";
import Form from '.';
import { shallow } from 'enzyme';

describe('Form component', () => {
  let props;
  let sut;

  beforeEach(() => {
      jest
        .spyOn(global, 'Date')
        .mockImplementation(() => ({
          toISOString: () => '2023-01-01T16:17:20.220Z'
        }))
  })

  beforeEach(() => {
    props = {
      onChange: jest.fn()
    }

    sut = shallow(<Form {...props}/>)
  });

  describe('when edit form', () => {
    it('should change value input', () => {
      let input = sut.find('Input[name="value"]').at(0);

      input.simulate('change', {target: {
        value: '123',
        name: 'value'
      }});

      sut.update();
      input = sut.find('Input[name="value"]').at(0);

      const props = input.props();
      expect(props.value).toBe("123");
    });

    it('should change comment input', () => {
      const expectedResult = 'comment value';
      let input = sut.find('Comment[name="comment"]').at(0);

      input.simulate('change', {target: {
        value: 'comment value',
        name: 'comment'
      }});

      sut.update();
      input = sut.find('Comment[name="comment"]').at(0);

      const {value} = input.props();
      expect(value).toBe(expectedResult);
    });
  });

  describe('when user submit form', () => {
    it('should call onChage form the props', () => {
      const form = sut.find('form');

      form.simulate('submit', {
        preventDefault: jest.fn()
      });

      expect(props.onChange).toHaveBeenCalledTimes(1);

    });

    it('should send form date', () => {
      let input = sut.find('Input[name="value"]').at(0);

      input.simulate('change', {target: {
        value: '123',
        name: 'value'
      }});

      input = sut.find('Comment[name="comment"]').at(0);

      input.simulate('change', {target: {
        value: 'comment value',
        name: 'comment'
      }});

      sut.update();

      const form = sut.find('form');
      form.simulate('submit', {
        preventDefault: jest.fn()
      });

      expect(props.onChange).toHaveBeenCalledWith({
        value: '123',
        date: '2023-01-01',
        comment: 'comment value',
      })
    })
  })
});