import { Content } from './components/layout/content/Content';
import {Header} from './components/layout/header/Header'
import { Sidebar } from './components/layout/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Header /> 
     <Sidebar /> 
     <Content /> 
   </div>
  );
}

export default App;
