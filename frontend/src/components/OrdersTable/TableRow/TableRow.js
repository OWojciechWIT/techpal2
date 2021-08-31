import React from "react";
import { Table, List } from 'semantic-ui-react';

const TableRow = (props) => {
  return (
    <Table.Row verticalAlign='top'>
      <Table.Cell>{props.date}</Table.Cell>
      <Table.Cell>
      <List>
          {props.accessories.map((accessory) => {
            return( 
              <List.Item key={accessory.id}>
                {accessory.name} : {accessory.count}
              </List.Item>
            )
          })}
        </List>

      </Table.Cell>
      <Table.Cell>&euro;{props.price.toFixed(2)}</Table.Cell>
    </Table.Row>
  )
};

export default TableRow;
