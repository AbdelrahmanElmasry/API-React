import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'



const Course = (props) =>{
	return(

			<div>
					{ props.course ? (
						<Card>
							<CardMedia style={{height:0,padding:'56%'}}
								image={props.course.feilds..file.url}
								title={props.course.feilds.title}
							/>
						<CardContent>
								<Typography gutterBottom variant="headline" component="h2">
									{props.course.feilds.productName}
								</Typography>
						</CardContent>
						</Card>
						) : null
					}
			</div>
		)
}

export default Course;