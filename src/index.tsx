import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HookTrainApp from './HookTrain/HookTrain';

export const ConfigContext = React.createContext();

const configValue = {
  title: 'easy peasy'
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ConfigContext.Provider value={configValue}>
      <App />
    </ConfigContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
