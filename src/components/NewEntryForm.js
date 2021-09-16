import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {

  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry
  } = useEntryDetails();

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