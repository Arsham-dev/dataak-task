import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './validation'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { Button } from '../../components'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Answer, Question } from '../../types'
import { FC, useCallback } from 'react'
import axiosClient from '../../lib/client'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

type FormType = Yup.InferType<typeof validationSchema>
const defaultValues: FormType = {
  description: ''
}
interface CreateAnswerProps {
  question?: Question
}

const CreateAnswer: FC<CreateAnswerProps> = ({ question }) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const createAnswer = useCallback(
    async (data: FormType) => {
      const answer: Answer = {
        dislike: 0,
        like: 0,
        description: data.description,
        id: String(Date.now()),
        createdAt: new Date().toISOString(),
        authorName: 'موضوع سوال',
        authorImage: 'https://picsum.photos/200/200'
      }
      question?.answers?.push(answer)

      await axiosClient.patch(`/questions/${question?.id}/`, question)
    },
    [question]
  )

  const { mutate, isPending } = useMutation({
    mutationFn: createAnswer,
    onSuccess: () => {
      toast.success('پاسخ شما با موفقیت ثبت شد')
      queryClient.invalidateQueries({
        queryKey: ['question', question?.id]
      })
      queryClient.invalidateQueries({
        queryKey: ['questions']
      })
      reset(defaultValues)
      navigate('/questions')
    }
  })

  const onSubmit = (data: FormType) => {
    mutate(data)
  }
  const isLoading = isPending
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="پاسخ دهید"
        placeholder="متن پاسخ خود را بنویسید"
        rows={4}
        multiline
        value={watch('description')}
        onChange={(e) => setValue('description', e.target.value)}
        error={!!errors?.description}
        helperText={errors.description?.message}
        disabled={isLoading}
        variant="filled"
      />
      <div className="flex justify-end">
        <Button
          variant="primary"
          type="submit"
          disabled={isLoading || !watch('description')}>
          ارسال پاسخ
        </Button>
      </div>
    </form>
  )
}
export default CreateAnswer
