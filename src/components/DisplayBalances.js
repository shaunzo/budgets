import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({incomesTotal, expensesTotal}) {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                size='tiny'
                color='green'
                label='Income:'
                value={`$${incomesTotal}`}
              />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance
                size='tiny'
                color='red'
                label='Expenses:'
                value={`$${expensesTotal}`}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances