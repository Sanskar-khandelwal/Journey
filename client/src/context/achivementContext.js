import React from 'react'

const {Provider, Consumer} = React.createContext();

const achivementContextProvider = (props) => {
    return (
        <Provider>
            {props.children}
        </Provider>
    )
}

export {achivementContextProvider, Consumer as achivementContextConsumer}