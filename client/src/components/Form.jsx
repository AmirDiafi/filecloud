import React from 'react'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import Autocomplete from '@material-ui/lab/Autocomplete'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

class Form extends React.Component {
    constructor () {
        super()
        this.state = {
          checked: false,
          filename: null,
          posts: [],
          theTags: [],
	  isDisplay: false
        }
    }

    handleChange = (event) => {
        this.setState({ 
            checked: event.target.checked,
            isDisplay: event.target.checked
        })
    }

    handleChangeFile = (event) => {
        this.setState({ 
          filename: event.target.files[0].name
        })
      }

   handleTags = (event, value) => {
       this.setState({theTags: value})
   }

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
      <form 
        action='/post' 
        method='POST' 
        className='text-center' 
        style={{margin: '30px auto'}}>
	      <h3> Upload File </h3>
        <TextField
          required
          style={{width:"80%"}}
          id="outlined-required"
          label="Some Description"
          placeholder="Description"
          multiline
          name='description'
          variant="outlined"
        />
        <div>
          <Autocomplete style={
            {width:"80%", margin:' 10px auto'}
          }
            multiple
            id="tags-outlined"
            onChange={this.handleTags}
            options={theTags}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip 
                  variant="outlined" 
                  label={option} 
                  {...getTagProps({ index })} 
                />
              ))}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined" 
                label="Some Tags Here"
                placeholder="Tags" />
            )}
          />
          <input 
            hidden
            name='tags'
            required
            value={this.state.theTags.join(' ')} />
          </div>
          <Input
            style={{opacity:0, position: 'absolute'}}
            accept="/*"
            id="contained-button-file"
            type="file"
            name='file'
            onChange={this.handleChangeFile}
          />
          <label 
            htmlFor="contained-button-file" 
            style={{width:"80%"}}>
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={!this.state.filename
                ?<CloudUploadIcon />
                :null}
              component="span" 
              style={{width:"100%"}}>
              {!this.state.filename
                ?"Upload a file"
                :this.state.filename}
            </Button>
          </label>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                color='secondary'
              />
            }
            label="You Wanna Show your Identity"
          />
          <br/>
	{this.state.isDisplay?
	<React.Fragment>
          <TextField
            style={{width:"80%"}}
            id="outlined"
            label="Full Name (Optional)"
            placeholder="Full Name"
            name='publisher'
            variant="outlined"
          />
          <br/>
	</React.Fragment>
	:null}
          <br/>
          <Button 
            variant="contained" 
            color="primary"
            style={{
                display:'block', 
                width:'20%', 
                margin: 'auto', 
                padding: 0
              }}>
            <button 
              style={{
                background:'none',
                display:'block',
                padding: 5, 
                fontWeight:'bold',
                width:'100%',
                height:'100%',
                border:'none',
                color: '#fff'
              }}
              type="submit"  
              >
              POST
              </button>
            </Button>
          </form>
         )
    }
}
 
export default Form;