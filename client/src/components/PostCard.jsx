import React from 'react'
import Wait from './Wait'
import './stylesheets/post.css'
import Post from './Post'
import {Link} from 'react-router-dom'
import {FaChevronLeft} from 'react-icons/fa'

class PostCard extends React.Component {
    constructor() {
        super()
        this.audio = React.createRef()
        this.state = { 
            post: undefined,
            isLiked: false,
            isHidden: true,
            isLoading: false
        }
    }

    handleDisplay = () => {
        this.setState({isHidden: !this.state.isHidden})
    }

    handleShare = () => {
        this.audio.current.play()
    }

    componentDidMount() {
	fetch('/posts/api/all')
	.then(posts=>posts.json())
	.then(posts=>
		posts.find(post=>
			String(post._id)===String(this.props.match.params.id)
		)
	).then(post => this.setState({post: post}))
    }

    handleShareOption = (event) => {
        try {
            this.setState({isHidden: !this.state.isHidden})
            if(event.currentTarget.dataset.uri==='twitter') {
                const url=window.location.href+'posts/'+this.props.data.id
                const user_id='amir_diafiU'
                const hash_tags=this.props.data.tags.map(tag=>tag)
                const text=encodeURIComponent(this.props.data.desc)
                const params='menubar=no,toolbar=no,status=no,width=570,height=570'
                const shareurl = `https://twitter.com/intent/tweet?uri=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`
                window.open(shareurl,'NewWindow',params)
            } else if(event.currentTarget.dataset.uri==='facebook') {
                const params='menubar=no,toolbar=no,status=no,width=570,height=570'
                const url=window.location.href+'posts/'+this.props.data.id
                const shareurl=`https://www.facebook.com/sharer/sharer.phpu=${url}`
                window.open(shareurl,'NewWindow',params)
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleLike = () => {
        this.audio.current.play()
        this.setState({isLiked: !this.state.isLiked})
    }
    render() {
        return (
	        <div className="the-post">
                {this.state.post
			    ?<React.Fragment>
                    <div className='navbar'>
                        <Link to='/'>
                            <FaChevronLeft /> Home
                        </Link>
                    </div>
                    <Post 
                        data={this.state.post}
                        route='../media/'
                        handleSearch={this.handleSearch}
                    />
			    </React.Fragment>
                :<Wait/>}
            </div>
        )
    }
}
 
export default PostCard