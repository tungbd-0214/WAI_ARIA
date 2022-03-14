import React, {useState} from 'react' 
import styles from './SortableDataGridCell.module.css'



const SortableDataGridCell = (props) => {
	const [updateText, setUpdateText] = useState(props.label)
	const [editableOn,setEditableOn] = useState(false)
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

	return (
			props.editable ?
			<div id= {props.id} className={`${styles["editable-text"]} ${styles.gridCell} ${editableOn ? styles.editing : ''}`}>
			<span className={`${styles["edit-text-button"]} ${editableOn ? styles.hidden : ''}`}
						tabindex={-1}
						role="button"
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
						
		</div>
			:
			<div id={props.id} rold="cell" tabindex={props.tabindex} header={props.header} className={styles.gridCell}>{props.label}</div>
	)
}
export default SortableDataGridCell;
