import './App.css';
import Card from './components/ui/Card';
import Counter from './components/ui/Counter';
import Form from './components/ui/Form';
import List from './components/ui/List';
import Post from './components/ui/Post';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <button type="button">Click</button>
      <Card name="Gerald" description="This is me" />
      <Card name="Gerald" description="This is me again" />
      <Form />
      <Counter />
      <List />
      <Post />
    </div>
  );
}

export default App;