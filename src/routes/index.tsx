import { Routes, Route, Navigate } from 'react-router'
import QuestionsPage from '../pages/Questions'
import QuestionPage from '../pages/Question'

const Router = () => {
  return (
    <Routes>
      <Route path="questions" element={<QuestionsPage />} />
      <Route path="questions/:id" element={<QuestionPage />} />
      <Route path="*" element={<Navigate to="questions" replace />} />
    </Routes>
  )
}
export default Router
