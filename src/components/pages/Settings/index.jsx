import { memo, useContext, useMemo, } from 'react';

import { AppContext } from '../../../providers/context';
import { Button } from './style';
import { useBooleanToggle } from '../../hooks/useBooleanToggle';

const Test = memo(({data}) => {
  console.log('rendering')

  return <div>{JSON.stringify(data)}</div>
})

const Settings = () => {
  const {state, dispatch} = useContext(AppContext);
  const {status, handleStatusChange} = useBooleanToggle( );

  const onChange = (e) => {
    const {value} = e.target;

    dispatch({ 
      type: 'changeCurrency',
      currency: value,
    });
  }

const data = useMemo( () => [2], [])

  return (
    <>
      <h1>Setting</h1>
      <div>
        <form>
          <label>
            Сurrency:
            <select
             name="currency"
             value={state.currency}
             onChange={onChange}
             >
              <option value="UAH">Hryvnias</option>
              <option value="EUR">Euro</option>
              <option value="USD">Dollars USA</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <Button onClick={handleStatusChange}>Advanced settings</Button>
        {
          status 
          ?
        <div>
          <h2>Advanced settings</h2>
          <p>...</p>
        </div> 
          : null
        }
      </div>
    </>
  );
}

export default Settings;
