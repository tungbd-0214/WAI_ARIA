import React, {useState}from 'react'
import styles from './SortableDataGrid.module.css'
import SortableDataGridColumn from './SortableDataGridColumn'

const SortableDataGrid = (props) => {
	const [updateGridData,setUpdateGridData] = useState(props.gridData);
	const [order, setOrder] = useState("ASCEND")
	const gridLabels = Object.keys(updateGridData[0])

	const sortGridDataHandler = () => {
		// const len = props.gridData.length;
		if(order === "DESCEND") {
			setUpdateGridData( prevData => [].concat(prevData)
			.sort((a, b) => b.amount- a.amount)
			.map((item) => item))
		} else {
			setUpdateGridData( prevData => [].concat(prevData)
			.sort((a, b) => a.amount- b.amount)
			.map((item) => item))
		}
		if(order === "ASCEND") {setOrder("DESCEND")};
		if(order === "DESCEND") {setOrder("ASCEND")};
	}

	const updateGridDataHandler = (key,id,value) => {
			setUpdateGridData(prevData =>prevData.map((item,index) => {
				if(index === id) {
					item[key] = value;
					return item;
				} else {
					return item;
				}
        
    }));
	}
	const gridColumns = gridLabels.map(
		column => {
		return {
						key : column, 
						label : column.toUpperCase(), 
						content : updateGridData.map(row => row[column]),
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
											updateGridData={updateGridDataHandler}
											/>)}
					</div>
			 </div>
	)
} 

export default SortableDataGrid; 