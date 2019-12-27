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
          <Image src="/images/tasks.png" size="big" verticalAlign="middle" centered />
        </Segment>
      </Grid.Column>
      <Grid.Column computer={7} tablet={7} mobile={15}>
        <Segment basic textAlign="right !important">
          <Header as="h1">گام اول</Header>
          <Text>
            وادی علوم داده و داده‌کاوی پر است از دادگانی که اطلاعات ارزشمندی در آن نهفته‌است و
            پرسش‌های مهمی که می‌توان با استفاده از این دادگان یافت و به آنها‌ پاسخ داد. یک متخصص
            علوم داده برای طرح و پاسخ این پرسش‌ها بایستی طی فرایندی، داده را پاکسازی و سپس
            پیش‌پردازش کرده، آن را به صورت اکتشافی و دیداری تحلیل کند، با استفاده از ابزار‌هایی
            ویژگی‌های این داده را به تصویر بکشد و مشاهده و مقایسه کند، سپس با شهودی که از دادگان کسب
            کرده و با استفاده از ابزار‌های آماری و هوش مصنوعی به تحلیل‌های پیچیده‌تر و دقیق‌تر
            بپردازد و در نهایت از دل این داده دانشی ارزشمند را استخراج کند. آشنایی با تکنیک‌های
            تمیز‌کردن داده، پردازش و دیداری سازی آن و همینطور آشنایی با ابزار‌های موجود برای اجرای
            این تکنیک‌ها، گام آغازین مناسبی برای آشنایی با این وادی است. در نخستین گام آموزشی رویداد
            با این موضوعات آشنا خواهید شد.
          </Text>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default HeaderSection;
