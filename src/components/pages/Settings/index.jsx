import { memo, useContext, useMemo,} from 'react';

import { AppContext } from '../../../providers/context';


const Test = memo(({data}) => {
  console.log('rendering')

  return <div>{JSON.stringify(data)}</div>
})

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

const data = useMemo( () => [2], [])

  return (
    <>
      <h1>Setting</h1>
    <Test data={data}/>
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
