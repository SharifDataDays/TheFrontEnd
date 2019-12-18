import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

const FixedMenuLayout = () => (
  <div dir="RTL">
    <Segment inverted vertical style={{ padding: '5em 0em', width: '100%' }}>
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3} />
          {/* <Grid.Column width={3}>
            <Header inverted as="h4" content="دسترسی‌ها" />
            <List link inverted>
              <List.Item as="a" href="/blog">
                بلاگ
              </List.Item>
              <List.Item as="a" href="/resources">
                منابع
              </List.Item>
            </List>
          </Grid.Column> */}
          <Grid.Column width={3}>
            <Header inverted as="h4" content="شبکه‌های اجتماعی" />
            <List link inverted>
              <List.Item>
                <a
                  href="https://instagram.com/datadays_sharif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'instagram']} /> اینستاگرام
                </a>
              </List.Item>
              <List.Item>
                <a href="t.me/datadays_sharif" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} /> تلگرام
                </a>
              </List.Item>
              <List.Item>
                <a href="twitter.com/data_days" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} /> توییتر
                </a>
              </List.Item>
              <List.Item>
                <a href="mailto:datadays@sharif.edu">
                  <FontAwesomeIcon icon={['fab', 'instagram']} /> ایمیل
                </a>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="آدرس" />
            <p>تهران، خیابان آزادی، دانشگاه صنعتی شریف، دانشکده مهندسی کامپیوتر</p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <p>
          تمامی حقوق برای انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف محفوظ است.{' '}
          {new Date().getFullYear()}©
        </p>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
