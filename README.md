# flashcard-game

An multiplication game built using Electron, React and TypeScript.

Questions are generated from a combination range of numbers between 0 and 12
using a backtracking algorithmn with shuffling. These questions are generated before
the start of the game. For every correct answer, the first question is then popped
off, and if the answer is wrong, the user will need to provide a correct answer
to move.

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
