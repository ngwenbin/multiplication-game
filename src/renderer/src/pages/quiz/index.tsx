import { Text } from '@renderer/components'
import './quiz.css'
import { QuizInput, QuizQuestion } from './components'
import { useRef } from 'react'
import useQuizManagement from './state/reducer'
import { useTimer } from './components/hooks/useTimer'

export const Quiz = () => {
  const { getQuiz, initQuiz, nextQuestion, resetQuiz, addError, finishQuiz } = useQuizManagement()
  const formRef = useRef<HTMLFormElement>(null)
  const { setTimer, time } = useTimer({
    onTimeOut: () => {
      finishQuiz()
    }
  })
  const currQuestion = getQuiz.questions[0]

  const handleCheckAnswer = (question: Array<number>, answer: number) => {
    const [x, y] = question
    return x * y === answer
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (form) {
      const formData = new FormData(form)
      const answer = formData.get('quizInput') as string
      const correct = handleCheckAnswer(currQuestion, Number(answer))
      if (correct) {
        form.reset()
        nextQuestion()
      } else {
        addError()
      }
    }
  }

  const handleOnReset = () => {
    resetQuiz()
  }

  const handleOnStart = () => {
    initQuiz(12, 2, () => setTimer(60))
  }

  return (
    <div className="quizFormContainer">
      <Text type="display-sm">Multiplication game</Text>
      <Text>Score: {getQuiz.score}</Text>
      <Text>Errors: {getQuiz.errorCount}</Text>
      {getQuiz.completed ? (
        <>
          <Text>Quiz has ended</Text>
          <button onClick={handleOnReset}>Play again</button>
        </>
      ) : (
        <>
          {getQuiz.questions.length > 0 ? (
            <>
              <Text type="display-lg">{time}</Text>
              <QuizQuestion question={currQuestion} />
              <form onSubmit={handleOnSubmit} ref={formRef}>
                <div className="quizInputContainer">
                  <QuizInput
                    errorCount={getQuiz.errorCount}
                    questionCount={getQuiz.questionCount}
                  />
                  <Text className="quizInputRemark">Press enter to submit</Text>
                </div>
              </form>
            </>
          ) : (
            <>
              <button onClick={handleOnStart}>Start</button>
            </>
          )}
        </>
      )}
    </div>
  )
}
