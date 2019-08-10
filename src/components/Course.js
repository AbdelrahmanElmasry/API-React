import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles({
	root:{
		background:"linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2))",
		  margin: '10px 0 0 10px',
		  width:'300px',
		  position: 'relative'
		},
	head:{
		position: 'absolute',
		  top: '50%',
		  left: '50%',
		  fontSize: '2rem',
		  transform: 'translate(-50%, -50%)',
		width:"100%",
		color: 'white',
  		margin: 0,
  		padding: '20px'
	}
});

const Course = (props) =>{
	
	
	const classes  = styles();
	//alert(classes.root.background);
	return(

			<div style={{display:'flex'}}>
					{ props.course ? (
						<div className={classes.root} style={{height:0,margin:'10px 20px',padding:'50% 25%',background:"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(http:"+props.course.fields.image[0].fields.file.url+")no-repeat"}} >
						  <Typography variant="h2" align="center" className={classes.head}>{props.course.fields.productName}</Typography>
						</div>
						) : null
					}
			</div>
		)
}

Course.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Course;