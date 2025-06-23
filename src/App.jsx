import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PageLayout } from './components/layout';

export default function App() {
  return (<>
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  </>);
}

