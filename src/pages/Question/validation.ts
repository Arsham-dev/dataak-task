import * as Yup from 'yup'
const validationSchema = Yup.object().shape({
  description: Yup.string().required('توضیحات الزامی است')
})
export default validationSchema
