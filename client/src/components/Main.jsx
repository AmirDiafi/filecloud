import React from 'react'
import Posts from './Posts'
import Searchbar from './Searchbar'
import AddIconComponent from './AddIconComponent'
import LoadingImg from '../assets/wait.gif'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true,
            value:'',
            posts: [],
	        isLoading: false
        }
    }

async componentDidMount() {
    let limit = 2
    let data = await fetch(`/posts/api/${limit}`)
    let json = await data.json()
    let posts = json
    this.setState({posts: posts})

	window.addEventListener('scroll', async () => {
	    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
		this.setState({isLoading: true});
		limit+=1
		fetch(`/posts/api/${limit}`)
		.then(data => data.json())
		.then(posts => this.setState({posts: posts, isLoading: false}))
	    }
	})
}

    handleSearch = async (event, value) => {
 	    if (event.currentTarget.dataset.type==='tag') {
		const tag = event.currentTarget.dataset.value
	    	const data = await fetch('/posts/api/all')
    	    	const json = await data.json()
    	    	const posts = json
            	this.setState({
                	posts: posts.filter(post=> post.tags.includes(tag))
            	})
            } else if(value !== null) {
	    const data = await fetch('/posts/api/all')
    	    const json = await data.json()
    	    const posts = json
            	this.setState({
                	posts: posts.filter(post=>
                    		post.tags.includes(value)
                	)
            	})
            	setTimeout(() => this.setState({value: ''}), 0)
            } else {
	    	const data = await fetch('/posts/api/2')
    	    	const json = await data.json()
    	    	const posts = json
            	this.setState({posts: posts})
            }
    }

    render() { 
        return ( 
            <div className="posts">
                <Searchbar 
                    handleSearch={this.handleSearch} 
                    value={this.state.value}
                />
                <Posts 
                    posts={this.state.posts} 
                    handleSearch={this.handleSearch} 
                />
                <AddIconComponent />
                {this.state.isLoading
                ?<img 
                    style={{width:50,height:50}} 
                    src={LoadingImg} alt=''/>
                :null}
            </div>
        )
    }
}
 
export default Main