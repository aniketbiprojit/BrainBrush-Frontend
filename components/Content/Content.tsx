import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpandHeader from '../../common/ExpandHeader/ExpandHeader'

const useStyles = makeStyles({
	root: {
		margin: '20px',
		minWidth: 275,
	},
})

const Content: React.FC<{ data?: any; header: any }> = (props) => {
	const { data, header } = props
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<ExpandHeader data={data} header={header} />
		</div>
	)
}

export default Content
