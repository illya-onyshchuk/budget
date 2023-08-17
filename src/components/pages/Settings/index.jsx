import { memo, useContext, useMemo, } from 'react';

import { AppContext } from '../../../providers/context';
import { saveToStorage } from '../../../utils/sessionStorage'
import { Button } from './style';
import { useBooleanToggle } from '../../hooks/useBooleanToggle';
import { LOCALES } from '../../../providers/i18n';

// const Test = memo(({data}) => {
//   console.log('rendering')

//   return <div>{JSON.stringify(data)}</div>
// })

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

  const onChangeLocale = (e) => {
    const {value} = e.target;

    dispatch({ 
      type: 'setLocale',
      locale: value,
    });

    saveToStorage('locale', value)
  }

// const data = useMemo( () => [2], [])

  return (
    <>
      <h1>Setting</h1>
      <div>
        <form>
          <div style={{marginBottom: '10px'}}>
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
          </div>

          <div>
            <label>
              Locale:
              <select
              name="locale"
              value={state.locale}
              onChange={onChangeLocale}
              >
                <option value={LOCALES.UKRAINE}>Українська</option>
                <option value={LOCALES.ENGLISH}>English</option>
              </select>
            </label>
          </div>
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
