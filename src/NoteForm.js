import React from 'react';
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'

const NotesForm = ({title, description, updateField}) => {
    return (
        <React.Fragment>
            <Grid item xs={8}>
              <Grid item xs={12}>
                  <TextField
                    type='text'
                    placeholder='Title for this note...'
                    margin='normal'
                    fullWidth
                    value={title}
                    onChange={updateField('title')}
                  />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                    placeholder='Start taking notes'
                    margin='normal'
                    multiline
                    rows='4'
                    fullWidth
                    value={description}
                    onChange={updateField('description')} 
                  />
              </Grid>
              <br/>
              <Fab color='secondary'>
                <Icon>edit_icon</Icon>
              </Fab>
            </Grid>
        </React.Fragment>
    )
};

export default NotesForm 