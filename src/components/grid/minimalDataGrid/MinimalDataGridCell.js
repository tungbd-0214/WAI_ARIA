import React from 'react' 
import styles from './MinimalDataGridCell.module.css'

const MinimalDataGridCell = (props) => {

	return (
			props.href ?
			<div rold="cell" header={props.header} className={styles.gridCell}>
					<a id={props.id} tabindex={props.tabindex} href={props.href}>{props.label} </a>
			</div> 
			:
			<div id={props.id} rold="cell" tabindex={props.tabindex} header={props.header} className={styles.gridCell}>{props.label}</div>
	)
}
export default MinimalDataGridCell;
