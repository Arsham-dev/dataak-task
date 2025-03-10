import { Answer } from './answer'

export type Question = {
  id: string
  title: string
  createdAt: string
  authorImage: string
  description: string
  answers: Answer[]
}
