import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { Card, Grid, Transition, Label } from 'semantic-ui-react';

// const VALUES = ['2018-03-22', '2018-03-23'];

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
            values={milestones.map((x) => x.start_time)}
          />
        </div>
        <div>
          <Grid centered>
            <Card style={{ width: '50%', height: '100%' }}>
              <Card.Content>
                <Card.Header>{curStatus}</Card.Header>
                <Card.Description>
                  qqwkefjnqkwjfbkqwjbfjwbfjkbkjkqjwkejbfkqjbewkfjbwkjbkejbjbjbfjwebfkwjbnfwjfkwjebfkwjbekjfadldjnkfjbeknfkejnfqluherboquhlbfluehbfjewhfblwqjhfilqwejbfliweqhbflwejblwqjnlqwjknljwnbjbwjlwbjlewhbjflwhbfwjehbfjwbqfjhwbjhqbjwehfbjqwhebfjwhbefjqhwbejfhqwbjefbq
                  qqwkefjnqkwjfbkqwjbfjwbfjkbkjkqjwkejbfkqjbewkfjbwkjbkejbjbjbfjwebfkwjbnfwjfkwjebfkwjbekjfadldjnkfjbeknfkejnfqluherboquhlbfluehbfjewhfblwqjhfilqwejbfliweqhbflwejblwqjnlqwjknljwnbjbwjlwbjlewhbjflwhbfwjehbfjwbqfjhwbjhqbjwehfbjqwhebfjwhbefjqhwbejfhqwbjefbq
                </Card.Description>
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
