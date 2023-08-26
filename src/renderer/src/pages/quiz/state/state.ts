export type QuizQuestionOperators = 'add' | 'subtract' | 'multiply' | 'divide' | 'all'

export interface QuizStateType {
  errorCount: number
  questionCount: number
  mode?: QuizQuestionOperators
  score: number
  questions: Array<Array<number>>
  completed: boolean
  maxRange?: number
  pairCount?: number
}

export const initialState = {
  errorCount: 0,
  score: 0,
  questions: [],
  questionCount: 0,
  completed: false
}
