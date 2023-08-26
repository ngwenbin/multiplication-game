import { Input } from '@renderer/components'
import './quizInput.css'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const MAX_ANSWER_LENGTH = 4
const numericRegex = /[0-9]|Backspace|Delete|Enter/

interface QuizInputProps {
  errorCount: number
  questionCount?: number
}

const QuizInput = ({ errorCount, questionCount }: QuizInputProps) => {
  const [hasError, setHasError] = useState(false)
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target?.value
    if (val.length > MAX_ANSWER_LENGTH) {
      // slicing here because type=number does not work with maxLength
      e.target.value = val.slice(0, MAX_ANSWER_LENGTH)
    }
  }

  const handleOnKeyChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = e.key
    if (!numericRegex.test(val)) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (errorCount > 0) {
      setHasError(true)
    }
  }, [errorCount])

  useEffect(() => {
    if (questionCount !== undefined && questionCount > 0 && hasError) {
      setHasError(false)
    }
  }, [questionCount])

  return (
    <Input
      id="quizInput"
      type="number"
      inputClassName={clsx(
        'quizBaseInput',
        hasError ? ['quizInputError', 'horizontal-shaking'] : 'quizInput'
      )}
      onInputChange={handleOnInputChange}
      onKeyDown={handleOnKeyChange}
    />
  )
}

export default QuizInput
