 interface Type {
  id: number;
  name: string;
}

 interface Status {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

 interface LaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  type: string;
}

 interface Configuration {
  id: number;
  url: string;
  name: string;
  family: string;
  full_name: string;
  variant: string;
}

 interface Rocket {
  id: number;
  configuration: Configuration;
}

 interface Orbit {
  id: number;
  name: string;
  abbrev: string;
}

 interface Mission {
  id: number;
  name: string;
  description: string;
  launch_designator?: any;
  type: string;
  orbit: Orbit;
}

 interface Location {
  id: number;
  url: string;
  name: string;
  country_code: string;
  map_image: string;
  total_launch_count: number;
  total_landing_count: number;
}

 interface Pad {
  id: number;
  url: string;
  agency_id?: any;
  name: string;
  info_url?: any;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: Location;
  map_image: string;
  total_launch_count: number;
}

 interface Launch {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: Status;
  last_updated: Date;
  net: Date;
  window_end: Date;
  window_start: Date;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission;
  pad: Pad;
  webcast_live: boolean;
  image: string;
  infographic?: any;
  program: any[];
}

 interface Status2 {
  id: number;
  name: string;
}

 interface Spacestation {
  id: number;
  url: string;
  name: string;
  status: Status2;
  founded: string;
  description: string;
  orbit: string;
  image_url: string;
}

 interface Agency {
  id: number;
  url: string;
  name: string;
  type: string;
}

 interface Program {
  id: number;
  url: string;
  name: string;
  description: string;
  agencies: Agency[];
  image_url: string;
  start_date: Date;
  end_date?: any;
  info_url: string;
  wiki_url: string;
  mission_patches: any[];
}

export interface EventItem {
  id: number;
  url: string;
  slug: string;
  name: string;
  updates: any[];
  type: Type;
  description: string;
  webcast_live: boolean;
  location: string;
  news_url?: any;
  video_url: string;
  feature_image: string;
  date: Date;
  launches: Launch[];
  expeditions: any[];
  spacestations: Spacestation[];
  program: Program[];
}