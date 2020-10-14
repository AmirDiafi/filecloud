import React from 'react'
import Form from './Form'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'

class Add extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
	<div>
      <AppBar position="static">
        <Toolbar>
          <Link to='/' style={{color: '#fff'}}>
	    <IconButton edge="start" color="inherit" aria-label="menu">
            	<HomeIcon />
            </IconButton>
	  </Link>
          <Typography variant="h6" style={{flexGrow: 1, textAlign:'left'}}>
            Add File
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
	<Form />
      </div>
     )
  }
}
 
export default Add

