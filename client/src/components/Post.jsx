import React from 'react'
import Pdf from '../assets/pdf.png'
import Wrd from '../assets/wrd.png'
import Excel from '../assets/excel.png'
import Publisher from '../assets/publisher.png'
import Powerpoint from '../assets/powerpoint.png'
import File from '../assets/file.png'
import Audio from '../assets/audio/RP4_KICK_1.mp3'
import {FiTwitter, FiFacebook } from 'react-icons/fi'
import './stylesheets/post.css'
import {Link} from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Share from '@material-ui/icons/Share';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import LabelIcon from '@material-ui/icons/Label';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Label from '@material-ui/icons/Label';
class Post extends React.Component {
    constructor() {
        super()
        this.audio = React.createRef()
        this.state = { 
            isLiked: false,
            isHidden: true
        }
    }


    handleDisplay = () => {
        this.setState({isHidden: !this.state.isHidden})
    }

    handleShare = () => {
        this.audio.current.play()
    }

    handleShareOption = (event) => {
        try {
            this.setState({isHidden: !this.state.isHidden})
            if(event.currentTarget.dataset.uri==='twitter') {
                const url=window.location.origin+'/posts/'
                +this.props.data.id
                const user_id='amir_diafiU'
                const hash_tags=this.props.data.tags.map(tag=>tag)
                const text=encodeURIComponent(this.props.data.desc)
                const params=`menubar=no,toolbar=no,status=no,
                width=570,height=570`
                const shareurl = `https://twitter.com/intent/tweet?
                uri=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`
                window.open(shareurl,'NewWindow',params)
            } else if(event.currentTarget.dataset.uri==='facebook') {
                const params=`menubar=no,toolbar=no,
                status=no,width=570,height=570`
                const url=window.location.origin+'/posts/'
                +this.props.data.id
                const shareurl=`https://www.facebook.com/sharer/
                sharer.phpu=${url}`
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
        let fileType
        if (this.props.data.file.endsWith('pdf')) {
            fileType = Pdf
        } else if (this.props.data.file.endsWith('wrd')) {
            fileType = Wrd
        } else if (this.props.data.file.endsWith('pub')) {
            fileType = Publisher
        } else if (this.props.data.file.endsWith('pp')) {
            fileType = Powerpoint
        } else if (this.props.data.file.endsWith('exc')) {
            fileType = Excel
        } else {
            fileType = File
        }
        return (
            <div className="post">
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <audio 
                                ref={this.audio} 
                                src={Audio}>
                            </audio>
                            <Link 
                                to={ '/posts/'+this.props.data._id } 
                                className="body">
                                <img 
                                    src={fileType}
                                    alt=""
                                />
                                <p className="desc">
                                    {this.props.data.description}
                                </p>
                            </Link>
                            <div className='tags'>
                                {this.props.data.tags.map((tag, key)=>
                                    <Chip 
                                        key={key}
                                        icon={<Label/>}
                                        label={tag}
                                        data-value={tag}
                                        data-type='tag'
                                        onClick={this.props.handleSearch}
                                    />
                                )}
                            </div>
                        </CardContent>
                    </CardActionArea>
		            <Divider />
                    <CardActions style={{display: 'block'}}>
                    <div className="info">
                        <div className='publisher'>
                            <span>By: </span> 
                        {this.props.data.publisher
                        ?<span className="name">
                            {this.props.data.publisher}
                        </span>
                        :<span className="name">Uknown</span>
                        }
                        <span className='date'>
                            {this.props.data.date}
                        </span>
                        </div>
                        <ul className="icons list-unstyled">
                            <li>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    icon={<FavoriteBorder />} 
                                    checkedIcon={<Favorite />} 
                                    name="checkedH" />}
                                label="Custom icon"
                            />
                            </li>
                            <li className='download'>
                                <a 
                                    href={this.props.route+'/files/'
                                    +this.props.data.file} 
                                    download='Tuition'>
                                    <IconButton aria-label="delete">
                                    <CloudDownloadIcon />
                                    </IconButton>
                                </a>
                                </li>
                                <li className='share' 
                                    onClick={this.handleDisplay}>
                                    <IconButton aria-label="delete">
                                    <Share />
                                    </IconButton>
                                </li>
                                <div className={this.state.isHidden
                                    ?"hide":"options-share"}>
                                    <button 
                                        data-uri='twitter' 
                                        onClick={this.handleShareOption}>
                                        <FiTwitter />
                                    </button>
                                    <button 
                                        data-uri='facebook' 
                                        onClick={this.handleShareOption}>
                                        <FiFacebook />
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
 
export default Post