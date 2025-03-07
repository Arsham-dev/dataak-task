import { Question } from '../../types'
import QuestionItem from './QuestionItem'

const mockData: Question[] = [
  {
    id: '1',
    title: 'سوال اول',
    createdAt: new Date().toISOString(),
    authorImage: 'https://picsum.photos/200',
    description: 'این یک سوال است',
    answers: ['1231']
  },
  {
    id: '2',
    title: 'سوال دوم',
    createdAt: new Date().toISOString(),
    authorImage: 'https://picsum.photos/200',
    description: 'این یک سوال است',
    answers: []
  }
]
const QuestionsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 px-8 py-10">
      {mockData.map((question) => (
        <QuestionItem question={question} />
      ))}
    </div>
  )
}
export default QuestionsPage
