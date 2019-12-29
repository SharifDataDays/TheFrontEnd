import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { Card, Grid } from 'semantic-ui-react';

const VALUES = ['2018-03-22', '2018-03-23'];

const EXAMPLE = [
  {
    data: '2018-03-22',
    status: 'status',
    // statusB: "Ready for Dev",
    // statusE: "In Progress"
    info: 'first data',
  },
  {
    data: '2018-03-23',
    status: 'status',
    // statusB: "In Progress",
    // statusE: "Done"
    info: 'second data',
  },
  {
    data: '2018-03-24',
    status: 'status',
    // statusB: "After Progress",
    // statusE: "Done"
    info: 'third data',
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1,
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].info;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].info : '';

    return (
      <div>
        {/* Bounding box for the Timeline */}
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
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={EXAMPLE.map((x) => x.data)}
          />
        </div>
        <div>
          <Grid centered>
            <Card>
              <Card.Content>
                <h1>{curStatus}</h1>
              </Card.Content>
            </Card>
          </Grid>
        </div>
        {/* <div className="text-center"> */}
        {/* any arbitrary component can go here */}
        {/* {curStatus} */}
        {/* </div> */}
      </div>
    );
  }
}
