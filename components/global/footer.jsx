import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

const FixedMenuLayout = () => (
  <div dir="RTL">
    <Segment inverted vertical style={{ padding: '5em 0em', width: '100%' }}>
      <Container textAlign="center">
        <Grid inverted stackable>
          <Grid.Column width={3} />
          <Grid.Column width={3}>
            <Header inverted as="h4" content="شبکه‌های اجتماعی" />
            <List link inverted>
              <List.Item>
                <a
                  href="https://instagram.com/datadays_sharif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} /> اینستاگرام
                </a>
              </List.Item>
              <List.Item>
                <a href="https://t.me/datadays_sharif" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} /> تلگرام
                </a>
              </List.Item>
              <List.Item>
                <a href="https://twitter.com/data_days" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} /> توییتر
                </a>
              </List.Item>
              <List.Item>
                <a href="mailto:datadays@sharif.edu">
                  <FontAwesomeIcon icon={faEnvelope} /> ایمیل
                </a>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            {/* <a href="\staff">تیم ما</a> */}
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
