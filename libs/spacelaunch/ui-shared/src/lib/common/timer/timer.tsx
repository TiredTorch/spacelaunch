import { Box, styled, Typography } from "@mui/material";

/* eslint-disable-next-line */
export interface TimerProps {}

const StyledBox = styled(Box)(({ theme }) => ({
  width: '40vw',
  height: '200px',
  background: '#4A00E0',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export function Timer(props: TimerProps) {
  return (
    <StyledBox>
      <Typography variant="h1">
        00:00:27:41
      </Typography>
    </StyledBox>
  );
}

export default Timer;
