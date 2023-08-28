import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
          <Button variant='text' href="https://google.com"> Text 1</Button>
          <Button variant='contained'>Text 1</Button>
          <Button variant='outlined'>Text 1</Button>
      </Stack>
      <Stack spacing={5} direction='row'>
          <Button variant='contained' color='primary'>PRIMARY</Button>
          <Button variant='contained' color='secondary'>SECONDARY</Button>
          <Button variant='outlined' color='info'>Infor</Button>
          <Button variant='contained' color='error'>ERROR</Button>
      </Stack >
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small' color='primary'>PRIMARY</Button>
        <Button variant='contained' size='medium' color='primary'>MEDIUM</Button>
        <Button variant='contained' size='large' color='primary'>LARGE</Button>
      </Stack>
    </Stack>
   
  )
}
