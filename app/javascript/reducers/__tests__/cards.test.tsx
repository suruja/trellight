import { Card, Cards, Column, Columns } from '../../types/index'
import { MOVE_CARD } from '../../constants/index'

import { moveCards } from '../cards'

const columns : Columns = {
  10: {
    id: 10,
    title: "A",
    position: 0,
  },
  11: {
    id: 11,
    title: "B",
    position: 1,
  },
}

const cards : Cards = {
  1: {
    id: 1,
    title: "Alpha",
    columnId: 10,
    position: 0,
  },
  2: {
    id: 2,
    title: "Bravo",
    columnId: 10,
    position: 1,
  },
  3: {
    id: 3,
    title: "Charlie",
    columnId: 10,
    position: 2,
  },
  4: {
    id: 4,
    title: "Delta",
    columnId: 11,
    position: 0,
  },
  5: {
    id: 5,
    title: "Echo",
    columnId: 11,
    position: 1,
  },
}

test('move card to beginning of same column', () => {
  const result = moveCards(cards, {
    type: MOVE_CARD,
    id: 3,
    srcPosition: 2,
    srcColumnId: 10,
    destPosition: 0,
    destColumnId: 10,
  })
  expect(result).toEqual({
    ...cards,
    1: {
      ...cards[1],
      position: 1,
    },
    2: {
      ...cards[2],
      position: 2,
    },
    3: {
      ...cards[3],
      position: 0,
    },
  })
})

test('move card in middle of same column', () => {
  const result = moveCards(cards, {
    type: MOVE_CARD,
    id: 1,
    srcPosition: 0,
    srcColumnId: 10,
    destPosition: 1,
    destColumnId: 10,
  })
  expect(result).toEqual({
    ...cards,
    1: {
      ...cards[1],
      position: 1,
    },
    2: {
      ...cards[2],
      position: 0,
    },
    3: {
      ...cards[3],
      position: 2,
    },
  })
})

test('move card to end of same column', () => {
  const result = moveCards(cards, {
    type: MOVE_CARD,
    id: 1,
    srcPosition: 0,
    srcColumnId: 10,
    destPosition: 2,
    destColumnId: 10,
  })
  expect(result).toEqual({
    ...cards,
    1: {
      ...cards[1],
      position: 2,
    },
    2: {
      ...cards[2],
      position: 0,
    },
    3: {
      ...cards[3],
      position: 1,
    },
  })
})


test('move card to beginning of other column', () => {
  const result = moveCards(cards, {
    type: MOVE_CARD,
    id: 1,
    srcPosition: 0,
    srcColumnId: 10,
    destPosition: 0,
    destColumnId: 11,
  })
  expect(result).toEqual({
    ...cards,
    1: {
      ...cards[1],
      position: 0,
      columnId: 11,
    },
    2: {
      ...cards[2],
      position: 0,
    },
    3: {
      ...cards[3],
      position: 1,
    },
    4: {
      ...cards[4],
      position: 1,
    },
    5: {
      ...cards[5],
      position: 2,
    },
  })
})

test('move card in middle of other column', () => {
  const result = moveCards(cards, {
    type: MOVE_CARD,
    id: 1,
    srcPosition: 0,
    srcColumnId: 10,
    destPosition: 1,
    destColumnId: 11,
  })
  expect(result).toEqual({
    ...cards,
    1: {
      ...cards[1],
      position: 1,
      columnId: 11,
    },
    2: {
      ...cards[2],
      position: 0,
    },
    3: {
      ...cards[3],
      position: 1,
    },
    4: {
      ...cards[4],
      position: 0,
    },
    5: {
      ...cards[5],
      position: 2,
    },
  })
})

test('move card to end of other column', () => {
  const result = moveCards(cards, {
    type: MOVE_CARD,
    id: 1,
    srcPosition: 0,
    srcColumnId: 10,
    destPosition: 2,
    destColumnId: 11,
  })
  expect(result).toEqual({
    ...cards,
    1: {
      ...cards[1],
      position: 2,
      columnId: 11,
    },
    2: {
      ...cards[2],
      position: 0,
    },
    3: {
      ...cards[3],
      position: 1,
    },
    4: {
      ...cards[4],
      position: 0,
    },
    5: {
      ...cards[5],
      position: 1,
    },
  })
})
