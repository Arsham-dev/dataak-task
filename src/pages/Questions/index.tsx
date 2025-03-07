import { questions } from '../../mock/question'
import QuestionItem from './QuestionItem'

const QuestionsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 px-8 py-10">
      {questions.map((question) => (
        <QuestionItem question={question} showDetails key={question.id} />
      ))}
    </div>
  )
}
export default QuestionsPage
