import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// @ts-ignore
import ShowMoreText from 'react-show-more-text'

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
})

const InitialTextBox: React.FC<{ data: any;  header: string }> = (props) => {
	const { data, header } = props
	const classes = useStyles()

	const executeOnClick = (isExpanded: any) => {
		console.log(isExpanded)
	}

	return (
		<div className={classes.root}>
			<div className={classes.header}> {header} </div>
			<Card>
				<CardContent>
					<ShowMoreText
						lines={3}
						more='Show more'
						less='Show less'
						className='content-css'
						anchorClass='my-anchor-css-class'
						onClick={executeOnClick}
						expanded={false}
            width={280}
					>
						{data}
					</ShowMoreText>
				</CardContent>
			</Card>
		</div>
	)
}

export default InitialTextBox
