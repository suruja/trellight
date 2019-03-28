import _ from 'lodash'
import { CardAction } from '../actions'
import { Cards } from '../types/index'
import { MOVE_CARD } from '../constants/index'

export function cards(state: Cards = {}, { type, id, srcIndex, srcColumnId, destIndex, destColumnId }: CardAction): Cards {
  switch (type) {
    case MOVE_CARD:
      return _.reduce(state, (memo, card) => {
        let newIndex: number
        const columnId: number = (card.id === id) ? destColumnId : card.columnId
        if (card.id === id) {
          newIndex = destIndex
        } else if (card.columnId === srcColumnId && card.index > srcIndex) {
          newIndex = card.index - 1
        } else if (card.columnId === destColumnId && card.index >= destIndex) {
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
  }
  return state
}
