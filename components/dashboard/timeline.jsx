import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { Card, Grid, Transition } from 'semantic-ui-react';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curPhaseIdx: 2,
      curIdx: 0,
      prevIdx: -1,
      visibality: true,
    };
  }

  toggleVisibality = () => {
    const preVisibality = this.state.visibality;
    this.setState({ visibality: !preVisibality });

    if (preVisibality) {
      setTimeout(
        function() {
          this.setState({ visibality: preVisibality });
        }.bind(this),
        1000,
      );
    }
  };

  render() {
    const { milestones } = this.props;
    const { curIdx, prevIdx } = this.state;
    const curStatus = milestones[curIdx].title;
    const prevStatus = prevIdx >= 0 ? milestones[prevIdx].title : '';

    return (
      <>
        <div
          style={{
            width: '80%',
            height: '150px',
            margin: '0 auto',
            marginTop: '70px',
            fontSize: '15px',
          }}
        >
          <HorizontalTimeline
            styles={{
              background: 'white',
              foreground: '#1A79AD',
              outline: '#dfdfdf',
            }}
            index={curIdx}
            indexClick={(index) => {
              this.setState({ prevIdx: curIdx });
              this.setState({ curIdx: index });
              this.toggleVisibality();
            }}
            values={milestones.map((x) => x.start_time)}
            getLabel={(date, index) => {
              return milestones[index].title;
            }}
            minEventPadding="120"
            maxEventPadding="120"
          />
        </div>
        <div>
          <Grid centered style={{ height: '200', foreground: 'red' }}>
            <Transition animation="fly right" duration="1000" visible={this.state.visibality}>
              <Card style={{ width: '50%', height: '100%' }} foreground="red">
                <Card.Content textAlign="left">
                  <Card.Header>{this.state.visibality ? curIdx + 1 : prevIdx + 1} فاز</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Card.Description textAlign="left">
                    {this.state.visibality ? curStatus : prevStatus}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Transition>
          </Grid>
        </div>
      </>
    );
  }
}
