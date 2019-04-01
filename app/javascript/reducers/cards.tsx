import * as _ from 'lodash'
import { CardAction, MoveCardAction } from '../actions'
import { Cards } from '../types/index'
import { SESSION_ID, FETCH_CARDS, MOVE_CARD, RECEIVE_MOVE_CARD } from '../constants/index'

export function moveCards(state: Cards, action: MoveCardAction): Cards {
  return {
    ...state,
    ..._(state)
      .filter(card => (
        (card.id !== action.id) && ([action.srcColumnId, action.destColumnId].indexOf(card.columnId) !== -1)
      ))
      .sortBy(card => card.position)
      .groupBy(card => card.columnId)
      .reduce((memo, cards, colId) => {
        _(cards).each((card, i) => {
          memo[card.id] = {
            ...state[card.id],
            position: (parseInt(colId) === action.destColumnId) && (i >= action.destPosition) ? i + 1 : i,
          }
        })
        return memo
      }, {}),
    [action.id]: {
      ...state[action.id],
      columnId: action.destColumnId,
      position: action.destPosition,
    }
  }
}

export function cards(state: Cards = {}, action: CardAction): Cards {
  switch (action.type) {
    case RECEIVE_MOVE_CARD:
      if (action.sessionId == SESSION_ID) return state
      return moveCards(state, action)
    case MOVE_CARD:
      return moveCards(state, action)
    case FETCH_CARDS:
      return _.reduce(action.cards, (memo, card) => {
        memo[card.id] = card
        return memo
      }, {})
  }
  return state
}
