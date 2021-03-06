import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value={'Hello context!'}>
            <Child />
        </MyContext.Provider>
    );
};

const Child = () => {
      const value = useContext(MyContext);

      return <div>{value}</div>
};

ReactDOM.render(<App />, document.getElementById('root'));
