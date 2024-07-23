import { Suspense, useEffect } from 'react'
// Routes
import Router from './routes';
// Components
// import { Loader } from './components';
// Locales
import useLocales from './locales/useLocales';
import './locales/i18n';
// Axios
import Axios from './utils/Axios';


const App = () => {
  const { currentLang } = useLocales()

  useEffect(() => {
    Axios.defaults.headers.common.LANGUAGE = localStorage.getItem('i18nextLng');
  }, [currentLang?.value])

  // ------  JSX Code -------
  return (
    <Suspense fallback={<></>}>
      <Router />
    </Suspense>

  )
}
export default App

