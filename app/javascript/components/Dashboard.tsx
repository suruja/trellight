import * as React from 'react'

import Column from './Column'

const styles = require('./Dashboard.module.scss')

export interface Props {
}

function Dashboard(props: Props) {
  return (
    <div className={styles.dashboard}>
      <div className={`columns ${styles.container}`}>
        <Column title="À rencontrer" counter={2} />
        <Column title="Entretien" />
        <Column title="Entretien" />
        <Column title="Entretien" />
        <Column title="Entretien" />
        <Column title="Entretien" />
        <Column title="Entretien" />
      </div>
    </div>
  )
}

export default Dashboard
