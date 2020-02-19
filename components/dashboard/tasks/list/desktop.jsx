import _ from 'lodash';
import React from 'react';
import { Segment, Header as H, Image, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';
import TrialAccardion from './trialAccardion';
import { space, layout, color, border, typography } from 'styled-system';

const RowSegment = styled(Segment)`
  ${space},
  ${layout},
  ${color},
  padding: 0 !important;
  display: flex;
  justify-content: flex-end;
`;

const Header = styled(H)`
  font-size: 35px;
  font-family: IRANSans, 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin-right: 2rem !important;
  margin-top: 2rem !important;
  width: 75% !important;
  text-align: right;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  direction: rtl;
`;

function TasksDesktop({ cid, mid, tasks, token }) {
  console.log(tasks);
  return (
    <Segment.Group
      basic
      raised
      style={{
        width: '60vw',
        border: '0 !important',
        marginLeft: '20vw',
        display: 'flex',
        marginBottom: '3rem',
      }}
    >
      <a href={`/scoreboard/${cid}/${mid}`}>
        <RowSegment
          p={7}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: 'rgba(52, 116, 235, 1)',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <H inverted> جدول امتیازات</H>
        </RowSegment>
      </a>

      {_.map(tasks, (task, i) => {
        // console.log(task)
        const { title_fa, description_fa, thumbnail } = task.content;
        const { id } = task;
        return (
          <>
            <a key={i} href={`/dashboard/${cid}/${mid}/${id}`}>
              <RowSegment>
                <Header>
                  <Text>{title_fa}</Text>
                  <Text style={{ fontSize: '1rem', textAlign: 'justify', paddingLeft: '5px' }}>
                    <EllipsisText
                      text={description_fa}
                      style={{ textAlign: 'justify' }}
                      length={200}
                    />
                  </Text>
                </Header>
                <Image
                  style={{ maxWidth: 200, maxHeight: 200 }}
                  size="small"
                  src={`${thumbnail}`}
                />
              </RowSegment>
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
    </Segment.Group>
  );
}

export default TasksDesktop;
