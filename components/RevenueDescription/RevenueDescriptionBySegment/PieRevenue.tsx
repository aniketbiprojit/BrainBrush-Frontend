import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import TocIcon from '@material-ui/icons/Toc'
import ShareIcon from '@material-ui/icons/Share'
import GetAppIcon from '@material-ui/icons/GetApp'
import CodeIcon from '@material-ui/icons/Code'
import ToggleButtons from '../../../common/Togglebuttons/Togglebuttons'
import {PieChart} from '../../Charts/PieChart/PieChart'
import { Container } from 'react-bootstrap'



const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
    minWidth: 275,
  },
  header: {
    padding: '10px',
    fontSize: '25px',
  },
  brand: {
    background: 'rgb(51, 51, 153)',
    color: 'white',
    textAlign: 'center',
    margin: '10px',
    borderRadius: '5px',
  },
  brandName: {
    padding: '5px',
  },
}))

export const PieRevenue: React.FC<{ header: string; company: string; }> = (props) => {
  const { header, company } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card>
        <div><h3>{company} Revenue</h3></div>
        <hr />
        <div className={classes.header}>
          <Grid container>
            <Grid item xs={9}>
              {' '}
              {header}{' '}
            </Grid>
            <Grid item xs={3}>
              {/* <div>
              <small>Period FY 2020</small>
              </div> */}
            </Grid>
          </Grid>{' '}
        </div>
        <CardContent style={{ "height": "80vh" }}>
          <div className="d-flex justify-content-center">
            <div  style={{height:'70vh', width:'70vh'}}>
            <PieChart />
            </div>

          </div>
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={10}>
              <IconButton aria-label='Tables'>
                <TocIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <IconButton aria-label='Download'>
                <GetAppIcon />
              </IconButton>
              <IconButton aria-label='Embed'>
                <CodeIcon />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.brand}>
                <p className={classes.brandName}>Brainbrush</p>
              </div>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  )
}

