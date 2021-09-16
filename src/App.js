import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {useSelector} from 'react-redux';

function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomesTotal,  setIncomesTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [total, setTotal] = useState(0);

  // We use the useSelector hook to get the entries from state
  const entries = useSelector((state) => state.entries);
  const isOpenRedux = useSelector((state) => state.modals.isOpen);

  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);

      // Set values back to default
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  //  
  useEffect(() => {
    // Changes that happen if there is a change in our entries
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if(entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });

    setIncomesTotal(totalIncomes);
    setExpensesTotal(totalExpenses);
    setTotal(totalIncomes - totalExpenses);

  }, [entries]);

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  const editEntry = (id) => {
    console.log(`edit entry with id ${id}`);
    if(id) {
      // Update values before we display the modal
      const index = entries.findIndex((i) => i.id === id);
      const entry = entries[index];
      setEntryId(entry.id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);

      // Display modal
      setIsOpen(true);
    }
  }

  const addEntry = () => {

    // #1 rule is to never mutate your state, so we create a new array and use our state function
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });

    // setEntries(result);
    resetEntry();
  }

  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance label='Your Balance' value={`$${total}`} />
      <DisplayBalances incomesTotal={incomesTotal} expensesTotal={expensesTotal} />

      <MainHeader title='History' type='h3' />

      <EntryLines
        entries={entries}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>

      <ModalEdit
        isOpen={isOpenRedux}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense} />

    </Container>
  );
}

export default App;
