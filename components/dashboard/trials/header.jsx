import React from 'react';
import { Grid, Segment, Image, Header as H } from 'semantic-ui-react';
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

function HeaderSection() {
  return (
    <Grid
      style={{
        marginBottom: '8rem',
        backgroundColor: '#505763',
      }}
      centered
    >
      <Grid.Column computer={4} tablet={4} mobile={15}>
        <Segment basic>
          <Image src="/images/blog.jpg" size="big" verticalAlign="middle" centered />
        </Segment>
      </Grid.Column>
      <Grid.Column computer={7} tablet={7} mobile={15}>
        <Segment basic textAlign="right !important">
          <Header as="h1">فاز اول مسابقه</Header>
          <Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
            زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
            در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
            روزنامه.
          </Text>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default HeaderSection;
