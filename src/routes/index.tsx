import { Routes, Route } from 'react-router'
import QuestionsPage from '../pages/Questions'

const Router = () => {
  return (
    <Routes>
      <Route path="questions" element={<QuestionsPage />} />
      <Route path="questions/:id" element={<div />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}
export default Router
