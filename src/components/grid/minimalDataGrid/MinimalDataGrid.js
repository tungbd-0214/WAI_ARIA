import React from 'react'
import styles from './MinimalDataGrid.module.css'
import MinimalDataGridColumn from './MinimalDataGridColumn'

const MinimalDataGrid = (props) => {
	const gridLabels = Object.keys(props.gridData[0])
	const gridColumns = gridLabels.map(
		column => {
		return {
						key : column, 
						label : column.toUpperCase(), 
						content : props.gridData.map(row => row[column]),
						// sortable : column === "amount",
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
				idIndex = gridLabels.indexOf(currentFocus[0].toLowerCase())
				stopCondition = event.keyCode === 37 ? idIndex > 0 : idIndex < gridColumns.length - 1 ;
				if(stopCondition) {
					document.getElementById(currentID).blur()
					currentFocus.splice(0, 1, event.keyCode === 37 ? gridLabels[idIndex-1].toUpperCase() : gridLabels[idIndex+1].toUpperCase());
					newFocus = currentFocus.join('_');
					document.getElementById(newFocus).focus()
					// console.log(newFocus)
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
	return (
			<div className={styles.container} onKeyDown={keyDownFn}>
					<h4 id="grid1Label">
							{props.label}
					</h4>
					<div role="grid" className={styles.minimalDataGrid}
								 aria-labelledby="grid1Label">
									{gridColumns.map(
										column => <MinimalDataGridColumn  key = {column.key} label ={column.label} content={column.content}/>)}
					</div>
			 </div>
	)
} 

export default MinimalDataGrid; 