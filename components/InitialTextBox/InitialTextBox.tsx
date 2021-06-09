import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// @ts-ignore
import ShowMoreText from 'react-show-more-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faCoffee } from '@fortawesome/free-solid-svg-icons'

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

const InitialTextBox: React.FC<{ data: any;  header: string }> = (props) => {
	const { data, header } = props
	const classes = useStyles()

	const executeOnClick = (isExpanded: any) => {
		console.log(isExpanded)
	}

	const upWard = <FontAwesomeIcon className={classes.icon} icon={faAngleUp} />
	const downWard = <FontAwesomeIcon className={classes.icon} icon={faAngleDown} />

	return (
		<div className={classes.root}>
			<div className={classes.header}> {header} </div>
			<Card>
				<CardContent>
					<ShowMoreText
						lines={3}
						more={downWard}
						less={upWard}
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
