import { FC } from 'react'
import { Typography } from '../../components'
import QuestionItem from '../Questions/QuestionItem'
import AnswerItem from './Answer'
import { question } from '../../mock/question'
import Layout from '../../components/Layout'
import CreateAnswer from './CreateAnswer'

const QuestionPage: FC = () => {
  return (
    <Layout title="سوال">
      <div className="flex flex-col gap-y-10">
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
        <CreateAnswer />
      </div>
    </Layout>
  )
}
export default QuestionPage
