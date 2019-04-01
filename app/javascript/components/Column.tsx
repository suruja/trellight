import * as React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { Card as CardType } from '../types/index'

import Card from './Card'

const styles = require('./Column.module.scss')

export interface Props {
  id: number;
  title: string;
  counter: number;
  cards: Array<CardType>,
}

const getListStyle = (isDraggingOver : boolean) => ({
  backgroundColor: isDraggingOver ? 'lightblue' : 'transparent',
})

function Column({ id, title, counter = 0, cards }: Props) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={`card has-background-light`}>
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
                {cards.map((card, i) => (
                  <Card key={i} id={card.id} columnId={id} title={card.title} position={card.position} />
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
