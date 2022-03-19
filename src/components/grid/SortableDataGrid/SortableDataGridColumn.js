import React from 'react'
import styles from './SortableDataGridColumn.module.css'
import SortableDataGridCell from './SortableDataGridCell'

const SortableDataGridColumn = (props) => {

	const separator = numb => {
    const str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
	}
	
	return (
		<div className={styles.gridColumn}>
			{props.sortable && <SortableDataGridCell header="true" label={props.label} sortFn={props.sortFn}/>}
			{!props.sortable && <SortableDataGridCell header="true" label={props.label}/>}
				 {props.content.map((cellLabel,index) => 
				 					<SortableDataGridCell  
									 			editable={props.editable} 
												selectable={props.selectable} 
												key={index} 
												tabindex={-1} 
												header="false" 
												label={props.label !== 'AMOUNT' ? cellLabel :`$${separator(cellLabel)}.00`} 
												id={`Grid2_${props.label}_${index}`}
												selectOptions={props.categoryOptions}
												updateGridData={props.updateGridData}
												cellIndex={index}
									/>)}
		</div>
	)
}

export default SortableDataGridColumn; 