export interface ApiEntry {
    API: string;
    Description: string;
    Auth: string;
    HTTPS: boolean;
    Cors: 'yes' | 'no' | 'unknown';
    Link: string;
    Category: string;
}

export interface ApiList {
    count: number;
    entries: ApiEntry[];
}
