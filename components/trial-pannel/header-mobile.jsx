import React from 'react';
import { Container, Image, Header as H, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  font-size: 30px;
  direction: rtl;
`;

const Text = styled.p`
  direction: rtl;
  font-size: 13px;
`;

const GridExampleStretched = () => (
  <Container style={{ marginTop: '2rem' }}>
    <Image src="/images/blog.jpg" />
    <Header as="h1"> فاز اول مسابقه </Header>
    <Text>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
      مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
      را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
      صورت می توان امید داشت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
    </Text>
    <Divider fitted />
  </Container>
);

export default GridExampleStretched;
