import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { Card, Grid } from 'semantic-ui-react';

const VALUES = ['2018-03-22', '2018-03-23'];

const EXAMPLE = [
  {
    data: '2018-03-22',
    status: 'status',
    info: 'first data',
  },
  {
    data: '2018-03-23',
    status: 'status',
    info: 'second data',
  },
  {
    data: '2018-03-24',
    status: 'status',
    info: 'third data',
  },
  {
    data: '2018-03-25',
    status: 'status',
    info: '4 data',
  },
  {
    data: '2018-03-26',
    status: 'status',
    info: '5 data',
  },
  {
    data: '2018-03-27',
    status: 'status',
    info: '6 data',
  },
  {
    data: '2018-03-28',
    status: 'status',
    info: '7 data',
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   curIdx: 0,
    //   prevIdx: -1,
    //   userIdx: 0,
    //   infoShowing:''
    // };
    this.state = {
        curPhaseIdx: 0,
        curIdx: 0,
        infoShowing: ''
    }
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].info;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].info : '';
    // const {curPhaseIdx, curIdx,}
    

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
            index={this.state.curPhaseIdx}
            indexClick={(index) => {
                this.setState({curIdx: index})
            //   const curIdx = this.state.curIdx;
            //   this.setState({ curIdx: index, prevIdx: curIdx });
                
            this.setState
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
