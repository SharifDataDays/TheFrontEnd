import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { Card, Grid, Transition } from 'semantic-ui-react';

const VALUES = ['2018-03-22', '2018-03-23'];

const EXAMPLE = [
  {
    data: '2018-03-22',
    status: 'status',
    info: '1',
  },
  {
    data: '2018-03-23',
    status: 'status',
    info: '2',
  },
  {
    data: '2018-03-24',
    status: 'status',
    info: '3',
  },
  {
    data: '2018-03-25',
    status: 'status',
    info: '4',
  },
  {
    data: '2018-03-26',
    status: 'status',
    info: '5',
  },
  {
    data: '2018-03-27',
    status: 'status',
    info: '6',
  },
  {
    data: '2018-03-28',
    status: 'status',
    info: '7',
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curPhaseIdx: 2,
      curIdx: 0,
      prevIdx: -1,
      curVisibality: true,
      prevVisibality: false,
    };
  }

  toggleCurVisibility = () => {
    let preVisibality = this.state.curVisibality;
    this.setState({ curVisibality: !preVisibality });

    if (preVisibality){
        setTimeout(
            function() {
              this.setState({ prevVisibality: !preVisibality });
            }.bind(this),
            1000,
          );
    }else{
        this.setState({ prevVisibality: !preVisibality });
    }

  };

  togglePreVisibility = () => {
    let preVisibality = this.state.prevVisibality;

    if (!preVisibality){
        setTimeout(
            function() {
              this.setState({ prevVisibality: !preVisibality });
            }.bind(this),
            1000,
          );
    }else{
        this.setState({ prevVisibality: !preVisibality });
    }

    
  };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = prevIdx >= 0 ? EXAMPLE[curIdx].info : EXAMPLE[this.state.curPhaseIdx].info;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].info : '';

    return (
      <div>
        <div
          style={{
            width: '60%',
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
            values={EXAMPLE.map((x) => x.data)}
          />
        </div>
        <div>
            
          <Grid centered>
              <Card>
                  <Card.Content>
                      {curStatus}
                  </Card.Content>
              </Card>
            {/* <Transition animation="fly right" duration="1000" visible={this.state.curVisibality}>
              <Card>
                <Card.Content>
                    {
                        console.log()
                    }
                  <h1>{this.state.curVisibality ? curStatus : prevStatus}</h1>
                </Card.Content>
              </Card>
            </Transition> */}
            {/* <Transition animation="fly left" duration="1000" visible={this.state.prevVisibality}>
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
