import { RiAddLine } from 'react-icons/ri'
import { Button } from '../../components'
import Layout from '../../components/Layout'
import QuestionItem from './QuestionItem'
import { useCallback, useState } from 'react'
import NewQuestionModal from './NewQuestionModal'
import axiosClient from '../../lib/client'
import { useQuery } from '@tanstack/react-query'
import { Question } from '../../types'

type GetQuestionsResponse = Question[]

const QuestionsPage = () => {
  const [createQuestionModalIsOpen, setcreateQuestionModalIsOpen] =
    useState<boolean>(false)
  const onOpenModal = useCallback(() => setcreateQuestionModalIsOpen(true), [])
  const onCloseModal = useCallback(
    () => setcreateQuestionModalIsOpen(false),
    []
  )
  const getData = async () => {
    return (await axiosClient.get('/questions')).data
  }

  const { data } = useQuery<GetQuestionsResponse>({
    queryKey: ['questions'],
    queryFn: getData
  })

  return (
    <Layout
      title="سوالات"
      HeaderItems={
        <Button
          variant="primary"
          StartIcon={<RiAddLine className="text-xl" />}
          onClick={onOpenModal}>
          سوال جدید
        </Button>
      }>
      <>
        <div className="flex flex-col gap-y-4">
          {data?.map((question) => (
            <QuestionItem question={question} showDetails key={question.id} />
          ))}
        </div>
        <NewQuestionModal
          isOpen={createQuestionModalIsOpen}
          onClose={onCloseModal}
        />
      </>
    </Layout>
  )
}
export default QuestionsPage
