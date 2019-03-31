import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const styles = require('./Card.module.scss')

export interface Props {
  id: number;
  title: string;
  position: number;
  columnId: number;
}

function Card({ id, title, position, columnId }: Props) {
  return (
    <Draggable draggableId={id} index={position}>
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
                {title}
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
