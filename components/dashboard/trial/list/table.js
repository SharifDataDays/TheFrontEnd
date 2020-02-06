import React from 'react'
import { Table } from 'semantic-ui-react';
import moment from 'jalali-moment'

const TaskTrialsTable = (props) => {
    console.log(props.trials)
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>شماره</Table.HeaderCell>
                    <Table.HeaderCell>امتیاز</Table.HeaderCell>
                    <Table.HeaderCell>مهلت ارسال</Table.HeaderCell>
                    <Table.HeaderCell>وضعیت</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.trials.map((trial, index) => 
                    <Table.Row>
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{(Object.entries(trial.score).length === 0) ? "---" : trial.score}</Table.Cell>
                        <Table.Cell>{moment(trial.due_time).format()}</Table.Cell>
                        <Table.Cell>ورود</Table.Cell>
                    </Table.Row>
                )} 
            </Table.Body>
        </Table>
    )
}

export default TaskTrialsTable