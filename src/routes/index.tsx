import { Routes, Route } from 'react-router'

const Router = () => {
  return (
    <Routes>
      <Route
        path="questions"
        element={<div className="bg-amber-600 w-screen h-screen" />}
      />
      <Route path="questions/:id" element={<div />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}
export default Router
