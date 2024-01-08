import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { FormControl, FormHelperText } from '@mui/material'
import { InputLabel, MenuItem, Select } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Layout from 'components/layout'
import apiClient from 'libs/apiClient'
// import { v4 as uuidv4 } from 'uuid'
import { jLeagueTeams } from 'utils/teamData'
import { AccountType } from 'types/internal'
// import Meta from 'components/layout/Head'

const defaultTheme = createTheme()

export default function SignUp(): JSX.Element {
  const router = useRouter()

  const { control, handleSubmit } = useForm<AccountType>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      team: '',
      icon: '',
      bgIcon: '',
      bio: '',
      follow: [],
      follower: [],
      twitterURL: '',
      teamURL: '',
    },
  })

  const onSubmit: SubmitHandler<AccountType> = async (data) => {
    // await apiClient
    //   .post('/auth/register', {
    //     email: data.email,
    //     password: data.password,
    //     name: data.name,
    //     team: data.team,
    //     bio: '自己紹介文を入力してください',
    //     // icon: String(uuidv4() + 'iconImg'),
    //     icon: String(11111 + 'iconImg'),
    //   })
    //   .then((res) => {
    //     if (res.status !== 200) throw Error
    //     router.push('/login')
    //   })
  }

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              新規登録
            </Typography>
            <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name='name'
                    control={control}
                    rules={{
                      required: '名前を入力してください。',
                      minLength: { value: 4, message: '4文字以上で入力してください。' },
                    }}
                    render={({ field, fieldState }): JSX.Element => (
                      <TextField
                        {...field}
                        fullWidth
                        id='Name'
                        label='Name'
                        name='Name'
                        autoComplete='family-name'
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='team'
                    control={control}
                    rules={{ required: 'チームを選択してください' }}
                    render={({ field, fieldState }): JSX.Element => (
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>TEAM</InputLabel>
                        <Select {...field} label='team' error={fieldState.invalid}>
                          {jLeagueTeams.map((team) => (
                            <MenuItem value={team.name} key={team.name}>
                              {team.name}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText error={fieldState.invalid}>
                          {fieldState.error?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
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
                        fullWidth
                        label='Email Address'
                        name='email'
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='password'
                    control={control}
                    rules={{
                      required: 'パスワードを入力してください。',
                      minLength: { value: 4, message: '4文字以上で入力してください。' },
                    }}
                    render={({ field, fieldState }): JSX.Element => (
                      <TextField
                        {...field}
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  )
}
