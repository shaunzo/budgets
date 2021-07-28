import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({
  addEntry,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense}) {
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