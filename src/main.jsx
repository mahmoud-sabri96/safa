import ReactDOM from 'react-dom/client'
//React-Router-Dom
import { BrowserRouter } from 'react-router-dom'
// Context
import { LocalizationProvider } from './context/LocalizationContext.jsx'
import App from './App.jsx'
import './index.scss'
import 'swiper/css';
import 'swiper/css/scrollbar';
// Redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from './redux/store.jsx'
// Context
import { AuthProvider } from './context/AuthContext.jsx'
// Helemet
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'


//-------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider>
              <App />
              <ToastContainer />
            </LocalizationProvider>
          </PersistGate>
        </ReduxProvider>
      </BrowserRouter>
    </HelmetProvider>
  </AuthProvider>

)
