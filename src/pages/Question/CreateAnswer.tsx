import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './validation'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { Button } from '../../components'

type FormType = Yup.InferType<typeof validationSchema>
const defaultValues: FormType = {
  description: ''
}
const CreateAnswer = () => {
  const {
    watch,
    setValue,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data: FormType) => {
    console.log(data)
  }
  const isLoading = false
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
