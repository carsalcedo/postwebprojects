import React from 'react';
import {Container} from '@material-ui/core'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () =>{
    const user = JSON.parse(localStorage.getItem('profile'));
    return(
        <BrowserRouter>
            <Container maxwidth= 'lg'>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={() => <Redirect to='/posts' />} />
                    <Route path='/posts' exact component={Home}/>
                    <Route path='/posts/search' exact component={Home}/>
                    <Route path='/posts/:id' component={PostDetails}/>
                    {/*<Route path="/auth" exact component={() => (!user ? <Auth/> : <Redirect to='/posts' />)}*/}
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
      
    );
}

export default App;