import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import CustomAvatar from '../../common/Avatar/Avatar'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '20px',
		backgroundColor: theme.palette.background.paper,
	},
	header: {
		padding: '10px',
	},
	mainList: {
		padding: 0,
	},
	list: {
		padding: '0px',
	},
}))

const Suggestion: React.FC<{ datas: any; header: any }> = (props) => {
	const { datas, header } = props
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.header}>{header} </div>
			<div>
				{datas.map((data: any) => (
					<List className={classes.mainList} key={data.name}>
						<Divider />
						<ListItem className={classes.list} button>
							<ListItemIcon>
								<CustomAvatar data={data.icon} />
							</ListItemIcon>
							<ListItemText primary={data.name} />
						</ListItem>
					</List>
				))}
			</div>
		</div>
	)
}

export default Suggestion
