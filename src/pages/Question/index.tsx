import { FC, useCallback } from 'react'
import { Typography } from '../../components'
import QuestionItem from '../Questions/QuestionItem'
import AnswerItem from './Answer'
import { question } from '../../mock/question'
import Layout from '../../components/Layout'
import CreateAnswer from './CreateAnswer'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axiosClient from '../../lib/client'
import { useParams } from 'react-router'
import { Answer, Question } from '../../types'

type GetQuestionResponse = Question

const QuestionPage: FC = () => {
  const params = useParams()
  const queryClient = useQueryClient()
  const getData = async () => {
    return (await axiosClient.get('/questions/' + params.id)).data
  }

  const { data } = useQuery<GetQuestionResponse>({
    queryKey: ['question', params.id],
    queryFn: getData
  })

  const handleLike = useCallback(
    async (data: { selectedAnswer: Answer; like: boolean }) => {
      const { like, selectedAnswer } = data
      if (like) {
        selectedAnswer.like += 1
      } else {
        selectedAnswer.dislike += 1
      }
      const answers = question.answers
      const index = answers.findIndex(
        (answer) => answer.id === selectedAnswer.id
      )
      answers[index] = selectedAnswer
      const newQuestion = { ...data, answers }
      await axiosClient.patch(`/questions/${params.id}/`, newQuestion)
    },
    [params.id]
  )

  const { mutate } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['question', params.id]
      })
    }
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
            <AnswerItem
              answer={answer}
              key={answer.id}
              onLike={() => mutate({ selectedAnswer: answer, like: true })}
              onDislike={() => mutate({ selectedAnswer: answer, like: false })}
            />
          ))}
        </div>
        <CreateAnswer question={data} />
      </div>
    </Layout>
  )
}
export default QuestionPage
