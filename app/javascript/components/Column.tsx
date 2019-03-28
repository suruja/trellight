import * as React from 'react'

import Card from './Card'

const styles = require('./Column.module.scss')

export interface Props {
  title: string;
  counter?: number;
}

function Column({ title, counter = 0 }: Props) {
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
        <div className={`card-content ${styles.scrollableContainer}`}>
          <div className={styles.scrollable}>
            <Card name="Alpha" />
            <Card name="Bravo" />
            <Card name="Bravo" />
            <Card name="Bravo" />
            <Card name="Bravo" />
            <Card name="Bravo" />
            <Card name="Bravo" />
            <Card name="Bravo" />
            <Card name="Bravo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Column
