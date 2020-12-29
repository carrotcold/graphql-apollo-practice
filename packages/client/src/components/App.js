import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Detail} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
