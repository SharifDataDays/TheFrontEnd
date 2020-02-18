import React from 'react'
import TaskTrialsTable from './table'

const TrialsList = (props) => {
    return (
        <div dir='rtl'>
            {props.tasks.map((task) => 
                <TaskTrialsTable trials={task.trials}/>
            )}
        </div>
    )
}

export default TrialsList