import _ from 'lodash';
import React from 'react';
import moment from 'jalali-moment';
import { Grid, Card, Image } from 'semantic-ui-react';

function Milestones({ contest, milestones }) {
  return (
    <Grid centered>
      <Grid.Column computer={10} tablet={12} mobile={14}>
        <Card.Group>
          {_.map(milestones, (milestone) => {
            const { id, title, description, image, start_time, end_time } = milestone;
            return (
              <a href={`/dashboard/${contest.id}/${id}`}>
                <Card dir="rtl" style={{ margin: '2rem auto' }} fluid>
                  <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Image size="medium" src={image} />
                    <Card.Description>{description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div>{`شروع گام: ${moment
                      .from(start_time, 'en')
                      .locale('fa')
                      .fromNow()}`}</div>
                    <div>{`پایان گام: ${moment
                      .from(end_time, 'en')
                      .locale('fa')
                      .fromNow()}`}</div>
                  </Card.Content>
                </Card>
              </a>
            );
          })}
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
}

export default Milestones;
