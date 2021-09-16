import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import { closeEditModal } from '../actions/modals.actions';
import { useDispatch } from 'react-redux';

function ModalEdit({
    isOpen,
    setIsOpen,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense
}) {
    const dispatch = useDispatch();

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>OK</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit