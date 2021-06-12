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
import ToggleButtons from '../../common/Togglebuttons/Togglebuttons'
import {BarChartWithNegative} from '../Charts/BarChart/BarChartWithNegative';
import { Container } from 'react-bootstrap'
import { Button } from '@material-ui/core'
// import { Bar } from '../Charts/BarChart'
// import { annualData } from '../RevenueData/RevenueData'


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};


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

export const NegativeBarChartRevenue: React.FC<{ header: string; company: string; }> = (props) => {
  const { header, company } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card>
        <div>
          <h3 style={{padding:"5px 20px ", borderBottom:'1px solid black'}}>{company} Revenue <Button style={{float:'right'}}>Period FY : 2020</Button></h3>
          </div>
        <div className={classes.header}>
          <Grid container>
            <Grid item xs={9}>
              {' '}
              {header}{' '}
            </Grid>
            <Grid item xs={3}>
              <ToggleButtons leftcontent={'Annual'} rightcontent={'Quarterly'} />
            </Grid>
          </Grid>{' '}
        </div>
        <CardContent style={{ "height": "70vh" }}>
         <Container fluid>
         <BarChartWithNegative />
         </Container>
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

