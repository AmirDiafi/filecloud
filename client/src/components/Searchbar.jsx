import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'

class Searchbar extends React.Component {

state = {posts: []}

async componentDidMount() {
    const data = await fetch('/posts/api/all')
    const json = await data.json()
    const posts = json
    this.setState({posts: posts})
}

    render() { 
	let allTags = new Set()
	const tags = this.state.posts.map(item=>item.tags)
	for(const tag of tags) {
	    tag.map(tag => allTags.add(tag))
	}
	const theTags = [...allTags]
        return (
            <div className="search-form in-posts">
    	    	<Autocomplete
      			id="combo-box-demo"
      			options={theTags}
      			getOptionLabel={options => options}
      			style={{ width: "100%" }}
			onChange={this.props.handleSearch}
      			renderInput={(params) => 
				<TextField {...params} 
					label="Filter Files" 
					variant="outlined" 
				/>}
         	/>
            </div>
         )
    }
}
 
export default Searchbar