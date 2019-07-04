import React from 'react';

export default React.createContext({
    tokens: null,
    userId: null,
    login: (token,userId, tokenExpiration) => {},
    logout: () => {}
});