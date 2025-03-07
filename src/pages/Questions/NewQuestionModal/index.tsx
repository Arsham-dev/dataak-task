import { FC, useCallback } from 'react'
import { Button, Modal } from '../../../components'
import { Input } from '../../../components/Input'
import * as Yup from 'yup'
import validationSchema from './validation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Question } from '../../../types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosClient from '../../../lib/client'
import { toast } from 'react-toastify'
interface NewQuestionModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormType = Yup.InferType<typeof validationSchema>
const defaultValues: FormType = {
  title: '',
  description: ''
}

const NewQuestionModal: FC<NewQuestionModalProps> = ({ isOpen, onClose }) => {
  const queryClient = useQueryClient()
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

  const createQuestion = useCallback(async (data: FormType) => {
    const question: Question = {
      answers: [],
      authorImage: 'https://picsum.photos/200/200',
      createdAt: new Date().toISOString(),
      description: data.description,
      title: data.title,
      id: String(Date.now())
    }
    await axiosClient.post('/questions', question)
  }, [])

  const { mutate, isPending } = useMutation({
    mutationFn: createQuestion,
    onSuccess: () => {
      toast.success('سوال شما با موفقیت ثبت شد')
      queryClient.invalidateQueries({
        queryKey: ['questions']
      })
      reset(defaultValues)
      onClose()
    }
  })

  const onSubmit = (data: FormType) => {
    mutate(data)
  }
  const isLoading = isPending
  return (
    <Modal
      title="سوال جدید"
      isOpen={isOpen}
      onClose={onClose}
      content={
        <form
          className="flex flex-col gap-y-9"
          onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="عنوان سوال"
            placeholder="برای سوال خود عنوان مشخص کنید"
            variant="filled"
            color="default"
            value={watch('title')}
            onChange={(e) => setValue('title', e.target.value)}
            error={!!errors.title}
            helperText={errors.title?.message}
            disabled={isLoading}
          />
          <Input
            color="default"
            multiline
            rows={4}
            label="متن سوال"
            placeholder="متن سوال خود را بنویسید"
            variant="filled"
            value={watch('description')}
            onChange={(e) => setValue('description', e.target.value)}
            error={!!errors.description}
            helperText={errors.description?.message}
            disabled={isLoading}
          />
          <div className="flex gap-x-4 justify-end">
            <Button variant="text" onClick={onClose} type="button">
              انصراف
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading || !watch('title') || !watch('description')}>
              ایجاد سوال
            </Button>
          </div>
        </form>
      }
    />
  )
}
export default NewQuestionModal
