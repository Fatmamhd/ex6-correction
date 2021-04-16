import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormControl, FormHelperText, Grid, Input, InputLabel, InputAdornment, TextField, RadioGroup, Radio, FormLabel, FormControlLabel, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import LanguageIcon from '@material-ui/icons/Language';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import MuiPhoneInput from 'material-ui-phone-number';
import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    backgroundColor: '#C4FFF9',
    height: '115vh',
    border: '1px solid black',
    flexGrow: 1,

  },
  field: {
    margin: 'auto',

  },
  section: {
    border: '1px solid black',
    marginTop: '20px',
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#68D8D6'

  },
  segmentActions: {
    margin: 'auto',
    width: '30%',
    float: 'right'
  },
  btn: {
    margin: 'auto'
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: '20px',
    height: '60px'
  },
  button: {
    padding: theme.spacing(2),
    margin: 'auto',
  }

}));

function Ex6() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>

        <Grid container direction='row' className={classes.title}>
          <Grid item xs={12}>
            <Typography component='' > Inscription </Typography>
          </Grid>

          <Grid item xs={12}>
            <form>
              <Grid container className={classes.section}>
                <Typography variant='subtitle1'>Données personnelles</Typography>
                <Grid container spacing={2}>
                  <Grid item xs = {12} sm={6} md={4} className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='nom'>Nom</InputLabel>
                      <Input id='nom'
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        } />
                      <FormHelperText>Ecrivez votre nom de famille</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='prenom'>Prénom</InputLabel>
                      <Input id='prenom'
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        } />
                      <FormHelperText>Ecrivez votre prénom</FormHelperText>
                    </FormControl>
                  </Grid>
                
              
                  <Grid item xs={12} sm={6} md={4} className={classes.field}>
                    <FormControl>
                      <TextField id='date-de-naissance' type='date' label='Date de naissance' defaultValue='2000-01-01' />
                      <FormHelperText>Choisissez votre date de naissance</FormHelperText>
                    </FormControl>
                  </Grid>
                  </Grid>
    
                <Grid container className={classes.field}>
                  <Grid item xs={12} sm={12} md={12} className={classes.field}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Etat civil</FormLabel>
                    <RadioGroup row aria-label="Etat civil" name="gender1">
                      <FormControlLabel value="1" control={<Radio color="primary" />} label="Célibataire" />
                      <FormControlLabel value="2" control={<Radio color="primary" />} label="Marié(e)" />
                      <FormControlLabel value="3" control={<Radio color="primary" />} label="Veuf(ve)" />
                      <FormControlLabel value="4" control={<Radio color="primary" />} label="Divorcé(e)" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                </Grid>
              </Grid>

              <Grid container className={classes.section}>
                <Typography variant='subtitle1'>Adresse</Typography>
                <Grid container spacing={8}>
                  <Grid item className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='rue'>Rue</InputLabel>
                      <Input id='rue'
                        startAdornment={
                          <InputAdornment position="start">
                            <HomeIcon />
                          </InputAdornment>
                        } />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='ville'>Ville</InputLabel>
                      <Input id='ville'
                        startAdornment={
                          <InputAdornment position="start">
                            <LocationCityIcon />
                          </InputAdornment>
                        } />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={8}>
                  <Grid item className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='code-postal'>Code postal</InputLabel>
                      <Input id='code-postal'
                        startAdornment={
                          <InputAdornment position="start">
                            <LocalPostOfficeIcon />
                          </InputAdornment>
                        } />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='pays'>Pays</InputLabel>
                      <Input id='pays'
                        startAdornment={
                          <InputAdornment position="start">
                            <LanguageIcon />
                          </InputAdornment>
                        } />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container className={classes.field}>
                  <MuiPhoneInput regions={['america', 'europe', 'asia', 'oceania', 'africa']} defaultCountry='ca' />
                </Grid>
              </Grid>
              <Grid container className={classes.section}>
                <Typography variant='subtitle1' >Identification</Typography>
                <Grid container >
                <Grid item className={classes.field}>
                  <FormControl >
                    <InputLabel htmlFor='mail'>Addresse courriel</InputLabel>
                    <Input id='mail'
                      startAdornment={
                        <InputAdornment position="start">
                          <AlternateEmail />
                        </InputAdornment>
                      } />
                  </FormControl>
                  </Grid>                
                  <Grid item className={classes.field}>
                    <FormControl>
                      <InputLabel htmlFor='pwd1'>Mot de passe</InputLabel>
                      <Input id='pwd1'
                        type='password' />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.button}>
                    <FormControl>
                      <InputLabel htmlFor='pwd2'>Confirmer mot de passe</InputLabel>
                      <Input id='pwd2'
                        type='password' />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <br></br>
              <Grid container spacing={8} >
                <Grid item className={classes.button}>
                  <Button variant='contained' color='primary' className={classes.btn} >Confirmer</Button>
                </Grid>
                <Grid item className={classes.button}>
                  <Button variant='contained' color='secondary' className={classes.btn} >Annuler</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Ex6;