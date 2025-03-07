import { RiAddLine } from 'react-icons/ri'
import { Button } from '../../components'
import Layout from '../../components/Layout'
import QuestionItem from './QuestionItem'
import { useCallback, useState } from 'react'
import NewQuestionModal from './NewQuestionModal'
import axiosClient from '../../lib/client'
import { useQuery } from '@tanstack/react-query'
import { Question } from '../../types'
import { Pagination } from '../../components/Pagination'
import { usePagination } from '../../hooks/usePagination'

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

  const { page, pageSize, totalPages, onPageChange } = usePagination(
    data?.length || 0,
    1,
    5
  )

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
      <div className="flex flex-col gap-y-8 pb-10">
        <div className="flex flex-col gap-y-4">
          {data
            ?.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
            .map((question) => (
              <QuestionItem question={question} showDetails key={question.id} />
            ))}
        </div>
        <NewQuestionModal
          isOpen={createQuestionModalIsOpen}
          onClose={onCloseModal}
        />
        <div className="flex justify-end w-full">
          <Pagination
            page={page}
            totalPage={totalPages}
            onChange={onPageChange}
            siblingCount={3}
          />
        </div>
      </div>
    </Layout>
  )
}
export default QuestionsPage
