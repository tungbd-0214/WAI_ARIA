import React from 'react'
import styles from './Table.module.css'
import TableRow from './TableRow';

const Table = (props) => {
  const tableLabels = props.contents[0]
  const tableContents = props.contents.slice(1)
  const rowLen = tableLabels.length

  return (
      <div role="table" className={styles["table"]}
           aria-label="Students"
           aria-describedby="students_table_desc">
          <div id="students_table_desc">
                {props.description}
          </div>
          <div role="rowgroup" className={styles["rowGroup"]}>
                <TableRow rowContent={tableLabels} header={true}/>
          </div>
          <div role="rowgroup" className={styles["rowGroup"]}>
              {tableContents.map((row) => <TableRow rowContent={row} header={false} key={row[rowLen-1]}/>)}
          </div>
       </div>
  );
}

export default Table;