import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Button variant='text' href="https://google.com"> Text 1</Button>
        <Button variant='contained'>Text 1</Button>
        <Button variant='outlined'>Text 1</Button>
    </Stack>
  )
}
