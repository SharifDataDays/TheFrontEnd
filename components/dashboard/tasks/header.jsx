import React from 'react';
import { Grid, Segment, Image, Header as H, Message, Item } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  margin-bottom: 2.5rem !important;
  color: white;
  font-size: 35px;
`;

const Text = styled.p`
  font-size: 17px;
  color: white;
  direction: rtl;
`;

function HeaderSection({ title, description, image, idsInfo }) {
  const milestoneID = parseInt(idsInfo.mid);
  const contestID = parseInt(idsInfo.cid);
  const refNumber = contestID * 1000 + milestoneID
  return (
    <>
      <Grid
        centered
        style={{
          marginBottom: '2rem',
        }}
      >
        <Grid.Row
          style={{
            marginBottom: '1rem',
            backgroundColor: '#505763',
          }}
        >
          <Grid.Column computer={4} tablet={4} mobile={15}>
            <Segment basic>
              <Image src={image} size="big" verticalAlign="middle" centered />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={7} tablet={7} mobile={15}>
            <Segment basic style={{ textAlign: 'right !important' }}>
              <Header as="h1">{title}</Header>
              <Text
                style={{
                  textAlign: 'justify',
                }}
              >
                {description}
              </Text>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Message>.برای دسترسی به آزمون‌ها ابتدا هر محتوا را مطالعه کنید</Message>
        </Grid.Row>
        <a href={`/dashboard/scoreboard/${refNumber}`}>
          <Grid.Row>
          <Item as='a'>مشاهده‌ی جدول امتیازات</Item>
          </Grid.Row>
        </a>
        
      </Grid>
    </>
  );
}

export default HeaderSection;
