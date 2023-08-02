import React  from "react";
import { mount } from "enzyme";
import { act } from 'react-dom/test-utils'
import Home from ".";

import { getItems, addItem } from "../../../utils/indexdb";

jest.mock('../../../utils/indexdb', () => ({
  getItems: jest.fn(),
  addItem: jest.fn(),
}))

describe('Home component', () => {
  let sut;
  let props;

  describe('when component is mounted', () => {
    describe('when transaction are returned seccessfully', () => {
      beforeEach(() => {
        getItems.mockImplementation(() => Promise.resolve( [{value: 1}] ))
      });
  
      beforeEach( async () => {
        await act(async () => {
          sut = mount(<Home {...props}/>)
        })
  
        sut.update();
      });
  
      it('should set balance to 0', () => {
        const { balance } = sut.find('Balance').at(0).props();
  
        expect(balance).toBe(0)
      });

      xit ('should set transactions to empty arr', () => {
        const { transactions } = sut.find('Transactions').at(0).props();
  
        expect(transactions).toEqual([]);
      });

      it('should render transaction with one item', () => {
        const { transactions } = sut.find('Transactions').at(0).props();
  
        expect(transactions).toEqual([{value: 1}])
      });

    });

    describe('when transaction are returned with error', () => {
      let consoleSpy;

      beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'error');
        getItems.mockImplementation(() => Promise.reject( 'My Error' ))
      });
  
      beforeEach( async () => {
        await act(async () => {
          sut = mount(<Home {...props}/>)
        })

        sut.update();
      });

      it('should render transaction with zero items', () => {
        const { transactions } = sut.find('Transactions').at(0).props();
  
        expect(transactions).toEqual([])
      });

      it('should console error rejected message', () => {
        expect(consoleSpy).toHaveBeenCalledWith('error', 'My Error')
      })
    });

    describe('when transaction is added', () => {
      it('should increase balance', () => {
        const { onChange } = sut.find('Form').at(0).props();

        onChange({
          value: '1',
          date: '', 
          comment: ''
       });

        sut.update();

        const { balance } = sut.find('Balance').at(0).props();

      expect(balance).toBe(1);
      })
    })
  })
})