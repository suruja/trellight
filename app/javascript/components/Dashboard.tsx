import * as React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Column from './Column'

const styles = require('./Dashboard.module.scss')

export interface Props {
}

function Dashboard(props: Props) {
  return (
    <DragDropContext onDragEnd={(e) => console.log(e)}>
      <div className={styles.dashboard}>
        <div className={`columns ${styles.container}`}>
          <Column id="1" title="À rencontrer" counter={2} />
          <Column id="2" title="Entretien" />
          <Column id="3" title="A" />
          <Column id="4" title="B" />
          <Column id="5" title="C" />
          <Column id="6" title="D" />
          <Column id="7" title="E" />
        </div>
      </div>
    </DragDropContext>
  )
}

export default Dashboard
