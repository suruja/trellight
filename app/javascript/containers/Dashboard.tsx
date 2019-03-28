import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as actions from '../actions/'
import { StoreState } from '../types/index'

import Dashboard from '../components/Dashboard'

export function mapStateToProps({ columns }: StoreState) {
  return {
    columns: _(columns).values().sortBy(['index']).value()
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CardAction>) {
  return {
    onMoveCard: ({ id, srcIndex, srcColumnId, destColumnId, destIndex }) => dispatch(
      actions.moveCard({ id, srcIndex, srcColumnId, destColumnId, destIndex })
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
