import React, {useState}from 'react'
import styles from './SortableDataGrid.module.css'
import SortableDataGridColumn from './SortableDataGridColumn'

const SortableDataGrid = (props) => {
	const [updatedGridData,setUpdatedGridData] = useState(props.gridData);
	const [sortingOrder, setSortingOrder] = useState("ASCEND")
	const gridLabels = Object.keys(updatedGridData[0])
	const [isHidden, setIsHidden] = useState(false)

	const sortGridDataHandler = () => {
		if(sortingOrder === "DESCEND") {
			setUpdatedGridData( prevData => [].concat(prevData)
			.sort((a, b) => b.amount- a.amount)
			.map((item) => item))
		} else {
			setUpdatedGridData( prevData => [].concat(prevData)
			.sort((a, b) => a.amount- b.amount)
			.map((item) => item))
		}
		if(sortingOrder === "ASCEND") {setSortingOrder("DESCEND")};
		if(sortingOrder === "DESCEND") {setSortingOrder("ASCEND")};
	}
	const updateGridDataHandler = (key,index,value) => {
			setUpdatedGridData(prevData =>prevData.map((item,itemId) => {
				if(index === itemId) {
					item[key] = value;
					return item;
				} else {
					return item;
				}
    }));
	}
	const gridColumnsData = gridLabels.map(
		column => {
		return {
						key : column, 
						label : column.toUpperCase(), 
						content : updatedGridData.map(row => row[column]),
					 }
				}
		)
			let currentFocus, newFocus, idIndex, currentID, currentIndex, stopCondition ;
		const  moveFocusFn = (event) => {
			if(event.keyCode === 37 || event.keyCode ===39) {
				currentID = event.target.id;
				currentFocus = currentID.split('_');
				idIndex = gridLabels.indexOf(currentFocus[1].toLowerCase())
				stopCondition = event.keyCode === 37 ? idIndex > 0 : idIndex < gridColumnsData.length - 1 ;
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
				stopCondition = event.keyCode === 38 ? currentIndex  >= 1 : currentIndex+1 < gridColumnsData[0].content.length ;
				if(stopCondition) {
				document.getElementById(event.target.id).blur()
				currentFocus = event.target.id.split('');
				currentFocus.splice(currentFocus.length-1, 1,event.keyCode===38 ? +currentFocus[currentFocus.length - 1]-1 : +currentFocus[currentFocus.length - 1]+1);
				newFocus = currentFocus.join('');
				document.getElementById(newFocus).focus();
				}
			}
	}

	const hideColumnHandler = () => {
			setIsHidden(prev => !prev);
	}
	const editableColumns = ['description']
	const sortableColumns = ['amount']
	const selectableColumns = ['category']
	const canBeHiddenColumns = ['type','category'];
	return (
		<React.Fragment>
			<div className={`${styles.dropdown}`} />
			<div className={styles.container} onKeyDown={moveFocusFn}>
					<h3 className={styles.grid2Label}>
							{props.label}
					</h3>
					<button className={styles.toggle_column_btn}
									type="button"
									name="toggle_columns"
									onClick={hideColumnHandler}>
									{`${isHidden ? 'Show' : 'Hide'} Type and Category`}
					</button>
					<div role="grid" className={styles.sortableDataGrid}
								 aria-labelledby="grid2Label">
									{gridColumnsData.map( 
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
											beHidden={canBeHiddenColumns.includes(column.key) && isHidden}
											/>)}
					</div>
			 </div>
		</React.Fragment>
	)
} 

export default SortableDataGrid; 