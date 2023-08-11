import {useEffect, useState, useCallback} from 'react'
import { addItem, getItems } from '../../utils/indexdb'

import { STATUS } from '../../constants/index'


export const useData = () => {
  const [state, setState] = useState({
    transactions: [],
    error: '',
    status: STATUS.IDLE,
  })

  useEffect(() => {
    setState({
      ...state,
      status: STATUS.PENDING,
    });

    getItems().then(transactions => {
      setState({
        ...state,
        transactions,
        status: STATUS.SUCCESS,
      })
    }).catch(e => {
      setState({
        ...state,
        transactions: [],
        status: STATUS.ERROR,
        error: e,  
      })
    })
  }, []);

  const pushTransaction = useCallback((data) => {
    const transaction = {
      ...data,
      value: +data.value,
      id: Date.now(),
    };

    setState((state) =>({
      ...state,
      transactions: [transaction, ...state.transactions],
    }));

    addItem(transaction)
  }, [setState])

  const onDelete = useCallback((id) => {
    setState((state) => ({
      ...state,
      transactions: state.transactions.filter((transaction) => transaction.id !== id)
     }))
  }, [setState]);

  const onStarClick = useCallback((id) => {
    setState((state) => ({
      ...state,
      transactions: state.transactions.map((transaction) => transaction.id !== id 
        ? transaction 
        : {
          ...transaction,
           isStarred: !transaction.isStarred
          })
     }))
  }, [setState]);

  return (
    {
      ...state,
      pushTransaction,
      onDelete,
      onStarClick,
    }
  );
}

