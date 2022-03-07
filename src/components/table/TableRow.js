import React from 'react'
import TableCell from './TableCell'
import styles from './TableRow.module.css'

const TableRow = (props) => {

  return (
    <div role="row" className={styles["tableRow"]}>
        {props.contents.map((content) => <TableCell label={content} key={content} header={props.header}/>)}
    </div>
  )
}

export default TableRow