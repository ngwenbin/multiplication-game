export enum ActionType {
  INIT_QUIZ = 'INIT_QUIZ',
  RESET_QUIZ = 'RESET_QUIZ',
  'FINISH_QUIZ' = 'FINISH_QUIZ',
  'COMPLETE_QUESTION' = 'COMPLETE_QUESTION',
  'ADD_ERROR' = 'ADD_ERROR',
  'GET_QUESTION' = 'GET_QUESTION'
}

interface InitQuiz {
  type: ActionType.INIT_QUIZ
  payload: {
    maxRange: number
    pairCount: number
    onInitCb: () => void
  }
}

interface ResetQuiz {
  type: ActionType.RESET_QUIZ
  payload?: undefined
}

interface FinishQuiz {
  type: ActionType.FINISH_QUIZ
  payload?: undefined
}

interface CompleteQuestion {
  type: ActionType.COMPLETE_QUESTION
  payload?: undefined
}

interface AddError {
  type: ActionType.ADD_ERROR
  payload?: undefined
}

interface GetQuestion {
  type: ActionType.GET_QUESTION
  payload?: undefined
}

export type Action = InitQuiz | ResetQuiz | FinishQuiz | CompleteQuestion | AddError | GetQuestion
