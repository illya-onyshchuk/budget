import {useEffect, useState, useCallback} from 'react'
import { addItem, getItems, deleteItem, updateItem } from '../../utils/indexdb'

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

     deleteItem(id)
  }, [setState]);

  const onStarClick = useCallback((id) => {
    const item = state.transactions.find((i) => i.id === id);

    updateItem({
        ...item,
        isStarred: !item.isStarred
    }).then(() => {
        setState((state) => ({
            ...state,
            transactions: state.transactions.map((item) => item.id !== id ? item : {
                ...item,
                isStarred: !item.isStarred
            })
        }))
    })
  }, [setState, state]);

  return (
    {
      ...state,
      pushTransaction,
      onDelete,
      onStarClick,
    }
  );
}

