import { FC } from 'react'
import { Question } from '../../types'
import { Button, Typography } from '../../components'
import moment from 'moment-jalaali'
import { RiDiscussLine } from 'react-icons/ri'

interface QuestionItemProps {
  question: Question
}

const QuestionItem: FC<QuestionItemProps> = ({ question }) => {
  return (
    <div className="flex flex-col border rounded-lg bg-common-white border-gray-light shadow-drop">
      <div className="flex justify-between items-center py-1.5 px-4 border border-gray-light rounded-lg">
        <div className="flex items-center gap-x-3">
          <img
            src={question.authorImage}
            alt="avatar"
            className="w-9 h-9 rounded-md border border-gray-light"
          />
          <Typography variant="subtitle2" className="text-common-black">
            {question.title}
          </Typography>
        </div>
        <div className="flex gap-x-3">
          <div className="flex gap-x-1 items-center">
            <Typography variant="caption" className="text-gray-main">
              ساعت
            </Typography>
            <Typography variant="caption" className="text-gray-dark">
              {moment(question.createdAt).format('HH:mm')}
            </Typography>
          </div>
          <div className="w-px h-6 bg-gray-main" />
          <div className="flex gap-x-1 items-center">
            <Typography variant="caption" className="text-gray-main">
              تاریخ
            </Typography>
            <Typography variant="caption" className="text-gray-dark">
              {moment(question.createdAt).format('jYYYY/jMM/jDD')}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 px-4 py-3">
        <div className="px-2">
          <Typography
            variant="button"
            component="div"
            className="text-common-black">
            {question.description}
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center">
            <div>
              <RiDiscussLine className="text-secondary-more-light text-xl" />
            </div>
            <div>
              <Typography variant="body2" className="text-secondary-light">
                تعداد پاسخ‌ها: {question.answers.length}
              </Typography>
            </div>
          </div>
          <div>
            <Button variant="outline" status="default" fullwidth>
              مشاهده جزئیات
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default QuestionItem
