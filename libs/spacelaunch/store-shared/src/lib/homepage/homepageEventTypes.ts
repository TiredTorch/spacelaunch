 interface Type {
  id: number;
  name: string;
}

 interface Status {
  id: number;
  name: string;
}

 interface Launch {
  id: string;
  url: string;
  launch_library_id?: number;
  slug: string;
  name: string;
  status: Status;
  net: Date;
  window_end: Date;
  window_start: Date;
  mission: string;
  mission_type: string;
  pad: string;
  location: string;
  landing: string;
  landing_success?: number;
  launcher: string;
  orbit: string;
  image: string;
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
  orbit: string;
  image_url: string;
}

 interface Expedition {
  id: number;
  url: string;
  name: string;
  start: Date;
  end: Date;
  spacestation: Spacestation;
}

 interface Status3 {
  id: number;
  name: string;
}

 interface Spacestation2 {
  id: number;
  url: string;
  name: string;
  status: Status3;
  founded: string;
  description: string;
  orbit: string;
  image_url: string;
}

 interface Result {
  id: number;
  url: string;
  name: string;
  type: Type;
  description: string;
  location: string;
  news_url?: any;
  video_url: string;
  feature_image: string;
  date: Date;
  launches: Launch[];
  expeditions: Expedition[];
  spacestations: Spacestation2[];
}

export interface UpcomingEvents {
  count: number;
  next?: string;
  previous?: any;
  results: Result[];
}