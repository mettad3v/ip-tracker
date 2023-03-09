interface ipifyAs {
    asn: number;
    domain: string;
    name: string;
    route: string;
    type: string;
}

interface ipifyLocation {
    country: string;
    region: string;
    timezone: string;
    city: string
}

interface ipifyResponse {
    as: ipifyAs;
    domains: Array<any>;
    ip: string;
    isp: string;
    location: ipifyLocation;

}

export default ipifyResponse;