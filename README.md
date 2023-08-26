# flashcard-game

An multiplication game built using Electron, React and TypeScript.

Questions are generated from a combination range of numbers between 0 and 12 using a backtracking algorithmn with shuffling. These questions are generated before the start of the game. For every correct answer, the first question is then popped off, and if the answer is wrong, the user will need to provide a correct answer to move.

## Requirements

1. Create a program for practicing multiplication tables ✅
2. Generate two random numbers between zero and 12 ✅
3. Allow the user to input the product ✅
4. Indicate whether the user was correct or incorrect ✅
5. If the user was correct, generate two more numbers ✅
6. Keep score: award one point for correct answers; subtract a point for incorrect answers ✅
7. Add a timer. The goal is to achieve the highest score in one minute of play. Starting a new game resets the score to zero. ✅
8. Add other operations (+, -, , ) ❌
9. Track which number combinations have been shown. Ensure that all 225 pairs are guaranteed to be shown eventually. ✅

### Assumptions

1. Combinations for numbers ranging from 0 to 12, at a set of 2 pairs will only yield 78 pairs, not 225 pairs. Since this assignment was done during the weekend, there wasn't opportunity for clarification. Hence the assumption of 78 pairs was made for point i.

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```
