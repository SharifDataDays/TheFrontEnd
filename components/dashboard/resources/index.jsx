import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Grid, Header, Image, Progress } from 'semantic-ui-react';
import Container from './container';

function Pagination({ page, prevPage, nextPage, content }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      {page > 0 ? (
        <Button onClick={prevPage} floated="left">
          قبلی
        </Button>
      ) : (
        <></>
      )}
      {page < content.sections.length ? (
        <Button onClick={nextPage} floated="right">
          بعدی
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const { page } = this.state;
    const { content } = this.props;
    this.setState({
      page: Math.min(page + 1, content.sections.length),
    });
  }

  prevPage(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const { page } = this.state;
    this.setState({
      page: Math.max(page - 1, 0),
    });
  }

  render() {
    const { content } = this.props;
    const { page } = this.state;
    return (
      <>
        <Grid
          style={{ margin: '2rem auto', minHeight: 'calc(100vh - 333px)', direction: 'rtl' }}
          centered
        >
          <Grid.Row>
            <Grid.Column textAlign="center" computer={10} tablet={12} mobile={14}>
              <Progress
                style={{ color: 'black' }}
                value={page + 1}
                total={content.sections.length + 1}
                progress="ratio"
                success
              />
              <Pagination
                page={page}
                content={content}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center" computer={10} tablet={12} mobile={14}>
              <Header as="h1" style={{ textAlign: 'center' }}>
                {content.title_fa}
              </Header>
              <Header as="h4" style={{ textAlign: 'center' }}>
                زمان مطالعه: {content.time_to_read} دقیقه
              </Header>
              {!_.isEmpty(content.file) && (
                <a
                  style={{ textAlign: 'center', margin: '2rem', width: '100%' }}
                  href={content.file}
                  download
                >
                  دانلود منابع
                </a>
              )}
              <br />
              {page > 0 && !_.isEmpty(content.sections[page - 1].link_to_colab) && (
                <a
                  style={{ textAlign: 'center', margin: '2rem', width: '100%' }}
                  href={content.sections[page - 1].link_to_colab}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مشاهده در Google Colab
                </a>
              )}
              <Image size="large" style={{ margin: 'auto' }} src="/images/header.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={10} tablet={12} mobile={14}>
              {page === 0 ? (
                <Container content={content.description_en} />
              ) : (
                <Container content={content.sections[page - 1].markdown} />
              )}
              <Pagination
                page={page}
                content={content}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Resource;
