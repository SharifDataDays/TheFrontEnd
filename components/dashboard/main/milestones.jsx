import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { Card, Grid, Transition, Label } from 'semantic-ui-react';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curPhaseIdx: 2,
      curIdx: 0,
      prevIdx: -1,
      visibality: true,

      //milestones: id, title, start_time, end_time, tasks
      milestones: props.milestones,
    };
  }

  toggleVisibality = () => {
    let preVisibality = this.state.visibality;
    this.setState({ visibality: !preVisibality });

    if (preVisibality) {
      setTimeout(
        function() {
          this.setState({ visibality: preVisibality });
        }.bind(this),
        1000,
      );
    }
  }


  render() {
    const { curIdx, prevIdx } = this.state;
    const milestones = this.state.milestones;
    const curStatus =
      prevIdx >= 0 ? milestones[curIdx].title : milestones[this.state.curPhaseIdx].title;
    const prevStatus = prevIdx >= 0 ? milestones[prevIdx].title : '';

    return (
      <div>
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
            index={this.state.curPhaseIdx}
            indexClick={(index) => {
              this.setState({ prevIdx: this.state.curIdx });
              this.setState({ curIdx: index });
              this.toggleVisibality();
            }}
            values={milestones.map((x) => x.start_time)}
            getLabel={function(date, index) {
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
                  <Card.Header>{this.state.visibality ? curIdx+1 : prevIdx+1} فاز</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Card.Description textAlign="left">{this.state.visibality ? curStatus : prevStatus}</Card.Description>
                </Card.Content>
              </Card>

            </Transition>
          </Grid>
        </div>
      </div>
    );
  }
}
