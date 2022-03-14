import React from 'react' 
import styles from './SortableDataGridCell.module.css'

const SortableDataGridCell = (props) => {

	return (
			props.editable ?
			<div id= {props.id} className={`${styles["editable-text"]} ${styles.gridCell}`}>
			<span className={styles["edit-text-button"]}
						tabindex="-1"
						role="button">
				{props.label}
			</span>
			<input className={`${styles["edit-text-input"]} ${styles.hidden}`}
						 tabindex="-1"
						 value="" />
		</div>
			:
			<div id={props.id} rold="cell" tabindex={props.tabindex} header={props.header} className={styles.gridCell}>{props.label}</div>
	)
}
export default SortableDataGridCell;
