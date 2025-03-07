import { BrowserRouter } from 'react-router'
import Router from './routes'
import moment from 'moment-jalaali'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

moment.loadPersian({ usePersianDigits: true })
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false
    }
  }
})

function App() {
  return (
    <div dir="rtl">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
