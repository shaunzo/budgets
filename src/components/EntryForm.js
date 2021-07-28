import React, {Fragment} from 'react';
import {Form, Checkbox, Segment} from 'semantic-ui-react';

function EntryForm({
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense}) {
    return (
        <Fragment>
            <Form.Group widths={3}>
                <Form.Input
                    icon='tags'
                    width={12}
                    label='Description' 
                    placeholder="New shiny thing"
                    value={description}
                    onChange={(event)=>setDescription(event.target.value)}/>

                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}>
                </Form.Input>
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label='Expense'
                    checked={isExpense}
                    onChange={() => setIsExpense(!isExpense)}/>
            </Segment>
        </Fragment>
    )
}

export default EntryForm;