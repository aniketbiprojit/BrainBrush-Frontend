import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import annual from '../../pages/company/[company]/annual'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '4px',
		fontSize: '10px',
	},
	selected: {
		'&$selected': {
			background: 'rgb(168, 218, 220)',
		},
	},
}))

const ToggleButtons = (props) => {
	const classes = useStyles()
	const { leftcontent, rightcontent } = props
	const [alignment, setAlignment] = React.useState('left')

	const handleAlignment = (event, newAlignment) => {
		// parentToggle(newAlignment)
		setAlignment(newAlignment)
	}

	const handleToggleButton = () =>{
		console.log("clicked");
	}


	return (
		<ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label='text alignment'>
			<ToggleButton onClick={handleToggleButton} classes={{ root: classes.root, selected: classes.selected }} value='left' aria-label='left aligned'>
				{leftcontent}
			</ToggleButton>
			<ToggleButton classes={{ root: classes.root, selected: classes.selected }} value='right' aria-label='right aligned'>
				{rightcontent}
			</ToggleButton>
		</ToggleButtonGroup>
	)
}

export default ToggleButtons
