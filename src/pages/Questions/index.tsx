import { RiAddLine } from 'react-icons/ri'
import { Button } from '../../components'
import Layout from '../../components/Layout'
import { questions } from '../../mock/question'
import QuestionItem from './QuestionItem'
import { useCallback, useState } from 'react'
import NewQuestionModal from './NewQuestionModal'

const QuestionsPage = () => {
  const [createQuestionModalIsOpen, setcreateQuestionModalIsOpen] =
    useState<boolean>(false)
  const onOpenModal = useCallback(() => setcreateQuestionModalIsOpen(true), [])
  const onCloseModal = useCallback(
    () => setcreateQuestionModalIsOpen(false),
    []
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
      <>
        <div className="flex flex-col gap-y-4">
          {questions.map((question) => (
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
