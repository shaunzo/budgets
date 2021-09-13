import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../actions/entries.actions';

function NewEntryForm() {

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();
  
  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: 5,
        description,
        value,
        isExpense
      })
    );

    setDescription('');
    setValue('');
    setIsExpense(true);
  }

    return (
        <Form unstackable>

        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setValue={setValue}
          setDescription={setDescription}
          setIsExpense={setIsExpense}/>

        <ButtonSaveOrCancel addEntry={addEntry} />
      </Form>
    )
}

export default NewEntryForm