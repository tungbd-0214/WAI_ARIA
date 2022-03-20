import React, {useState,useRef} from 'react' 
import styles from './SortableDataGridCell.module.css'

const SortableDataGridCell = (props) => {
	const [isEditting,setIsEditting] = useState(false)
	const [isSelecting, setIsSelecting] = useState(false)
	const descriptionRefInput = useRef('')
	const toggleEditModeOff = (event) => {
		if(event.keyCode === 13) {
			setIsEditting(false);
			props.updateGridData('description',props.cellIndex,descriptionRefInput.current.value);
		}
	}
	const toggleEditModeOn = () => {
			setIsEditting(true)
	}
	const toggleSelectModeOff = (event) => {
		setIsSelecting(false)
		props.updateGridData('category',props.cellIndex,event.target.innerHTML);
	}
	const toggleSelectModeOn = (event) => {
		document.querySelector(`#${event.target.id}`).blur();
		setIsSelecting(prevState => !prevState)
	}
	return (
		<React.Fragment >
			{props.editable &&
			<div id={props.id} role="cell" className={`${styles["editable-text"]} ${styles.gridCell} ${isEditting ? styles.editing : ''}`}>
				<span className={`${styles["edit-text-button"]} ${isEditting ? styles.hidden : ''}`}
							role="button"
							tabindex={-1}
							onClick={toggleEditModeOn}>
					{props.label}
				</span> 
				<input className={`${styles["edit-text-input"]} ${isEditting ? '' : styles.hidden}`}
							tabindex= {0}
							defaultValue={props.label}
							onKeyDown={toggleEditModeOff}
							ref={descriptionRefInput}
							onBlur={()=> {setIsEditting(false) }}/>
			</div>} 
		{props.selectable && 
			<div role="cell"  className={`${styles['menu-wrapper']} ${styles.gridCell} ${styles.selectCell}`}>
								<button
								aria-haspopup="true"
								aria-controls="menu1"
								tabindex={-1}
								id={props.id}
								className={styles.menuButton}
								onClick={toggleSelectModeOn}
								>
								{props.label}
								</button>
								<ul role="menu" id="menu1" className={`${styles.menu} ${isSelecting ? '' : styles.hidden}`}>
										{props.selectOptions.map(
										option => <li role="menuitem" className={styles.menuItem} onClick={toggleSelectModeOff} >
																{option}
															</li>)}
								</ul>
				</div>}
		{!props.editable && !props.selectable && <div id={props.id} rold="cell" tabindex={props.tabindex} header={props.header} className={styles.gridCell} onClick={props.sortFn}>{props.label}</div>}
		</React.Fragment>
	)
}
export default SortableDataGridCell;
