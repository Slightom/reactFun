import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HookTrainApp from './hookTrain/HookTrain';
import FormTrain from './components/FormTrain/FormTrain';
import NoFound from './components/FormTrain/NoFound/NoFound';
import { GlobalSettingsProvider } from './context/GlobalSettings.context';
import Counter from './components/counter/Counter';
import FormWithUseForm from './components/FormWithUseForm/FormWithUseForm';
import Navbar from './components/navbar/Navbar';
import ImageCard from './components/mui/ImageCard';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './assets/Themes';
import Layout from './components/Layout';

const App = () => {


  return (
    <Router>
      <GlobalSettingsProvider>
        <ThemeProvider theme={customTheme}>
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path='/' component={HookTrainApp} />
              <Route path='/formtrain' component={FormTrain} />
              <Route path='/counter' component={Counter} />
              <Route path='/useForm' component={FormWithUseForm} />
              <Route path='/mui' component={ImageCard} />
              <Route component={NoFound} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </GlobalSettingsProvider>
    </Router>
  );
}

export default App;



