import { Text } from '@renderer/components'
import { QuizQuestionOperators } from '../../state/state'

interface QuizQuestionProps {
  question?: Array<number>
}

const operatorMappings: Record<Exclude<QuizQuestionOperators, 'all'>, string> = {
  add: '+',
  multiply: '×',
  divide: '÷',
  subtract: '−'
}

const QuizQuestion = ({ question }: QuizQuestionProps) => {
  const [x, y] = question ?? []

  if (!x || !y) {
    return null
  }

  return (
    <Text type="display-2xl" className="quizQuestion">
      {x} {operatorMappings['multiply']} {y}
    </Text>
  )
}

export default QuizQuestion
