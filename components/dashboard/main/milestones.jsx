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
      curVisibality: true,
      prevVisibality: false,

      //milestones: id, title, start_time, end_time, tasks
      milestones: props.milestones,
    };

  }


  toggleCurVisibility = () => {
    let preVisibality = this.state.curVisibality;
    this.setState({ curVisibality: !preVisibality });

    if (preVisibality) {
      setTimeout(
        function() {
          this.setState({ prevVisibality: !preVisibality });
        }.bind(this),
        1000,
      );
    } else {
      this.setState({ prevVisibality: !preVisibality });
    }
  };

  togglePreVisibility = () => {
    let preVisibality = this.state.prevVisibality;

    if (!preVisibality) {
      setTimeout(
        function() {
          this.setState({ prevVisibality: !preVisibality });
        }.bind(this),
        1000,
      );
    } else {
      this.setState({ prevVisibality: !preVisibality });
    }
  };

  changeDates

  render() {
    const { curIdx, prevIdx } = this.state;
    const milestones = this.state.milestones;
  
    // const curStatus = prevIdx >= 0 ? EXAMPLE[curIdx].info : EXAMPLE[this.state.curPhaseIdx].info;
    // const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].info : '';
    const curStatus =
      prevIdx >= 0 ? milestones[curIdx].title : milestones[this.state.curPhaseIdx].title;
    const prevStatus = prevIdx >= 0 ? milestones[prevIdx].title : '';

    return (
      <div>
        <div
          style={{
            width: '80%',
            height: '100px',
            margin: '0 auto',
            marginTop: '20px',
            fontSize: '15px',
          }}
        >
          <HorizontalTimeline
            styles={{
              background: '#f8f8f8',
              foreground: '#1A79AD',
              outline: '#dfdfdf',
            }}
            index={this.state.curPhaseIdx}
            indexClick={(index) => {
              this.setState({ prevIdx: this.state.curIdx });
              this.setState({ curIdx: index });
              this.toggleCurVisibility();
              this.togglePreVisibility();
            }}
            values={milestones.map((x) => x.start_time)}
            getLabel={function(date, index) {
              return milestones[index].title
            }}
            minEventPadding="120"
            maxEventPadding="120"
          />
        </div>
        <div>
          <Grid centered style={{height: '200', foreground: 'red'}}>
            <Card style={{ width: '50%', height: '100%', outline: 'red'}}>
              <Card.Content textAlign="left">
                <Card.Header>{curIdx + 1} فاز</Card.Header>
              </Card.Content>
              <Card.Content>
                <Card.Description textAlign="left">
                  {curStatus}
                </Card.Description>
              </Card.Content>
            </Card>

            {/* <Transition animation="fly right" duration="1000" visible={this.state.curVisibality}>
              <Card>
                <Card.Content>
                  <h1>{this.state.curVisibality ? curStatus : prevStatus}</h1>
                </Card.Content>
              </Card>
            </Transition>

            <Transition animation="fly right" duration="1000" visible={this.state.prevVisibality}>
              <Card>
                <Card.Content>
                  <h1>{this.state.curVisibality ? prevStatus : curStatus}</h1>
                </Card.Content>
              </Card>
            </Transition> */}
          </Grid>
        </div>
      </div>
    );
  }
}
