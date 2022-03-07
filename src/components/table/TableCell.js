import React from 'react'
import styles from './TableCell.module.css'

const TableCell = (props) => {

  return (
      <span role="cell" className={props.header ? styles["columnHeader"] : styles["tableCell"]}>
        {props.label}
      </span>
  )
}

export default TableCell;