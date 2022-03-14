import React from 'react'
import styles from './SortableDataGridColumn.module.css'
import SortableDataGridCell from './SortableDataGridCell'


const SortableDataGridColumn = (props) => {

	return (
		<div className={styles.gridColumn}>
			<SortableDataGridCell header="true" label={props.label}/>
				 {props.content.map((cellLabel,index) => <SortableDataGridCell editable={props.editable} key={index} tabindex={-1} header="false" label={cellLabel} id={`Grid2_${props.label}_${index}`}/>)} 
		</div>
	)
}

export default SortableDataGridColumn; 