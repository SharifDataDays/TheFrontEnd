import _ from 'lodash';
import React from 'react';
import { Card } from 'semantic-ui-react';

function TasksMobile({ tasks }) {
  return (
    <>
      {_.map(tasks, (task) => {
        const { id, title_fa } = task;
        return (
          <a href={`/dashboard/tasks/${id}/resource`}>
            <Card style={{ width: '100%' }}>
              <Card.Content>
                <Card.Header style={{ direction: 'rtl' }}>{title_fa}</Card.Header>
              </Card.Content>
            </Card>
          </a>
        );
      })}
    </>
  );
}

export default TasksMobile;
