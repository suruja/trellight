import _ from 'lodash'
import { CardAction } from '../actions'
import { Cards } from '../types/index'
import { FETCH_CARDS, MOVE_CARD } from '../constants/index'

export function cards(state: Cards = {}, action: CardAction): Cards {
  switch (action.type) {
    case MOVE_CARD:
      return _.reduce(state, (memo, card) => {
        let newIndex: number
        const columnId: number = (card.id === action.id) ? action.destColumnId : card.columnId
        if (card.id === action.id) {
          newIndex = action.destIndex
        } else if (card.columnId === action.srcColumnId && card.index > action.srcIndex) {
          newIndex = card.index - 1
        } else if (card.columnId === action.destColumnId && card.index >= action.destIndex) {
          newIndex = card.index + 1
        } else {
          newIndex = card.index
        }
        memo[card.id] = Object.assign({}, card, {
          index: newIndex,
          columnId,
        })
        return memo
      }, {})

    case FETCH_CARDS:
      return _.reduce(action.cards, (memo, card) => {
        memo[card.id] = card
        return memo
      }, {})
  }
  return state
}
