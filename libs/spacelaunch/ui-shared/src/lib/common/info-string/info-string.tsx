import { Typography } from "@mui/material";

/* eslint-disable-next-line */
export interface InfoStringProps {
  title: string,
  info: string
}

export function InfoString(props: InfoStringProps) {
  return (
    <Typography variant="h2" fontWeight={400}>
      <b>{props.title}: </b>{props.info}
    </Typography>
  );
}

export default InfoString;
