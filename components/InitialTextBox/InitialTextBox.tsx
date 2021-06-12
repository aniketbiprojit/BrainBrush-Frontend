import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// @ts-ignore
import ShowMoreText from 'react-show-more-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, IconButton } from '@material-ui/core'
import { FaCoffee } from 'react-icons/fa'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
	root: {
		margin: '20px',
		minWidth: 275,
	},
	header: {
		padding: '10px',
		fontSize: '25px',
		fontWeight: 'bold',
	},
	icon: {
		fontSize: '25px'	}
})

// const [fullData, setFullData] = useState()

const InitialTextBox: React.FC<{ data: any;  header: string }> = (props) => {
	
	const { data, header } = props
	const classes = useStyles()

	 
	const revenueData = data.split(" ");
	const revenueDataArray = revenueData.slice(0, 50);
	const revenue = revenueDataArray.join(" ");
	// console.log(revenue);
	// console.log(data);

	// console.log(data.split(" "));
	// console.log(revenueData.slice(0, 10));
	// console.log(revenueDataArray.join(" "));

	const [isExpand, setIsExpand] = React.useState(false);

	const handleData = () => {
		const state = !isExpand;
		setIsExpand(state);
		// console.log(state);
	}

	return (
		<div className={classes.root}>
			<div className={classes.header}> <h3>{header} Revenue (2015-2020)</h3></div>
			<Card>
				<CardContent>
					{isExpand ? data : revenue}
				</CardContent>
			</Card>
			<div className="d-flex justify-content-center">
			<IconButton onClick={handleData} >
				{
					isExpand? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />
				}
			</IconButton >
			</div>
		</div>
	)
}

export default InitialTextBox
