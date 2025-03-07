import { FC } from 'react'
import { Answer } from '../../types'
import { Button, Typography } from '../../components'
import moment from 'moment-jalaali'
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from 'react-icons/ri'

interface AnswerItemProps {
  answer: Answer
}

const AnswerItem: FC<AnswerItemProps> = ({ answer }) => {
  return (
    <div className="flex flex-col border rounded-lg bg-common-white border-gray-light shadow-drop">
      <div className="flex justify-between items-center py-1.5 px-4 border border-gray-light rounded-lg">
        <div className="flex items-center gap-x-3">
          <img
            src={answer.authorImage}
            alt="avatar"
            className="w-9 h-9 rounded-md border border-gray-light"
          />
          <Typography variant="subtitle2" className="text-common-black">
            {answer.authorName}
          </Typography>
        </div>
        <div className="flex gap-x-3">
          <div className="flex gap-x-1 items-center">
            <Typography variant="caption" className="text-gray-main">
              ساعت
            </Typography>
            <Typography variant="caption" className="text-gray-dark">
              {moment(answer.createdAt).format('HH:mm')}
            </Typography>
          </div>
          <div className="w-px h-6 bg-gray-light" />
          <div className="flex gap-x-1 items-center">
            <Typography variant="caption" className="text-gray-main">
              تاریخ
            </Typography>
            <Typography variant="caption" className="text-gray-dark">
              {moment(answer.createdAt).format('jYYYY/jMM/jDD')}
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
            {answer.description}
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4 items-center">
            <div className="flex gap-x-1">
              <RiEmotionHappyLine className="text-secondary-more-light text-xl" />
              <Typography variant="body2" className="text-secondary-light">
                {answer.like}
              </Typography>
            </div>
            <div className="flex gap-x-1">
              <RiEmotionUnhappyLine className="text-secondary-more-light text-xl" />
              <Typography variant="body2" className="text-secondary-light">
                {answer.dislike}
              </Typography>
            </div>
          </div>
          <div className="flex gap-x-2">
            <Button
              variant="outline"
              status="success"
              fullwidth
              className="text-nowrap"
              StartIcon={<RiEmotionHappyLine className="text-xl" />}>
              پاسخ خوب
            </Button>
            <Button
              variant="outline"
              status="error"
              fullwidth
              className="text-nowrap"
              StartIcon={<RiEmotionUnhappyLine className="text-xl" />}>
              پاسخ ید
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnswerItem
