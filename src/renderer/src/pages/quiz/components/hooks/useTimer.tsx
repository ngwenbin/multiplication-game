import { useEffect, useState } from 'react'

interface TimerProps {
  onTimeOut?: () => void
}

export const useTimer = ({ onTimeOut }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null)
      if (onTimeOut) {
        onTimeOut()
      }
    }

    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  return {
    time: timeLeft,
    setTimer: setTimeLeft
  }
}

export default useTimer
