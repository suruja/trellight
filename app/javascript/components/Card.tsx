import * as React from 'react'

const styles = require('./Card.module.scss')

export interface Props {
  name: string;
}

function Card({ name }: Props) {
  return (
    <div className={`card has-background-white ${styles.card}`}>
      <div className="card-content">
        <div className="content">
          {name}
        </div>
      </div>
    </div>
  )
}

export default Card
