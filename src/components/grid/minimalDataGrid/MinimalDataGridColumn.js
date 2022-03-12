import React from 'react'
import styles from './MinimalDataGridColumn.module.css'
import MinimalDataGridCell from './MinimalDataGridCell'


const MinimalDataGridColumn = (props) => {

	return (
		<div className={styles.gridColumn}>
			<MinimalDataGridCell header="true" label={props.label}/>
			{props.label === "DESCRIPTION" ? 
			props.content.map((item,index) => <MinimalDataGridCell key={index} tabindex={-1} header="false" label={item.desc} href={item.href} id={`${props.label}_${index}`}/>)
				: props.content.map((cellLabel,index) => <MinimalDataGridCell key={index} tabindex={-1} header="false" label={cellLabel} id={`${props.label}_${index}`}/>)}
		</div>
	)
}

export default MinimalDataGridColumn; 