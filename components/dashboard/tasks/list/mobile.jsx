import _ from 'lodash';
import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

function TasksMobile({ tasks }) {
  return (
    <Grid centered>
      <Grid.Column mobile={14}>
        {_.map(tasks, (task) => {
          const { id, title_fa, description_fa, thumbnail } = task;
          return (
            <a href={`/dashboard/tasks/${id}/resource`}>
              <Card style={{ padding: '1rem', width: '100%' }}>
                <Image src={`https://datadays.sharif.edu${thumbnail}`} />
                <Card.Content>
                  <Card.Header style={{ direction: 'rtl' }}>{title_fa}</Card.Header>
                </Card.Content>
                <Card.Description>{description_fa}</Card.Description>
              </Card>
            </a>
          );
        })}
      </Grid.Column>
    </Grid>
  );
}

export default TasksMobile;
