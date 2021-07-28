import React from 'react';
import EntryLine from './EntryLine';
import { Container } from 'semantic-ui-react';

function EntryLines({entries, deleteEntry, editEntry}) {

    return (
        /**
         * When returning multiple nodes from JSX you need to encapsulate
         * everything into one element
         * 
         * Also when outputing repeated elements like this
         * you must add a unique key else react wont know which one
         * to update
         */
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry} />
              ))}
        </Container>
    )
}

export default EntryLines