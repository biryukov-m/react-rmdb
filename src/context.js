import React, { useState } from 'react';

export const Context = React.createContext();

export const UserProvider = ({ children }) => {
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
};

export default UserProvider;