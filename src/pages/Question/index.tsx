import { FC } from 'react'
import { Typography } from '../../components'
import QuestionItem from '../Questions/QuestionItem'
import AnswerItem from './Answer'
import { question } from '../../mock/question'
import Layout from '../../components/Layout'
import CreateAnswer from './CreateAnswer'
import { useQuery } from '@tanstack/react-query'
import axiosClient from '../../lib/client'
import { useParams } from 'react-router'
import { Question } from '../../types'

type GetQuestionResponse = Question

const QuestionPage: FC = () => {
  const params = useParams()
  const getData = async () => {
    return (await axiosClient.get('/questions/' + params.id)).data
  }

  const { data } = useQuery<GetQuestionResponse>({
    queryKey: ['question', params.id],
    queryFn: getData
  })

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
          {data?.answers?.map((answer) => (
            <AnswerItem answer={answer} key={answer.id} />
          ))}
        </div>
        <CreateAnswer question={data} />
      </div>
    </Layout>
  )
}
export default QuestionPage
