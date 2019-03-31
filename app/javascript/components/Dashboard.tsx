import * as React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Column as ColumnType } from '../types/index'
import { Action } from '../actions/'

import Column from '../containers/Column'

const styles = require('./Dashboard.module.scss')

export interface Props {
  columns: Array<ColumnType>,
  onMoveCard: (object) => Action;
}

function Dashboard({ columns, onMoveCard }: Props) {
  return (
    <DragDropContext onDragEnd={(e) => onMoveCard({
      id: parseInt(e.draggableId),
      srcColumnId: parseInt(e.source.droppableId),
      srcPosition: e.source.index,
      destColumnId: parseInt(e.destination.droppableId),
      destPosition: e.destination.index,
    })}>
      <div className={styles.dashboard}>
        <div className={`columns ${styles.container}`}>
          {columns.map(({ id, title }, i) => (
            <Column key={i} id={id} title={title} />
          ))}
        </div>
      </div>
    </DragDropContext>
  )
}

export default Dashboard
