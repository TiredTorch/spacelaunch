import {Chip, styled, Typography } from "@mui/material";

/* eslint-disable-next-line */
export interface SubtitleBoxProps {
  title: string
}

const StyledChip = styled(Chip)(({ theme }) => ({
  background: '#4A00E0',
  padding: '10px 30px',
  borderRadius: '50px',

  fontStyle: 'italic',
  fontSize: theme.typography.h5.fontSize
}));

export function SubtitleBox(props: SubtitleBoxProps) {
  return (
    <StyledChip label={props.title}/>
  );
}

export default SubtitleBox;
