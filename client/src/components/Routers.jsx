import React from 'react'
import Home from './Home'
import Add from './Add'
import PostCard from './PostCard'
import {Switch, Route} from 'react-router-dom'

function Routers() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={Add} />
	        <Route path='/posts/:id' component={PostCard} />
        </Switch>
    )
}
 
export default Routers;