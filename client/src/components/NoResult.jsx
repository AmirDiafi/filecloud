import React from 'react'
import NoResultFound from '../assets/no-result-found.png'

class NoResult extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='text-center'>
                <img 
                    className='wait' 
                    src={NoResultFound} 
                    alt=''/>
                <h2>No Result Found</h2>
            </div>
         )
    }
}
 
export default NoResult;