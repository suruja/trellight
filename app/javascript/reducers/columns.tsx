import { ColumnAction } from '../actions'
import { Columns } from '../types/index'
import { FETCH_COLUMNS } from '../constants/index'
import _ from 'lodash'

export function columns(state: Columns = {}, action: ColumnAction): Columns {
  switch (action.type) {
    case FETCH_COLUMNS:
      return _.reduce(action.columns, (memo, column) => {
        memo[column.id] = column
        return memo
      }, {})
  }
  return state
}
