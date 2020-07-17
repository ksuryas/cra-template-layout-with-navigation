import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import cmp from './helpers/navHelper';

class App extends Component {
   render() {
    let routes = (
         <Switch>
            {cmp.map((item,index) =>{
                  return <Route path={item.path} exact component={item.name} key={index} />
            })}
         </Switch>
    );

    return (
        <Layout>
         {routes}
        </Layout>
    );
  };
}

export default App;