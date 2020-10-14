
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import {Link} from 'react-router-dom'

class AddIconComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
	        <div style={{position: 'fixed', right:15, bottom: 15 }}>
            	    <Link to='/add'>
      	    	        <Tooltip title="Add" aria-label="add">
        	    	    <Fab color="primary">
          	    	    <AddIcon />
        	    	    </Fab>
      		    	</Tooltip>
	    	    </Link>
    		</div>
        )
    }
}
 
export default AddIconComponent
  
