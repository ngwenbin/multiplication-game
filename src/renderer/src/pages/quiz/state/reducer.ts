import { useReducer } from 'react'
import { QuizStateType, initialState } from './state'
import { generatePairs } from '../utils/pairGenerator'
import { Action, ActionType } from './action'

const MAX_RANGE = 13
const MAX_PAIRCOUNT = 2

const quizReducer = (state: QuizStateType, action: Action): QuizStateType => {
  const { type, payload } = action
  switch (type) {
    case ActionType.INIT_QUIZ: {
      const { maxRange, pairCount, onInitCb } = payload
      if (state.questions.length === 0) {
        const result = generatePairs(maxRange, pairCount)
        onInitCb()
        return {
          ...state,
          maxRange,
          pairCount,
          questions: result
        }
      }
      return state
    }

    case ActionType.RESET_QUIZ: {
      const { maxRange, pairCount } = state
      const NmaxRange = maxRange ?? MAX_RANGE
      const NpairCount = pairCount ?? MAX_PAIRCOUNT
      const result = generatePairs(NmaxRange, NpairCount)
      return {
        ...initialState,
        maxRange: NmaxRange,
        pairCount: NpairCount,
        questions: result
      }
    }

    case ActionType.FINISH_QUIZ: {
      return {
        ...state,
        completed: true,
        questions: []
      }
    }

    case ActionType.COMPLETE_QUESTION: {
      const updatedQuestions = [...state.questions]
      updatedQuestions.shift()
      if (updatedQuestions.length === 0) {
        return {
          ...state,
          completed: true,
          questions: []
        }
      }
      return {
        ...state,
        questions: updatedQuestions,
        questionCount: state.questionCount + 1,
        score: state.score + 1
      }
    }

    case ActionType.ADD_ERROR: {
      return {
        ...state,
        errorCount: state.errorCount + 1,
        score: state.score > 0 ? state.score - 1 : state.score
      }
    }

    default:
      return state
  }
}

const useQuizManagement = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return {
    getQuiz: state,
    initQuiz: (maxRange: number, pairCount: number, onInitCb: () => void) =>
      dispatch({ type: ActionType.INIT_QUIZ, payload: { maxRange, pairCount, onInitCb } }),
    resetQuiz: () => dispatch({ type: ActionType.RESET_QUIZ }),
    nextQuestion: () => {
      dispatch({ type: ActionType.COMPLETE_QUESTION })
    },
    finishQuiz: () => dispatch({ type: ActionType.FINISH_QUIZ }),
    addError: () => dispatch({ type: ActionType.ADD_ERROR })
  }
}

export default useQuizManagement
