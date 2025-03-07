import { BrowserRouter } from 'react-router'
import Router from './routes'
import moment from 'moment-jalaali'

moment.loadPersian({ usePersianDigits: true })

function App() {
  return (
    <div dir="rtl">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
