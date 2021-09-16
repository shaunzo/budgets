import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from 'uuid';
import { addEntryRedux } from '../actions/entries.actions';

const useEntryDetails = () => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const dispatch = useDispatch();
    
    const addEntry = () => {
      dispatch(
        addEntryRedux({
          id: uuidv4(),
          description,
          value,
          isExpense
        })
      );
  
      setDescription('');
      setValue('');
      setIsExpense(true);
    }

    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
    }

}

export default useEntryDetails;