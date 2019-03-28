import * as React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Card from './Card'

const styles = require('./Column.module.scss')

export interface Props {
  id: string;
  title: string;
  counter?: number;
}

const getListStyle = (isDraggingOver : boolean) => ({
  backgroundColor: isDraggingOver ? 'lightblue' : 'transparent',
})

function Column({ id, title, counter = 0 }: Props) {
  const tCounter = Math.floor(Math.random() * Math.floor(15)) + 1

  return (
    <div className={`column ${styles.container}`}>
      <div className={`card has-background-light ${styles.column}`}>
        <header className={`card-header ${styles.header}`}>
          <p className="card-header-title">
            {title}
          </p>
          <p className="card-header-icon">
            <span className="tag is-primary has-text-weight-bold">
              {counter}
            </span>
          </p>
        </header>
        <Droppable droppableId={id.toString()}>
          {(droppableProvided, droppableSnapshot) => (
            <div
              ref={droppableProvided.innerRef}
              style={getListStyle(droppableSnapshot.isDraggingOver)}
              className={`card-content ${styles.dropzone}`}
            >
              <div className={styles.scrollable}>
                {Array.apply(null, { length: tCounter }).map(Number.call, Number).map(i => (
                  <Card key={i} id={`${i}`} columnId={id} name={`Card ${i}`} index={i} />
                ))}
              </div>
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}

export default Column
