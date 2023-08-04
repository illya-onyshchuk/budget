import { useContext } from 'react';

import { AppContext } from '../../../providers/context';

const Settings = () => {
  const {state, dispatch} = useContext(AppContext);

  const onChange = (e) => {
    // e.preventDefault();

    const {value} = e.target;

    dispatch({
      type: 'changeCurrency',
      currency: value,
    });
  }

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
    </>
  );
}

export default Settings;
