import React, {useState}from 'react'
import styles from './SortableDataGrid.module.css'
import SortableDataGridColumn from './SortableDataGridColumn'

const SortableDataGrid = (props) => {
	const [sortedGridData,setSortedGridData] = useState(props.gridData);
	const [order, setOrder] = useState("ASCEND")
	const gridLabels = Object.keys(props.gridData[0])

	const sortGridDataHandler = () => {
		for ( let i = 0; i < props.gridData.length - 1; i++)  {
			// Last i elements are already in place
			for (let j = 0; j < props.gridData.length-i-1; j++){
				if ((order === "ASCEND" && props.gridData[j].amount > props.gridData[j+1].amount) || (order === "DESCEND" && props.gridData[j].amount < props.gridData[j+1].amount))
				{
					const temp = props.gridData[j]
					props.gridData[j] = props.gridData[j+1]
					props.gridData[j+1]=temp
				}
			}
		}  
		setSortedGridData(props.gridData);
		if(order === "ASCEND") {setOrder("DESCEND")};
		if(order === "DESCEND") {setOrder("ASCEND")};
	}
	const gridColumns = gridLabels.map(
		column => {
		return {
						key : column, 
						label : column.toUpperCase(), 
						content : sortedGridData.map(row => row[column]),
					 }
				}
		)
			let currentFocus;
			let newFocus;
			let idIndex;
			let currentID;
			let currentIndex;
			let stopCondition ;
		const  keyDownFn = (event) => {
			// Key board support
			if(event.keyCode === 37 || event.keyCode ===39) {
				currentID = event.target.id;
				currentFocus = currentID.split('_');
				idIndex = gridLabels.indexOf(currentFocus[1].toLowerCase())
				stopCondition = event.keyCode === 37 ? idIndex > 0 : idIndex < gridColumns.length - 1 ;
				if(stopCondition) {
					document.getElementById(currentID).blur()
					currentFocus.splice(1, 1, event.keyCode === 37 ? gridLabels[idIndex-1].toUpperCase() : gridLabels[idIndex+1].toUpperCase());
					newFocus = currentFocus.join('_');
					document.getElementById(newFocus).focus()
				}
			}
			else if (event.keyCode === 38 || event.keyCode === 40) {
				currentID = event.target.id;
				currentIndex = Number(currentID[currentID.length-1])
				stopCondition = event.keyCode === 38 ? currentIndex  >= 1 : currentIndex+1 < gridColumns[0].content.length ;
				if(stopCondition) {
				document.getElementById(event.target.id).blur()
				currentFocus = event.target.id.split('');
				currentFocus.splice(currentFocus.length-1, 1,event.keyCode===38 ? +currentFocus[currentFocus.length - 1]-1 : +currentFocus[currentFocus.length - 1]+1);
				newFocus = currentFocus.join('');
				document.getElementById(newFocus).focus();
				}
			}
	}
	const editableColumns = ['description']
	const sortableColumns = ['amount']
	const selectableColumns = ['category']
	return (
			<div className={styles.container} onKeyDown={keyDownFn}>
					<h3 className={styles.grid2Label}>
							{props.label}
					</h3>
					<div role="grid" className={styles.sortableDataGrid}
								 aria-labelledby="grid2Label">
									{gridColumns.map( 
										column =>
										<SortableDataGridColumn  
											key = {column.key} 
											label ={column.label} 
											content={column.content} 
											editable={editableColumns.includes(column.key)} 
											sortable={sortableColumns.includes(column.key)}
											selectable={selectableColumns.includes(column.key)}
											categoryOptions={props.category}
											sortFn={sortGridDataHandler}
											/>)}
					</div>
			 </div>
	)
} 

export default SortableDataGrid; 