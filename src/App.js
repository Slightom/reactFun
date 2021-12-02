import { useState } from 'react';
import { Button } from '@mui/material'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HookTrainApp from './HookTrain/HookTrain';
import FormTrain from './components/FormTrain/FormTrain';
import NoFound from './components/FormTrain/NoFound/NoFound';
import { GlobalSettingsProvider } from './context/GlobalSettings.context';
import Counter from './components/counter/Counter';
import FormWithUseForm from './components/FormWithUseForm/FormWithUseForm';

const App = () => {


  return (
    <Router>
      <GlobalSettingsProvider>
        <Switch>
          <Route exact path='/' component={HookTrainApp} />
          <Route path='/formtrain' component={FormTrain} />
          <Route path='/counter' component={Counter} />
          <Route path='/useForm' component={FormWithUseForm} />
          <Route component={NoFound} />
        </Switch>
      </GlobalSettingsProvider>
    </Router>
  );
}

export default App;



