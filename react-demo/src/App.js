import logo from './resources/logo.svg';
import './css/App.css';

// import Page from "./components/001-component_hierarchy/Page";
import Parent from './components/002-props/Parent';

import Page from './components/002-props/commerce-shop/Page';
import CardList from './components/002-props/animal-contact/CardList';
import Manager from './components/003-state/Manager';

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
      {/* <Page/> */}
      {/* <Parent/> */}
      {/* <Page/> */}
      {/* <CardList/> */}
      <Manager/>
    </div>
  );
}

export default App;
