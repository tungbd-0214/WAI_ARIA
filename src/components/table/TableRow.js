import React from 'react'
import TableCell from './TableCell'
import styles from './TableRow.module.css'

const TableRow = (props) => {

  return (
    <div role="row" className={styles["tableRow"]}>
        {props.rowContent.map((cell) => <TableCell label={cell} key={cell} header={props.header}/>)}
    </div>
  )
}

export default TableRow