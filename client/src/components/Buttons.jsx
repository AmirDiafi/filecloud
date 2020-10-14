import React from 'react'
import {Link} from 'react-router-dom'

import {FiHelpCircle, FiLogOut, FiEdit} from 'react-icons/fi'

class Buttons extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="buttons">
                <div className="button file">
                </div>
                <div className="button">
                    <Link to='edit'>
                        <span>
                            <FiEdit/>
                            Edit
                        </span>
                    </Link>
                </div>
                <div className="button">
                    <Link to='help'>
                        <span>
                            <FiHelpCircle/>
                            Help
                        </span>
                    </Link>
                </div>
                <div className="button">
                    <Link to='logout'>
                        <span>
                            <FiLogOut/>
                            Logout
                        </span>
                    </Link>
                </div>
            </div>
         )
    }
}
 
export default Buttons;