import ReactDOM from 'react-dom/client'
//React-Router-Dom
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
// Redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from './redux/store.jsx'
// react-toastify
import { ToastContainer } from 'react-toastify'


//-------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
              <ToastContainer />
          </PersistGate>
        </ReduxProvider>
      </BrowserRouter>
)
