import { Stack, styled, Typography } from "@mui/material";

/* eslint-disable-next-line */
export interface DetailListItemProps {
  title: string,
  value: string
}

const StyledStack = styled(Stack)({
  margin: '10px 0'
})

export function DetailListItem(props: DetailListItemProps) {
  return (
    <StyledStack>
      <Typography variant="h5" fontWeight={400} align={'center'}>
        {props.title}
      </Typography>
      <Typography variant="h5" align={'center'}>
        {props.value}
      </Typography>
    </StyledStack>
  );
}

export default DetailListItem;
