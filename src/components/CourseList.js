import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from '../components/Course.js';


const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "wl1z0pal05vy",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a"
});

var PRODUCT_CONTENT_TYPE_ID = '2PqfXUJwE8qSYKuM0U6w8M'

class CourseList extends Component {
	state = {
		courses : [],
		searchString: ''
	}

	constructor() {
		super()
		this.getCourses()
	}
	
	getCourses = () => {
		client.getEntries({
			content_type: PRODUCT_CONTENT_TYPE_ID,
			query: this.state.searchString
		})
		.then((response)=>{
			this.setState({courses: response.items})
		})
		.catch((error) =>{
			console.log("Error while fetching data ......."+error+this.state.courses[0].fields.image[0].fields.file.url)
		})
	}

	onSearchInputChange = (event) => {
		if(event.target.value){
			this.setState({searchString : event.target.value})
		}else{
			this.setState({searchString: ''})
		}
		//refresh according to new search
		this.getCourses()
	}

	render(){
		return(
				<div>
				{this.state.courses ? (

						<div>
								<TextField style={{padding:24,width:'90%'}}
								id="searchInput"
								placeholder="search ....."
								margin="normal"
								onChange={this.onSearchInputChange}
								/>
								<Grid
								container spacing={4}
								style={{padding:0}}>
								{this.state.courses.map(currentCourse =>(
										<Grid item xs={12} sm={3} lg={6} xl={4} >

											<Course course={currentCourse} />
										</Grid>
									))}
								</Grid>
						</div>

					): 'No data found'}
				</div>
			)
	}
}


export default CourseList;