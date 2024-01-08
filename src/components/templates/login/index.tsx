
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import apiClient from 'libs/apiClient'
import AuthLayout from 'components/layout/AuthLayout'

const defaultTheme = createTheme()

interface LoginType {
  email: string
  password: string
}

export default function Login(): JSX.Element {
  const router = useRouter()

  const { control, handleSubmit, getValues } = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginType> = async () => {

  }

  return (
    <AuthLayout>
      <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1>
              ログイン
            </h1>
            <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate >
              <Controller
                name='email'
                control={control}
                rules={{
                  required: 'メールアドレスを入力してください。',
                  minLength: { value: 4, message: '4文字以上で入力してください。' },
                }}
                render={({ field, fieldState }): JSX.Element => (
                  <TextField
                    {...field}
                    margin='normal'
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    fullWidth
                    label='Email Address'
                    name='email'
                    autoFocus
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                rules={{
                  required: 'メールアドレスを入力してください。',
                  minLength: { value: 4, message: '4文字以上で入力してください。' },
                }}
                render={({ field, fieldState }): JSX.Element => (
                  <TextField
                    {...field}
                    margin='normal'
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    fullWidth
                    label='password'
                    name='password'
                    autoFocus
                  />
                )}
              />
              <div className='handle_btn'>
                <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </div>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </AuthLayout>
  )
}
