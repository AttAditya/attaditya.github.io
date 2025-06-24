import { HashRouter } from 'react-router-dom';
import { PageLayout } from './components/layout';

import './App.css';

export default function App() {
  return (<>
    <HashRouter>
      <PageLayout />
    </HashRouter>
  </>);
}

