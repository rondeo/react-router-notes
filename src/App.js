import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import NotesForm from './NoteForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      notes: []
    } 
  }

  updateField = field => e => {
    this.setState({
      [field]: e.target.value
    })
  }

    render () {
      console.log(this.state);
      return (
        <React.Fragment>
          <Typography align='center' variant='h2' gutterBottom>
            My notes
          </Typography>

          <Grid container justify='center' spacing={2}>
            <NotesForm 
              title={this.state.title}
              description={this.state.description}
              updateField={this.updateField}
            />
            </Grid>
        </React.Fragment>
      )
    }

  }


export default App;
