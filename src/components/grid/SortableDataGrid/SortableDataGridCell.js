import React, {useState} from 'react' 
import styles from './SortableDataGridCell.module.css'



const SortableDataGridCell = (props) => {
	const [updateText, setUpdateText] = useState(props.label)
	const [editableOn,setEditableOn] = useState(false)
	const [isSelecting, setIsSelecting] = useState(false)
	const [selectedCatelogy,setSelectedCategory] = useState(props.label);
	const toggleEditModeOff = (event) => {
		if(event.keyCode === 13) {
			setEditableOn(false);
		}
	}
	const toggleEditModeOn = () => {
		setEditableOn(true)
	}
	const updateTextHandler = (event) => {
			setUpdateText(event.target.value)
	}
	const selectModeOnHangler = (event) => {
		document.querySelector(`#${event.target.id}`).blur();
		setIsSelecting(true)
	}
	const selectModeOffHandler = () => {
		setIsSelecting(false)
	}
	const selectCategoryHandler = (event) => {
			setSelectedCategory(event.target.getAttribute('data-value'));
			selectModeOffHandler();
	}
	return (
		<React.Fragment >
			{props.editable &&
			<div id={props.id} role="cell" className={`${styles["editable-text"]} ${styles.gridCell} ${editableOn ? styles.editing : ''}`}>
			<span className={`${styles["edit-text-button"]} ${editableOn ? styles.hidden : ''}`}
						role="button"
						tabindex={-1}
						onClick={toggleEditModeOn}>
				{updateText}
			</span> 
			<input className={`${styles["edit-text-input"]} ${editableOn ? '' : styles.hidden}`}
						 tabindex= {0}
						 value={updateText}
						 defaultValue={props.label}
						 onKeyDown={toggleEditModeOff}
						 onChange={updateTextHandler}
						 onBlur={()=> {setEditableOn(false)}}/> 	
		</div>} 
		{props.selectable && 
		<div role="cell"  className={`${styles['menu-wrapper']} ${styles.gridCell} ${styles.selectCell}`}>
							<button
							aria-haspopup="true"
							aria-controls="menu1"
							tabindex={-1}
							id={props.id}
							className={styles.menuButton}
							onClick={selectModeOnHangler}>
							{selectedCatelogy}
							</button>
							<ul role="menu" id="menu1" className={`${styles.menu} ${isSelecting ? '' : styles.hidden}`}>
									{props.selectOptions.map(option => <li role="menuitem" className={styles.menuItem} data-value={option} onClick={selectCategoryHandler}>
									{option}
									</li>)}
							</ul>
			</div>}
		{!props.editable && !props.selectable && <div id={props.id} rold="cell" tabindex={props.tabindex} header={props.header} className={styles.gridCell}>{props.label}</div>}
		</React.Fragment>
	)
}
export default SortableDataGridCell;
