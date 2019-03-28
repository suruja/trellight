import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const styles = require('./Card.module.scss')

export interface Props {
  id: string;
  name: string;
  index: number;
  columnId: string;
}

function Card({ id, name, index, columnId }: Props) {
  return (
    <Draggable draggableId={`${columnId}.${id}`} index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          className={`${styles.draggable} ${draggableSnapshot.isDragging ? styles.dragging : ''}`}
        >
          <div className={`card ${styles.card}`}>
            <div className="card-content">
              <div className="content">
                {name}
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
