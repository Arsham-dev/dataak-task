import { RiAddLine } from 'react-icons/ri'
import { Button } from '../../components'
import Layout from '../../components/Layout'
import { questions } from '../../mock/question'
import QuestionItem from './QuestionItem'

const QuestionsPage = () => {
  return (
    <Layout
      title="سوالات"
      HeaderItems={
        <Button variant="primary" StartIcon={<RiAddLine className="text-xl" />}>
          سوال جدید
        </Button>
      }>
      <div className="flex flex-col gap-y-4 ">
        {questions.map((question) => (
          <QuestionItem question={question} showDetails key={question.id} />
        ))}
      </div>
    </Layout>
  )
}
export default QuestionsPage
