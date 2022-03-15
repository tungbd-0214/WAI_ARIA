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
			<SortableDataGridCell header="true" label={props.label}/>
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
									/>)} 
		</div>
	)
}

export default SortableDataGridColumn; 