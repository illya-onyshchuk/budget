import React, {useContext} from "react";
import { IntlProvider } from "react-intl";
import { AppContext  } from '../context'
import messages from './messages'
import { LOCALES } from "./constants";
import { flatten } from "flat";

 const IntlAppProvider = ({children}) => {
    const {state} = useContext(AppContext)

  return (
    <IntlProvider messages={flatten( messages[state.locale] )} locale={state.locale} defaultLacale={LOCALES.ENGLISH}>
      {children}
    </IntlProvider>
  )
}

export default IntlAppProvider