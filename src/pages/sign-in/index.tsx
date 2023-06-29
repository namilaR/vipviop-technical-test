import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Field, Form, FormRenderProps } from 'react-final-form'
import { red, grey } from '@mui/material/colors'
import { AuthContext } from '../../context/AuthContext'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const index = () => {
  const { signIn, auth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [state, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  })
  const { vertical, horizontal, open } = state
  const onSubmit = (values: ILoginUser) => {
    if (signIn(values)) {
      navigate('/dashboard')
    } else {
      setState({ ...state, open: true })
    }
  }

  useEffect(() => {
    if (auth) {
      navigate('/dashboard')
    }
  }, [])

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  //validation logic need to refactor
  const required = (value: string) => (value ? undefined : 'Required')

  const email = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ? undefined
      : 'Invalid email address'

  const composeValidators =
    (...validators: any) =>
    (value: string) =>
      validators.reduce(
        (error: string, validator: (value: string) => string) =>
          error || validator(value),
        undefined
      )

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: 'inherit',
        backgroundColor: 'primary.dark',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: grey[50],
          width: 600,
          padding: '60px 100px',
          borderRadius: 5,
          maxHeight: 390,
        }}
      >
        <Typography sx={{ mb: 2 }} variant="h4">
          Sign In
        </Typography>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Grid>
                <Grid>
                  <Field
                    name="email"
                    validate={composeValidators(required, email)}
                  >
                    {({ input, meta }) => (
                      <TextField
                        fullWidth
                        sx={{ mb: 2 }}
                        label="Your Email"
                        placeholder="someone@example.com"
                        {...input}
                        error={meta.touched && meta.error !== undefined}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid>
                  <Field name="password" validate={required}>
                    {({ input, meta }) => (
                      <TextField
                        fullWidth
                        sx={{ mb: 2 }}
                        label="Password"
                        type="password"
                        {...input}
                        error={meta.touched && meta.error !== undefined}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid>
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      type="button"
                      disabled={submitting || pristine}
                      onClick={() => form.reset()}
                    >
                      Reset
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Sign In
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          )}
        />
        <Snackbar
          open={state.open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical, horizontal }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Email or Password is incorrect
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}

export default index
