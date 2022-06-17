import logo from './resources/logo.svg';
import './css/App.css';

import Page from "./components/001-component_hierarchy/Page";

/* Exercise
Create a social media page with the following components: 
- Title
- Logo 
- List of Animal friends 
- Animal contact (with image and name)
- Footer

*/

function App() {
  return (
    <div className="App">
      <h2> Hello World! </h2>
      <Page/>
    </div>
  );
}

export default App;
