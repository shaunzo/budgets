import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from 'uuid';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { closeEditModal } from "../actions/modals.actions";

const useEntryDetails = (desc="", val="", isExp=true) => {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();

    useEffect(() => {
      setDescription(desc);
      setValue(val);
      setIsExpense(isExp);
    }, [desc, val, isExp]);

    const updateEntry = (id) => {
      dispatch(
        updateEntryRedux(
          id,
          {
            id,
            description,
            value,
            isExpense
          }
        )
      );

      dispatch(
        closeEditModal(id)
      );
    }
    
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
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry
    }

}

export default useEntryDetails;