import React from 'react'
import WaitIcon from '../assets/wait.gif'

class NoResult extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='text-center'>
                <img 
                    className='wait' 
                    src={WaitIcon} 
                    alt=''/>
            </div>
         )
    }
}
 
export default NoResult;