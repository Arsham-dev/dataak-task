import * as Yup from 'yup'
const validationSchema = Yup.object().shape({
  title: Yup.string().required('عنوان الزامی است'),
  description: Yup.string().required('توضیحات الزامی است')
})
export default validationSchema
