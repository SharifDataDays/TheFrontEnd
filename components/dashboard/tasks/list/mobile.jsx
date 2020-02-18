import _ from 'lodash';
import React from 'react';
import { Grid, Card, Image, Segment, Header as H } from 'semantic-ui-react';
import EllipsisText from 'react-ellipsis-text';
import TrialAccardion from './trialAccardion';

import styled from 'styled-components';

import { space, layout, color, border, typography } from 'styled-system';

const RowSegment = styled(Segment)`
  ${space},
  ${layout}
  padding: 0 !important;
  display: flex;
  justify-content: flex-end;
`;

function TasksMobile({ cid, mid, tasks, token }) {
  return (
    <Grid centered style={{ marginBottom: '5rem' }}>
      <Grid.Column mobile={14}>
        <a href={`/scoreboard/${cid}/${mid}`}>
          <RowSegment
            p={5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              backgroundColor: 'rgba(52, 116, 235, 1)',
            }}
          >
            <H inverted> مشاهده‌ی جدول امتیازات</H>
          </RowSegment>
        </a>

        {_.map(tasks, (task, i) => {
          const { title_fa, description_fa, thumbnail } = task.content;
          const { id } = task;
          return (
            <>
              <a key={i} href={`/dashboard/${cid}/${mid}/${id}`}>
                <Card style={{ padding: '1rem', width: '100%' }}>
                  <Image src={`${thumbnail}`} />
                  <Card.Content>
                    <Card.Header style={{ direction: 'rtl' }}>{title_fa}</Card.Header>
                  </Card.Content>
                  <Card.Description style={{ direction: 'rtl' }}>
                    <p style={{ textAlign: 'justify', color: 'black' }}>
                      <EllipsisText text={description_fa} length={200} />
                    </p>
                  </Card.Description>
                </Card>
              </a>
              <TrialAccardion
                key={i}
                cid={cid}
                mid={mid}
                tid={id}
                token={token}
                can_create_trial={task.can_create_trial}
                content_finished={task.content_finished}
              />
            </>
          );
        })}
      </Grid.Column>
    </Grid>
  );
}

export default TasksMobile;
