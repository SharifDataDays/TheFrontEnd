import React from 'react';
import { Grid, Segment, Image, Header as H } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  margin-top: 2rem !important;
  margin-bottom: 2.5rem !important;
  color: white;
  font-size: 35px;
  font-family: IRANSans, 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
`;

const Text = styled.p`
  font-size: 17px;
  color: white;
`;

const HeaderMobile = () => (
  <Grid
    columns={2}
    style={{
      marginBottom: '8rem',
      borderBottom: '1px solid grey',
      backgroundColor: '#505763',
      maxHeight: '500px',
      minHeight: '300px',
    }}
    centered
  >
    <Grid.Row>
      <Grid.Column width={4}>
        <Segment basic>
          <Image src="/images/blog.jpg" size="big" verticalAlign="middle" centered />
        </Segment>
      </Grid.Column>
      <Grid.Column width={7} style={{ direction: 'rtl !important' }}>
        <Segment basic textAlign="right !important">
          <Header as="h1">فاز اول مسابقه</Header>
          <Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
            زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
            در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
          </Text>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HeaderMobile;
