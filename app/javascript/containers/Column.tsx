import { connect } from 'react-redux'
import _ from 'lodash'

import * as actions from '../actions/'
import { StoreState } from '../types/index'

import Column, { Props } from '../components/Column'

export function mapStateToProps({ cards }: StoreState, { id }: { id: number }) {
  const result = _(cards).filter(card => card.columnId === id).sortBy(['position']).value()
  return {
    cards: result,
    counter: result.length,
  }
}

export default connect(mapStateToProps)(Column)
