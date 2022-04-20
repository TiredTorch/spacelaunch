import { Stack } from "@mui/material";
import EventList from "./event-list/event-list";
import LaunchesList from "./launches-list/launches-list";

/* eslint-disable-next-line */
export interface HomeSectionProps {}

export function HomeSection(props: HomeSectionProps) {
  return (
    <Stack>
      <EventList/>
      <LaunchesList/>
    </Stack>
  );
}

export default HomeSection;
