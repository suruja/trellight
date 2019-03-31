import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { lifecycle } from 'recompose'

import * as actions from '../actions/'
import { StoreState } from '../types/index'

import Dashboard from '../components/Dashboard'

export function mapStateToProps({ columns }: StoreState) {
  return {
    columns: _(columns).values().sortBy(['position']).value()
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CardAction>) {
  return {
    onMoveCard: ({ id, srcPosition, srcColumnId, destColumnId, destPosition }) => {
      dispatch(actions.moveCard({ id, srcPosition, srcColumnId, destColumnId, destPosition }))
    },
    onLoad: () => {
      dispatch(actions.fetchColumns())
      dispatch(actions.fetchCards())
    },
  }
}

const LoadingDashboard = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  }
})(Dashboard)

export default connect(mapStateToProps, mapDispatchToProps)(LoadingDashboard)
