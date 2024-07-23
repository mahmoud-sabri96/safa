import { Suspense } from 'react'
// Routes
import Router from './routes';



const App = () => {

  // ------  JSX Code -------
  return (
    <Suspense fallback={<></>}>
      <Router />
    </Suspense>

  )
}
export default App

