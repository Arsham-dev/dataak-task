import { FC } from 'react'
import { Typography } from '../../components'
import QuestionItem from '../Questions/QuestionItem'
import AnswerItem from './Answer'
import { question } from '../../mock/question'

const QuestionPage: FC = () => {
  return (
    <div className="flex flex-col gap-y-10 px-8 py-10">
      <div className="flex flex-col gap-y-4">
        <Typography variant="subtitle1" className="text-common-black">
          سوال
        </Typography>
        <QuestionItem question={question} />
      </div>
      <div className="flex flex-col gap-y-4">
        <Typography variant="subtitle1" className="text-common-black">
          پاسخ ها
        </Typography>
        {question.answers.map((answer) => (
          <AnswerItem answer={answer} key={answer.id} />
        ))}
      </div>
    </div>
  )
}
export default QuestionPage
