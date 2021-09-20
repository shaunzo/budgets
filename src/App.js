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
  const [incomesTotal,  setIncomesTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState(null);

  // We use the useSelector hook to get the entries from state
  const entries = useSelector((state) => state.entries);
  const {isOpen, id} = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

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

  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance label='Your Balance' value={`$${total}`} />
      <DisplayBalances incomesTotal={incomesTotal} expensesTotal={expensesTotal} />

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries}/>

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry} />

    </Container>
  );
}

export default App;
