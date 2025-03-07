import { Question } from '../types'

export const questions: Question[] = [
  {
    id: '1',
    title: 'سوال اول',
    createdAt: new Date().toISOString(),
    authorImage: 'https://picsum.photos/200',
    description: 'این یک سوال است',
    answers: []
  },
  {
    id: '2',
    title: 'سوال دوم',
    createdAt: new Date().toISOString(),
    authorImage: 'https://picsum.photos/200',
    description: 'این یک سوال است',
    answers: []
  }
]

export const question: Question = {
  id: '1',
  title: 'سوال اول',
  createdAt: new Date().toISOString(),
  authorImage: 'https://picsum.photos/200',
  description: 'این یک سوال است',
  answers: [
    {
      id: '1',
      createdAt: new Date().toISOString(),
      authorImage: 'https://picsum.photos/200',
      authorName: 'نام نویسنده',
      description: 'این یک پاسخ است',
      like: 0,
      dislike: 0
    }
  ]
}
