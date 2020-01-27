import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Questions from './questions';

function Trials({
  token,
  trials,
  changeAnswer,
  submit,
  contest,
  milestone,
  task,
  trial,
  questions,
}) {
  return (
    <Grid style={{ margin: '2rem auto', direction: 'rtl' }} centered>
      <Grid.Row>
        <Grid.Column computer={10} tablet={12} mobile={14}>
          <Questions trials={trials} changeAnswer={changeAnswer} questions={questions} />
          <Button
            primary
            onClick={(e) => {
              e.preventDefault();
              submit(token, contest, milestone, task, trial);
            }}
          >
            ثبت
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Trials;
