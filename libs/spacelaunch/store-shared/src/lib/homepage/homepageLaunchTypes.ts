 interface Status {
  id: number;
  name: string;
}

 interface LaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  featured: boolean;
  type: string;
  country_code: string;
  abbrev: string;
  description: string;
  administrator: string;
  founding_year: string;
  launchers: string;
  spacecraft: string;
  launch_library_url: string;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
  info_url: string;
  wiki_url: string;
  logo_url: string;
  image_url: string;
  nation_url: string;
}

 interface Configuration {
  id: number;
  launch_library_id: number;
  url: string;
  name: string;
  description: string;
  family: string;
  full_name: string;
  launch_service_provider: LaunchServiceProvider;
  variant: string;
  alias: string;
  min_stage: number;
  max_stage: number;
  length: number;
  diameter: number;
  maiden_flight: string;
  launch_mass?: number;
  leo_capacity: number;
  gto_capacity?: number;
  to_thrust?: number;
  apogee?: number;
  vehicle_range?: any;
  image_url: string;
  info_url: string;
  wiki_url: string;
}

 interface Launcher {
  id: number;
  url: string;
  details: string;
  flight_proven: boolean;
  serial_number: string;
  status: string;
  previous_flights: number;
  image_url: string;
}

 interface Location {
  name: string;
  abbrev: string;
  description: string;
}

 interface Type {
  name: string;
  abbrev: string;
  description: string;
}

 interface Landing {
  attempt: boolean;
  success?: any;
  description: string;
  location: Location;
  type: Type;
}

 interface LauncherStage {
  type: string;
  reused?: boolean;
  launcher_flight_number: number;
  launcher: Launcher;
  landing: Landing;
}

 interface Status2 {
  id: number;
  name: string;
}

 interface Type2 {
  id: number;
  name: string;
}

 interface Agency {
  id: number;
  url: string;
  name: string;
  type: string;
}

 interface Astronaut {
  id: number;
  url: string;
  name: string;
  status: Status2;
  type: Type2;
  agency: Agency;
  date_of_birth: string;
  date_of_death?: any;
  nationality: string;
  twitter: string;
  instagram: string;
  bio: string;
  profile_image: string;
  wiki: string;
}

 interface LaunchCrew {
  role: string;
  astronaut: Astronaut;
}

 interface Status3 {
  id: number;
  name: string;
}

 interface Type3 {
  id: number;
  name: string;
}

 interface Agency2 {
  id: number;
  url: string;
  name: string;
  type: string;
}

 interface Astronaut2 {
  id: number;
  url: string;
  name: string;
  status: Status3;
  type: Type3;
  agency: Agency2;
  date_of_birth: string;
  date_of_death?: any;
  nationality: string;
  twitter: string;
  instagram: string;
  bio: string;
  profile_image: string;
  wiki: string;
}

 interface LandingCrew {
  role: string;
  astronaut: Astronaut2;
}

 interface Status4 {
  id: number;
  name: string;
}

 interface Type4 {
  id: number;
  name: string;
}

 interface Agency3 {
  id: number;
  url: string;
  name: string;
  type: string;
}

 interface SpacecraftConfig {
  id: number;
  url: string;
  name: string;
  type: Type4;
  agency: Agency3;
  in_use: boolean;
  capability: string;
  history: string;
  details: string;
  maiden_flight: string;
  height: number;
  diameter: number;
  human_rated: boolean;
  crew_capacity: number;
  payload_capacity?: number;
  flight_life: string;
  image_url: string;
  nation_url?: any;
  wiki_link: string;
  info_link: string;
}

 interface Spacecraft {
  id: number;
  url: string;
  name: string;
  serial_number: string;
  status: Status4;
  description: string;
  spacecraft_config: SpacecraftConfig;
}

 interface SpacecraftStage {
  id: number;
  url: string;
  mission_end?: any;
  destination: string;
  launch_crew: LaunchCrew[];
  onboard_crew: any[];
  landing_crew: LandingCrew[];
  spacecraft: Spacecraft;
  docking_events: any[];
}

 interface Rocket {
  configuration: Configuration;
  launcher_stage: LauncherStage[];
  spacecraft_stage: SpacecraftStage;
}

 interface Mission {
  id: number;
  launch_library_id?: number;
  name: string;
  description: string;
  type: string;
  orbit: string;
  orbit_abbrev: string;
}

 interface Location2 {
  id: number;
  name: string;
  country_code: string;
}

 interface Pad {
  id: number;
  agency_id?: number;
  name: string;
  info_url?: any;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: Location2;
}

 interface Result {
  id: string;
  url: string;
  launch_library_id?: number;
  slug: string;
  name: string;
  img_url?: any;
  status: Status;
  net: Date;
  window_end: Date;
  window_start: Date;
  inhold: boolean;
  tbdtime: boolean;
  tbddate: boolean;
  probability?: number;
  holdreason: string;
  failreason: string;
  hashtag?: any;
  rocket: Rocket;
  mission: Mission;
  pad: Pad;
  infoURLs: string[];
  vidURLs: string[];
  image_url: string;
  infographic_url: string;
}

export interface UpcomingLaunches {
  count: number;
  next?: string;
  previous?: any;
  results: Result[];
}