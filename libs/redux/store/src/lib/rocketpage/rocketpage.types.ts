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

export interface Rocket {
    id: number;
    launch_library_id: number;
    url: string;
    name?: string;
    description: string;
    family?: string;
    full_name?: string;
    launch_service_provider: LaunchServiceProvider;
    variant?: string;
    alias?: string;
    min_stage?: number;
    max_stage?: number;
    length?: number;
    diameter?: number;
    maiden_flight: string;
    launch_mass?: number;
    leo_capacity: number;
    gto_capacity: number;
    to_thrust?: number;
    apogee?: number;
    vehicle_range?: any;
    image_url: string;
    info_url: string;
    wiki_url: string;
}