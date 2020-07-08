export const SET_ACTIVE_OPTION = 'SET_ACTIVE_OPTION'

export const MAPBOX_STYLE = 'mapbox://styles/stevepepple/cka8kdq0i1dvv1it9nj0l70xn/draft?optimize=true'

export const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3RldmVwZXBwbGUiLCJhIjoiTmd4T0wyNCJ9.1-jWg2J5XmFfnBAhyrORmw'

export const MAPBOX_STYLE_LIGHT = 'mapbox://styles/stevepepple/ck8unzpvf0z5j1itdntgz3lxp'

export const DATABASE = 'mongodb://stevepepple:Hotspot1@ds019101.mlab.com:19101/hotspots'

export const TIMEOUT = 8000;

export const FOURSQUARE_CLIENT_ID = 'MFA1H1MN4RRH33TLXVTMD22NI5YASHPM10WV0HFZQCKW0TA0'

export const FOURSQUARE_SECRET = '2UX3X1FMXUJHRJ3GII2QNBELJ3UEU2HOOQ3X4KG2LRWIMCN5'

export const CITY_MAPPER_SECRET = '6a401321dd665074dfbb9331b16dc02b'

// Token for connecting to GeoDjango API
export const SYSTEM_TOKEN = 'f486868802f2083ab6a75e2932717ca97a4d298c';

export const METERS_PER_MILE = 1609.34

export const PURPLE = '#811897'

export const TRUCATE_LENGTH = 18

export const HEATMAP_INTENSITY = 0.4

export const RECOMMENDATION_REASONS = {
    'events': 'This place is happening',
    'rating' : 'People like this spot',
    'vibe': 'Totally your vibe',
    'distance': 'Good bet near you',
}

export const zoom_levels = {
    0: 'World ~ 1:500 M',
    1: 'Continent ~ 1:250 M',
    2: 'Subcontinental ~ 1:150 M',
    3: 'Largest country ~ 1:70 M',
    4: 'Large country ~ 1:35 M',
    5: 'African country ~ 1:15 M',
    6: 'Large European country ~ 1:10 M',
    7: 'Large US state ~ 1:4 M',
    8: 'Small US state ~ 1:2 M',
    9: 'Large metro ~ 1:1 M',
    10: 'Small metro ~ 1:500 K',
    11: 'City ~ 1:250 K',
    12: 'Town ~ 1:150 K',
    13: 'Village ~ 1:70 K',
    14: 'Neighborhood ~ 1:35 K',
    15: 'Small road ~ 1:15 K',
    16: 'Street ~ 1:8 K',
    17: 'Block ~ 1:4 K',
    18: 'Buildings & trees ~ 1:2 K',
    19: 'Street detail ~ 1:1 K',
    20: 'Rooftop ~ 1:1 K'
}

export const main_categories = [
    // Going Out
    { key: 'all', value: 'all', text: 'Categories', label: { icon: 'building', circular: true }, categories: ['art', 'arts', 'books', 'comedy', 'community', 'culture', 'free', 'health', 'local', 'nightlife', 'recurs', 'romance', 'urban'] },
    // Eating
    { key: 'food', value: 'food', text: 'Eating', label: { icon: 'food', circular: true }, categories: ['food', 'restuarant'] },
    // Drinking
    { key: 'drinking', value: 'drinking', text: 'Drinking', label: { icon: 'glass martini', circular: true }, categories: ['drinking', 'drinks'] },
    // Music
    // Shopping
    { key: 'shopping', value: 'shopping', text: 'Shopping', label: { icon: 'shopping bag', circular: true }, categories: ['shopping'] },    
]

export const activty_categories = [
    { key: 'arts', value: 'arts', text: 'Arts', label: { icon: 'paint brush', circular: true }, categories: ['art', 'arts', 'craft', 'dance', 'immersive', 'performance'] },
    { key: 'comedy', value: 'comedy', text: 'Comedy & Storyteling', label: { icon: 'microphone', circular: true }, categories: ['community']},
    { key: 'community', value: 'community', text: 'Community', label: { icon: 'heart', circular: true }, categories: ['comedy', 'storytelling'] },
    { key: 'health', value: 'health', text: 'Immersive', label: { icon: 'medkit', circular: true }, categories: ['health'] },
    //{ key: 'immersive', value: 'immersive', text: 'Immersive', categories: ['immersive'] },
    { key: 'learning', value: 'learning', text: 'Learning', label: { icon: 'book', circular: true }, categories: ['learning', 'education'] },    
    { key: 'music', value: 'music', text: 'Music', label: { icon: 'music', circular: true }, categories: ['music'] },
    { key: 'outdoors', value: 'outdoors', text: 'Outdoors', label: { icon: 'tree', circular: true }, categories: ['outdoors'] },
    { key: 'games', value: 'games', text: 'Games & Sports', label: { icon: 'table tennis', circular: true }, categories: ['games', 'sports'] },
    { key: 'style', value: 'style', text: 'Style & Fashion', label: { icon: 'cut', circular: true }, categories: ['style', 'fashion'] }
    //{ key: 'spiritual', value: 'spiritual', text: 'Spiritual', categories: ['spirtual'] },
    //{ key: 'transit', value: 'transit', text: 'transit', categories: ['transit'] }   
]

// Groupings for All Place Categories
// TODO: Sync these with YAML categories from API
export const place_categories = [
    { key: 'any', value: 'any', text: 'All Activities', categories: ['Arts & Entertainment', 'Food', 'Bar'] },
    { key: 'cafe', value: 'cafe', text: 'Cafe'},
    { key: 'comedy', value: 'comedy', text: 'Comedy' },
    { key: 'community', value: 'community', text: 'Community' },
    { key: 'food', value: 'food', text: 'Eating', categories: ['Food'] },
    { key: 'drinking', value: 'drinking', text: 'Drinking', categories: ['Bar', 'Brewery', 'Lounge'] },
    { key: 'health', value: 'health', text: 'Health' },
    { key: 'shopping', value: 'shopping', text: 'Shopping', categories: ['Shop & Service'] },
    { key: 'art', value: 'art', text: 'Arts', categories: ['Arts & Entertainment'] },
    { key: 'music', value: 'music', text: 'Music', categories: ['Music Venue', 'Performing Arts Venue', 'Nightclub', 'Concert Hall', 'Music Festival', 'Music Schools', 'Music Stores', 'Country Dance Club', 'Dance Studio', 'Salsa Club', 'Samba School', 'Recording Studios', 'Bar'] },
    { key: 'comedy', value: 'comedy', text: 'Stories & Laughing', categories: ['Comedy Club', 'Bar', 'Nightclub'] },
    { key: 'games', value: 'games', text: 'Games & Sports', categories: ['Outdoors & Recreation'] },
    { key: 'learning', value: 'learning', text: 'Learning', categories: ['College & University'] },
    { key: 'immersive', value: 'immersive', text: 'Immersive', categories: ['Arts & Entertainment'] },
    { key: 'outdoors', value: 'outdoors', text: 'Outdoors', categories: ['Outdoors & Recreation', 'Zoo'] },
    { key: 'spirtual', value: 'spirtual', text: 'Spirtual', categories: ['spirtual'] },
    { key: 'san-francisco-bart', value: 'BART', text: 'BART', categories: ['transit'] },
    { key: 'hotel', value: 'hotel', text: 'hotel', categories: ['hotel'] }
]

export const all_categories = [
    {
        'id': '4d4b7104d754a06370d81259',
        'name': 'Arts & Entertainment',
        'key': 'arts',
        'categories': [
            {
                'id': '56aa371be4b08b9a8d5734db',
                'name': 'Amphitheater',
                'categories': []
            },
            {
                'id': '4fceea171983d5d06c3e9823',
                'name': 'Aquarium',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e1931735',
                'name': 'Arcade',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e2931735',
                'name': 'Art Gallery',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e4931735',
                'name': 'Bowling Alley',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d17c941735',
                'name': 'Casino',
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79e7',
                'name': 'Circus',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d18e941735',
                'key' : 'comedy',
                'name': 'Comedy Club',
                'categories': []
            },
            {
                'id': '5032792091d4c4b30a586d5c',
                'name': 'Concert Hall',
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79ef',
                'name': 'Country Dance Club',
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79e8',
                'name': 'Disc Golf',
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573532',
                'name': 'Exhibit',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f1931735',
                'name': 'General Entertainment',
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79ea',
                'name': 'Go Kart Track',
                'categories': []
            },
            {
                'id': '4deefb944765f83613cdba6e',
                'name': 'Historic Site',
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4bb',
                'name': 'Karaoke Box',
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79e6',
                'name': 'Laser Tag',
                'categories': []
            },
            {
                'id': '5642206c498e4bfca532186c',
                'name': 'Memorial Site',
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79eb',
                'name': 'Mini Golf',
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d17f941735',
                'name': 'Movie Theater',
                'categories': [
                    {
                        'id': '56aa371be4b08b9a8d5734de',
                        'name': 'Drive-in Theater',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d17e941735',
                        'name': 'Indie Movie Theater',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d180941735',
                        'name': 'Multiplex',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d181941735',
                'name': 'Museum',
                'categories': [
                    {
                        'id': '4bf58dd8d48988d18f941735',
                        'name': 'Art Museum',
                        'categories': []
                    },
                    {
                        'id': '559acbe0498e472f1a53fa23',
                        'name': 'Erotic Museum',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d190941735',
                        'name': 'History Museum',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d192941735',
                        'name': 'Planetarium',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d191941735',
                        'name': 'Science Museum',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1e5931735',
                'name': 'Music Venue',
                'key' : 'music',
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1e7931735',
                        'name': 'Jazz Club',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1e8931735',
                        'name': 'Piano Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1e9931735',
                        'name': 'Rock Club',
                        'categories': []
                    }
                ]
            },
            {
                'id': '5744ccdfe4b0c0459246b4b8',
                'name': 'Pachinko Parlor',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f2931735',
                'name': 'Performing Arts Venue',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d134941735',
                        'name': 'Dance Studio',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d135941735',
                        'name': 'Indie Theater',
                        'key': 'performance',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d136941735',
                        'name': 'Opera House',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d137941735',
                        'name': 'Theater',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1e3931735',
                'name': 'Pool Hall',
                
                'categories': []
            },
            {
                'id': '507c8c4091d498d9fc8c67a9',
                'name': 'Public Art',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b79ed',
                        'name': 'Outdoor Sculpture',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b79ee',
                        'name': 'Street Art',
                        'categories': []
                    }
                ]
            },
            {
                'id': '56aa371be4b08b9a8d573514',
                'name': 'Racecourse',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f4931735',
                'name': 'Racetrack',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79e9',
                'name': 'Roller Rink',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79ec',
                'name': 'Salsa Club',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734f9',
                'name': 'Samba School',      
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d184941735',
                'name': 'Stadium',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d18c941735',
                        'name': 'Baseball Stadium',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d18b941735',
                        'name': 'Basketball Stadium',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d18a941735',
                        'name': 'Cricket Ground',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d189941735',
                        'name': 'Football Stadium',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d185941735',
                        'name': 'Hockey Arena',
                        'pluralName': 'Hockey Arenas',
                        'shortName': 'Hockey',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d573556',
                        'name': 'Rugby Stadium',
                        'pluralName': 'Rugby Stadiums',
                        'shortName': 'Rugby',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d188941735',
                        'name': 'Soccer Stadium',
                        'pluralName': 'Soccer Stadiums',
                        'shortName': 'Soccer',
                        'categories': []
                    },
                    {
                        'id': '4e39a891bd410d7aed40cbc2',
                        'name': 'Tennis Stadium',
                        'pluralName': 'Tennis Stadiums',
                        'shortName': 'Tennis',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d187941735',
                        'name': 'Track Stadium',
                        'pluralName': 'Track Stadiums',
                        'shortName': 'Track',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d182941735',
                'name': 'Theme Park',
                'pluralName': 'Theme Parks',
                'shortName': 'Theme Park',
                
                'categories': [
                    {
                        'id': '5109983191d435c0d71c2bb1',
                        'name': 'Theme Park Ride / Attraction',
                        'pluralName': 'Theme Park Rides/Attractions',
                        'shortName': 'Theme Park',
                        'categories': []
                    }
                ]
            },
            {
                'id': '56aa371be4b08b9a8d573520',
                'name': 'Tour Provider',
                'pluralName': 'Tour Providers',
                'shortName': 'Tour Provider',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d193941735',
                'name': 'Water Park',
                'pluralName': 'Water Parks',
                'shortName': 'Water Park',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d17b941735',
                'name': 'Zoo',
                'pluralName': 'Zoos',
                'shortName': 'Zoo',
                
                'categories': [
                    {
                        'id': '58daa1558bbb0b01f18ec1fd',
                        'name': 'Zoo Exhibit',
                        'pluralName': 'Zoo Exhibits',
                        'shortName': 'Zoo Exhibit',
                        'categories': []
                    }
                ]
            }
        ]
    },
    {
        'id': '4d4b7105d754a06372d81259',
        'name': 'College & University',
        'key' : 'learning',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '4bf58dd8d48988d198941735',
                'name': 'College Academic Building',
                'pluralName': 'College Academic Buildings',
                'shortName': 'Academic Building',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d199941735',
                        'name': 'College Arts Building',
                        'pluralName': 'College Arts Buildings',
                        'shortName': 'Arts',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d19a941735',
                        'name': 'College Communications Building',
                        'pluralName': 'College Communications Buildings',
                        'shortName': 'Communications',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d19e941735',
                        'name': 'College Engineering Building',
                        'pluralName': 'College Engineering Buildings',
                        'shortName': 'Engineering',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d19d941735',
                        'name': 'College History Building',
                        'pluralName': 'College History Buildings',
                        'shortName': 'History',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d19c941735',
                        'name': 'College Math Building',
                        'pluralName': 'College Math Buildings',
                        'shortName': 'Math',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d19b941735',
                        'name': 'College Science Building',
                        'pluralName': 'College Science Buildings',
                        'shortName': 'Science',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d19f941735',
                        'name': 'College Technology Building',
                        'pluralName': 'College Technology Buildings',
                        'shortName': 'Technology',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d197941735',
                'name': 'College Administrative Building',
                'pluralName': 'College Administrative Buildings',
                'shortName': 'Administrative Building',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1af941735',
                'name': 'College Auditorium',
                'pluralName': 'College Auditoriums',
                'shortName': 'Auditorium',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1b1941735',
                'name': 'College Bookstore',
                'pluralName': 'College Bookstores',
                'shortName': 'College Bookstore',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a1941735',
                'name': 'College Cafeteria',
                'pluralName': 'College Cafeterias',
                'shortName': 'Cafeteria',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a0941735',
                'name': 'College Classroom',
                'pluralName': 'College Classrooms',
                'shortName': 'Classroom',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1b2941735',
                'name': 'College Gym',
                'pluralName': 'College Gyms',
                'shortName': 'Gym',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a5941735',
                'name': 'College Lab',
                'pluralName': 'College Labs',
                'shortName': 'Lab',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a7941735',
                'name': 'College Library',
                'pluralName': 'College Libraries',
                'shortName': 'Library',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1aa941735',
                'name': 'College Quad',
                'pluralName': 'College Quads',
                'shortName': 'Quad',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a9941735',
                'name': 'College Rec Center',
                'pluralName': 'College Rec Centers',
                'shortName': 'Rec Center',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a3941735',
                'name': 'College Residence Hall',
                'pluralName': 'College Residence Halls',
                'shortName': 'Residence Hall',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1b4941735',
                'name': 'College Stadium',
                'pluralName': 'College Stadiums',
                'shortName': 'Stadium',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1bb941735',
                        'name': 'College Baseball Diamond',
                        'pluralName': 'College Baseball Diamonds',
                        'shortName': 'Baseball',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1ba941735',
                        'name': 'College Basketball Court',
                        'pluralName': 'College Basketball Courts',
                        'shortName': 'Basketball',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1b9941735',
                        'name': 'College Cricket Pitch',
                        'pluralName': 'College Cricket Pitches',
                        'shortName': 'Cricket',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1b8941735',
                        'name': 'College Football Field',
                        'pluralName': 'College Football Fields',
                        'shortName': 'Football',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1b5941735',
                        'name': 'College Hockey Rink',
                        'pluralName': 'College Hockey Rinks',
                        'shortName': 'Hockey',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1b7941735',
                        'name': 'College Soccer Field',
                        'pluralName': 'College Soccer Fields',
                        'shortName': 'Soccer',
                        'categories': []
                    },
                    {
                        'id': '4e39a9cebd410d7aed40cbc4',
                        'name': 'College Tennis Court',
                        'pluralName': 'College Tennis Courts',
                        'shortName': 'Tennis Court',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1b6941735',
                        'name': 'College Track',
                        'pluralName': 'College Tracks',
                        'shortName': 'Track',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1ac941735',
                'name': 'College Theater',
                'pluralName': 'College Theaters',
                'shortName': 'Theater',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a2941735',
                'name': 'Community College',
                'pluralName': 'Community Colleges',
                'shortName': 'Community College',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1b0941735',
                'name': 'Fraternity House',
                'pluralName': 'Fraternity Houses',
                'shortName': 'Frat House',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a8941735',
                'name': 'General College & University',
                'pluralName': 'General Colleges & Universities',
                'shortName': 'Education',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1a6941735',
                'name': 'Law School',
                'pluralName': 'Law Schools',
                'shortName': 'Law School',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1b3941735',
                'name': 'Medical School',
                'pluralName': 'Medical Schools',
                'shortName': 'Medical School',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d141941735',
                'name': 'Sorority House',
                'pluralName': 'Sorority Houses',
                'shortName': 'Sorority House',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ab941735',
                'name': 'Student Center',
                'pluralName': 'Student Centers',
                'shortName': 'Student Center',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ad941735',
                'name': 'Trade School',
                'pluralName': 'Trade Schools',
                'shortName': 'Trade School',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ae941735',
                'name': 'University',
                'pluralName': 'Universities',
                'shortName': 'University',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06373d81259',
        'name': 'Event',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '52f2ab2ebcbc57f1066b8b3b',
                'name': 'Christmas Market',
                
                'categories': []
            },
            {
                'id': '5267e4d9e4b0ec79466e48c6',
                'name': 'Conference',
                
                'categories': []
            },
            {
                'id': '5267e4d9e4b0ec79466e48c9',
                'name': 'Convention',
                'pluralName': 'Conventions',
                'shortName': 'Convention',
                
                'categories': []
            },
            {
                'id': '5267e4d9e4b0ec79466e48c7',
                'name': 'Festival',
                'pluralName': 'Festivals',
                'shortName': 'Festival',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1fa',
                'name': 'Line / Queue',
                'pluralName': 'Lines / Queues',
                'shortName': 'Line / Queue',
                
                'categories': []
            },
            {
                'id': '5267e4d9e4b0ec79466e48d1',
                'name': 'Music Festival',
                'pluralName': 'Music Festivals',
                'shortName': 'Music Festival',
                
                'categories': []
            },
            {
                'id': '5267e4d9e4b0ec79466e48c8',
                'name': 'Other Event',
                'pluralName': 'Other Events',
                'shortName': 'Other Event',
                
                'categories': []
            },
            {
                'id': '52741d85e4b0d5d1e3c6a6d9',
                'name': 'Parade',
                'pluralName': 'Parades',
                'shortName': 'Parade',
                
                'categories': []
            },
            {
                'id': '5bae9231bedf3950379f89c5',
                'name': 'Sporting Event',
                'pluralName': 'Sporting Events',
                'shortName': 'Sporting Event',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b54',
                'name': 'Stoop Sale',
                'pluralName': 'Stoop Sales',
                'shortName': 'Stoop Sale',
                
                'categories': []
            },
            {
                'id': '5267e4d8e4b0ec79466e48c5',
                'name': 'Street Fair',
                'pluralName': 'Street Fairs',
                'shortName': 'Fair',
                
                'categories': []
            },
            {
                'id': '5bae9231bedf3950379f89c3',
                'name': 'Trade Fair',
                'pluralName': 'Trade Fairs',
                'shortName': 'Trade Fair',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06374d81259',
        'name': 'Food',
        'key' : 'food',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '503288ae91d4c4b30a586d67',
                'name': 'Afghan Restaurant',
                'pluralName': 'Afghan Restaurants',
                'shortName': 'Afghan',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c8941735',
                'name': 'African Restaurant',
                'pluralName': 'African Restaurants',
                'shortName': 'African',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d10a941735',
                        'name': 'Ethiopian Restaurant',
                        'pluralName': 'Ethiopian Restaurants',
                        'shortName': 'Ethiopian',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d14e941735',
                'name': 'American Restaurant',
                'pluralName': 'American Restaurants',
                'shortName': 'American',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d157941735',
                        'name': 'New American Restaurant',
                        'pluralName': 'New American Restaurants',
                        'shortName': 'New American',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d142941735',
                'name': 'Asian Restaurant',
                'pluralName': 'Asian Restaurants',
                'shortName': 'Asian',
                
                'categories': [
                    {
                        'id': '56aa371be4b08b9a8d573568',
                        'name': 'Burmese Restaurant',
                        'pluralName': 'Burmese Restaurants',
                        'shortName': 'Burmese',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a03',
                        'name': 'Cambodian Restaurant',
                        'pluralName': 'Cambodian Restaurants',
                        'shortName': 'Cambodian',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d145941735',
                        'name': 'Chinese Restaurant',
                        'pluralName': 'Chinese Restaurants',
                        'shortName': 'Chinese',
                        'categories': [
                            {
                                'id': '52af3a5e3cf9994f4e043bea',
                                'name': 'Anhui Restaurant',
                                'pluralName': 'Anhui Restaurants',
                                'shortName': 'Anhui',

                                'categories': []
                            },
                            {
                                'id': '52af3a723cf9994f4e043bec',
                                'name': 'Beijing Restaurant',
                                'pluralName': 'Beijing Restaurants',
                                'shortName': 'Beijing',

                                'categories': []
                            },
                            {
                                'id': '52af3a7c3cf9994f4e043bed',
                                'name': 'Cantonese Restaurant',
                                'pluralName': 'Cantonese Restaurants',
                                'shortName': 'Cantonese',

                                'categories': []
                            },
                            {
                                'id': '58daa1558bbb0b01f18ec1d3',
                                'name': 'Cha Chaan Teng',
                                'pluralName': 'Cha Chaan Tengs',
                                'shortName': 'Cha Chaan Teng',

                                'categories': []
                            },
                            {
                                'id': '52af3a673cf9994f4e043beb',
                                'name': 'Chinese Aristocrat Restaurant',
                                'pluralName': 'Chinese Aristocrat Restaurants',
                                'shortName': 'Aristocrat',

                                'categories': []
                            },
                            {
                                'id': '52af3a903cf9994f4e043bee',
                                'name': 'Chinese Breakfast Place',
                                'pluralName': 'Chinese Breakfast Places',
                                'shortName': 'Chinese Breakfast',
                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d1f5931735',
                                'name': 'Dim Sum Restaurant',
                                'pluralName': 'Dim Sum Restaurants',
                                'shortName': 'Dim Sum',
                                'categories': []
                            },
                            {
                                'id': '52af3a9f3cf9994f4e043bef',
                                'name': 'Dongbei Restaurant',
                                'pluralName': 'Dongbei Restaurants',
                                'shortName': 'Dongbei',
                                'categories': []
                            },
                            {
                                'id': '52af3aaa3cf9994f4e043bf0',
                                'name': 'Fujian Restaurant',
                                'pluralName': 'Fujian Restaurants',
                                'shortName': 'Fujian',

                                'categories': []
                            },
                            {
                                'id': '52af3ab53cf9994f4e043bf1',
                                'name': 'Guizhou Restaurant',
                                'pluralName': 'Guizhou Restaurants',
                                'shortName': 'Guizhou',

                                'categories': []
                            },
                            {
                                'id': '52af3abe3cf9994f4e043bf2',
                                'name': 'Hainan Restaurant',
                                'pluralName': 'Hainan Restaurants',
                                'shortName': 'Hainan',

                                'categories': []
                            },
                            {
                                'id': '52af3ac83cf9994f4e043bf3',
                                'name': 'Hakka Restaurant',
                                'pluralName': 'Hakka Restaurants',
                                'shortName': 'Hakka',

                                'categories': []
                            },
                            {
                                'id': '52af3ad23cf9994f4e043bf4',
                                'name': 'Henan Restaurant',
                                'pluralName': 'Henan Restaurants',
                                'shortName': 'Henan',

                                'categories': []
                            },
                            {
                                'id': '52af3add3cf9994f4e043bf5',
                                'name': 'Hong Kong Restaurant',
                                'pluralName': 'Hong Kong Restaurants',
                                'shortName': 'Hong Kong',

                                'categories': []
                            },
                            {
                                'id': '52af3af23cf9994f4e043bf7',
                                'name': 'Huaiyang Restaurant',
                                'pluralName': 'Huaiyang Restaurants',
                                'shortName': 'Huaiyang',

                                'categories': []
                            },
                            {
                                'id': '52af3ae63cf9994f4e043bf6',
                                'name': 'Hubei Restaurant',
                                'pluralName': 'Hubei Restaurants',
                                'shortName': 'Hubei',

                                'categories': []
                            },
                            {
                                'id': '52af3afc3cf9994f4e043bf8',
                                'name': 'Hunan Restaurant',
                                'pluralName': 'Hunan Restaurants',
                                'shortName': 'Hunan',

                                'categories': []
                            },
                            {
                                'id': '52af3b053cf9994f4e043bf9',
                                'name': 'Imperial Restaurant',
                                'pluralName': 'Imperial Restaurants',
                                'shortName': 'Imperial',

                                'categories': []
                            },
                            {
                                'id': '52af3b213cf9994f4e043bfa',
                                'name': 'Jiangsu Restaurant',
                                'pluralName': 'Jiangsu Restaurants',
                                'shortName': 'Jiangsu',

                                'categories': []
                            },
                            {
                                'id': '52af3b293cf9994f4e043bfb',
                                'name': 'Jiangxi Restaurant',
                                'pluralName': 'Jiangxi Restaurants',
                                'shortName': 'Jiangxi',

                                'categories': []
                            },
                            {
                                'id': '52af3b343cf9994f4e043bfc',
                                'name': 'Macanese Restaurant',
                                'pluralName': 'Macanese Restaurants',
                                'shortName': 'Macanese',

                                'categories': []
                            },
                            {
                                'id': '52af3b3b3cf9994f4e043bfd',
                                'name': 'Manchu Restaurant',
                                'pluralName': 'Manchu Restaurants',
                                'shortName': 'Manchu',

                                'categories': []
                            },
                            {
                                'id': '52af3b463cf9994f4e043bfe',
                                'name': 'Peking Duck Restaurant',
                                'pluralName': 'Peking Duck Restaurants',
                                'shortName': 'Peking Duck',

                                'categories': []
                            },
                            {
                                'id': '52af3b633cf9994f4e043c01',
                                'name': 'Shaanxi Restaurant',
                                'pluralName': 'Shaanxi Restaurants',
                                'shortName': 'Shaanxi',

                                'categories': []
                            },
                            {
                                'id': '52af3b513cf9994f4e043bff',
                                'name': 'Shandong Restaurant',
                                'pluralName': 'Shandong Restaurants',
                                'shortName': 'Shandong',

                                'categories': []
                            },
                            {
                                'id': '52af3b593cf9994f4e043c00',
                                'name': 'Shanghai Restaurant',
                                'pluralName': 'Shanghai Restaurants',
                                'shortName': 'Shanghai',

                                'categories': []
                            },
                            {
                                'id': '52af3b6e3cf9994f4e043c02',
                                'name': 'Shanxi Restaurant',
                                'pluralName': 'Shanxi Restaurants',
                                'shortName': 'Shanxi',

                                'categories': []
                            },
                            {
                                'id': '52af3b773cf9994f4e043c03',
                                'name': 'Szechuan Restaurant',
                                'pluralName': 'Szechuan Restaurants',
                                'shortName': 'Szechuan',

                                'categories': []
                            },
                            {
                                'id': '52af3b813cf9994f4e043c04',
                                'name': 'Taiwanese Restaurant',
                                'pluralName': 'Taiwanese Restaurants',
                                'shortName': 'Taiwanese',

                                'categories': []
                            },
                            {
                                'id': '52af3b893cf9994f4e043c05',
                                'name': 'Tianjin Restaurant',
                                'pluralName': 'Tianjin Restaurants',
                                'shortName': 'Tianjin',

                                'categories': []
                            },
                            {
                                'id': '52af3b913cf9994f4e043c06',
                                'name': 'Xinjiang Restaurant',
                                'pluralName': 'Xinjiang Restaurants',
                                'shortName': 'Xinjiang',

                                'categories': []
                            },
                            {
                                'id': '52af3b9a3cf9994f4e043c07',
                                'name': 'Yunnan Restaurant',
                                'pluralName': 'Yunnan Restaurants',
                                'shortName': 'Yunnan',

                                'categories': []
                            },
                            {
                                'id': '52af3ba23cf9994f4e043c08',
                                'name': 'Zhejiang Restaurant',
                                'pluralName': 'Zhejiang Restaurants',
                                'shortName': 'Zhejiang',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '4eb1bd1c3b7b55596b4a748f',
                        'name': 'Filipino Restaurant',
                        'pluralName': 'Filipino Restaurants',
                        'shortName': 'Filipino',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b79fb',
                        'name': 'Himalayan Restaurant',
                        'pluralName': 'Himalayan Restaurants',
                        'shortName': 'Himalayan',
                        'categories': []
                    },
                    {
                        'id': '52af0bd33cf9994f4e043bdd',
                        'name': 'Hotpot Restaurant',
                        'pluralName': 'Hotpot Restaurants',
                        'shortName': 'Hotpot',
                        'categories': []
                    },
                    {
                        'id': '4deefc054765f83613cdba6f',
                        'name': 'Indonesian Restaurant',
                        'pluralName': 'Indonesian Restaurants',
                        'shortName': 'Indonesian',
                        'categories': [
                            {
                                'id': '52960eda3cf9994f4e043ac9',
                                'name': 'Acehnese Restaurant',
                                'pluralName': 'Acehnese Restaurants',
                                'shortName': 'Acehnese',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043acb',
                                'name': 'Balinese Restaurant',
                                'pluralName': 'Balinese Restaurants',
                                'shortName': 'Balinese',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043aca',
                                'name': 'Betawinese Restaurant',
                                'pluralName': 'Betawinese Restaurants',
                                'shortName': 'Betawinese',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043acc',
                                'name': 'Indonesian Meatball Place',
                                'pluralName': 'Indonesian Meatball Places',
                                'shortName': 'Indonesian Meatball Place',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043ac7',
                                'name': 'Javanese Restaurant',
                                'pluralName': 'Javanese Restaurants',
                                'shortName': 'Javanese',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043ac8',
                                'name': 'Manadonese Restaurant',
                                'pluralName': 'Manadonese Restaurants',
                                'shortName': 'Manadonese',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043ac5',
                                'name': 'Padangnese Restaurant',
                                'pluralName': 'Padangnese Restaurants',
                                'shortName': 'Padangnese',

                                'categories': []
                            },
                            {
                                'id': '52960eda3cf9994f4e043ac6',
                                'name': 'Sundanese Restaurant',
                                'pluralName': 'Sundanese Restaurants',
                                'shortName': 'Sundanese',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '4bf58dd8d48988d111941735',
                        'name': 'Japanese Restaurant',
                        'pluralName': 'Japanese Restaurants',
                        'shortName': 'Japanese',
                        'categories': [
                            {
                                'id': '55a59bace4b013909087cb0c',
                                'name': 'Donburi Restaurant',
                                'pluralName': 'Donburi Restaurants',
                                'shortName': 'Donburi',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb30',
                                'name': 'Japanese Curry Restaurant',
                                'pluralName': 'Japanese Curry Restaurants',
                                'shortName': 'Japanese Curry',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb21',
                                'name': 'Kaiseki Restaurant',
                                'pluralName': 'Kaiseki Restaurants',
                                'shortName': 'Kaiseki',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb06',
                                'name': 'Kushikatsu Restaurant',
                                'pluralName': 'Kushikatsu Restaurants',
                                'shortName': 'Kushikatsu',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb1b',
                                'name': 'Monjayaki Restaurant',
                                'pluralName': 'Monjayaki Restaurants',
                                'shortName': 'Monjayaki',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb1e',
                                'name': 'Nabe Restaurant',
                                'pluralName': 'Nabe Restaurants',
                                'shortName': 'Nabe',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb18',
                                'name': 'Okonomiyaki Restaurant',
                                'pluralName': 'Okonomiyaki Restaurants',
                                'shortName': 'Okonomiyaki',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb24',
                                'name': 'Ramen Restaurant',
                                'pluralName': 'Ramen Restaurants',
                                'shortName': 'Ramen',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb15',
                                'name': 'Shabu-Shabu Restaurant',
                                'pluralName': 'Shabu-Shabu Restaurants',
                                'shortName': 'Shabu-Shabu',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb27',
                                'name': 'Soba Restaurant',
                                'pluralName': 'Soba Restaurants',
                                'shortName': 'Soba',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb12',
                                'name': 'Sukiyaki Restaurant',
                                'pluralName': 'Sukiyaki Restaurants',
                                'shortName': 'Sukiyaki',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d1d2941735',
                                'name': 'Sushi Restaurant',
                                'pluralName': 'Sushi Restaurants',
                                'shortName': 'Sushi',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb2d',
                                'name': 'Takoyaki Place',
                                'pluralName': 'Takoyaki Places',
                                'shortName': 'Takoyaki',

                                'categories': []
                            },
                            {
                                'id': '55a59a31e4b013909087cb00',
                                'name': 'Tempura Restaurant',
                                'pluralName': 'Tempura Restaurants',
                                'shortName': 'Tempura',

                                'categories': []
                            },
                            {
                                'id': '55a59af1e4b013909087cb03',
                                'name': 'Tonkatsu Restaurant',
                                'pluralName': 'Tonkatsu Restaurants',
                                'shortName': 'Tonkatsu',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb2a',
                                'name': 'Udon Restaurant',
                                'pluralName': 'Udon Restaurants',
                                'shortName': 'Udon',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb0f',
                                'name': 'Unagi Restaurant',
                                'pluralName': 'Unagi Restaurants',
                                'shortName': 'Unagi',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb33',
                                'name': 'Wagashi Place',
                                'pluralName': 'Wagashi Places',
                                'shortName': 'Wagashi',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb09',
                                'name': 'Yakitori Restaurant',
                                'pluralName': 'Yakitori Restaurants',
                                'shortName': 'Yakitori',

                                'categories': []
                            },
                            {
                                'id': '55a59bace4b013909087cb36',
                                'name': 'Yoshoku Restaurant',
                                'pluralName': 'Yoshoku Restaurants',
                                'shortName': 'Yoshoku',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '4bf58dd8d48988d113941735',
                        'name': 'Korean Restaurant',
                        'pluralName': 'Korean Restaurants',
                        'shortName': 'Korean',
                        'categories': [
                            {
                                'id': '56aa371be4b08b9a8d5734e4',
                                'name': 'Bossam/Jokbal Restaurant',
                                'pluralName': 'Bossam/Jokbal Restaurants',
                                'shortName': 'Bossam/Jokbal',

                                'categories': []
                            },
                            {
                                'id': '56aa371be4b08b9a8d5734f0',
                                'name': 'Bunsik Restaurant',
                                'pluralName': 'Bunsik Restaurants',
                                'shortName': 'Bunsik',

                                'categories': []
                            },
                            {
                                'id': '56aa371be4b08b9a8d5734e7',
                                'name': 'Gukbap Restaurant',
                                'pluralName': 'Gukbap Restaurants',
                                'shortName': 'Gukbap',

                                'categories': []
                            },
                            {
                                'id': '56aa371be4b08b9a8d5734ed',
                                'name': 'Janguh Restaurant',
                                'pluralName': 'Janguh Restaurants',
                                'shortName': 'Janguh',

                                'categories': []
                            },
                            {
                                'id': '56aa371be4b08b9a8d5734ea',
                                'name': 'Samgyetang Restaurant',
                                'pluralName': 'Samgyetang Restaurants',
                                'shortName': 'Samgyetang',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '4bf58dd8d48988d156941735',
                        'name': 'Malay Restaurant',
                        'pluralName': 'Malay Restaurants',
                        'shortName': 'Malay',
                        'categories': [
                            {
                                'id': '5ae9595eb77c77002c2f9f26',
                                'name': 'Mamak Restaurant',
                                'pluralName': 'Mamak Restaurants',
                                'shortName': 'Malay',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '4eb1d5724b900d56c88a45fe',
                        'name': 'Mongolian Restaurant',
                        'pluralName': 'Mongolian Restaurants',
                        'shortName': 'Mongolian',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1d1941735',
                        'name': 'Noodle House',
                        'pluralName': 'Noodle Houses',
                        'shortName': 'Noodles',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d57350e',
                        'name': 'Satay Restaurant',
                        'pluralName': 'Satay Restaurants',
                        'shortName': 'Satay',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d149941735',
                        'name': 'Thai Restaurant',
                        'pluralName': 'Thai Restaurants',
                        'shortName': 'Thai',
                        'categories': [
                            {
                                'id': '56aa371be4b08b9a8d573502',
                                'name': 'Som Tum Restaurant',
                                'pluralName': 'Som Tum Restaurants',
                                'shortName': 'Som Tum',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '52af39fb3cf9994f4e043be9',
                        'name': 'Tibetan Restaurant',
                        'pluralName': 'Tibetan Restaurants',
                        'shortName': 'Tibetan',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d14a941735',
                        'name': 'Vietnamese Restaurant',
                        'pluralName': 'Vietnamese Restaurants',
                        'shortName': 'Vietnamese',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d169941735',
                'name': 'Australian Restaurant',
                'pluralName': 'Australian Restaurants',
                'shortName': 'Australian',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a01',
                'name': 'Austrian Restaurant',
                'pluralName': 'Austrian Restaurants',
                'shortName': 'Austrian',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1df931735',
                'name': 'BBQ Joint',
                'pluralName': 'BBQ Joints',
                'shortName': 'BBQ',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d179941735',
                'name': 'Bagel Shop',
                'pluralName': 'Bagel Shops',
                'shortName': 'Bagels',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d16a941735',
                'name': 'Bakery',
                'pluralName': 'Bakeries',
                'shortName': 'Bakery',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a02',
                'name': 'Belgian Restaurant',
                'pluralName': 'Belgian Restaurants',
                'shortName': 'Belgian',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79f1',
                'name': 'Bistro',
                'pluralName': 'Bistros',
                'shortName': 'Bistro',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d143941735',
                'name': 'Breakfast Spot',
                'pluralName': 'Breakfast Spots',
                'shortName': 'Breakfast',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a0c',
                'name': 'Bubble Tea Shop',
                'pluralName': 'Bubble Tea Shops',
                'shortName': 'Bubble Tea',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79f4',
                'name': 'Buffet',
                'pluralName': 'Buffets',
                'shortName': 'Buffet',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d16c941735',
                'name': 'Burger Joint',
                'pluralName': 'Burger Joints',
                'shortName': 'Burgers',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d128941735',
                'name': 'Cafeteria',
                'pluralName': 'Cafeterias',
                'shortName': 'Cafeteria',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d16d941735',
                'name': 'Café',
                'pluralName': 'Cafés',
                'shortName': 'Café',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d17a941735',
                'name': 'Cajun / Creole Restaurant',
                'pluralName': 'Cajun / Creole Restaurants',
                'shortName': 'Cajun / Creole',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d144941735',
                'name': 'Caribbean Restaurant',
                'pluralName': 'Caribbean Restaurants',
                'shortName': 'Caribbean',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d154941735',
                        'name': 'Cuban Restaurant',
                        'pluralName': 'Cuban Restaurants',
                        'shortName': 'Cuban',
                        'categories': []
                    }
                ]
            },
            {
                'id': '5293a7d53cf9994f4e043a45',
                'name': 'Caucasian Restaurant',
                'pluralName': 'Caucasian Restaurants',
                'shortName': 'Caucasian',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e0931735',
                'name': 'Coffee Shop',
                'pluralName': 'Coffee Shops',
                'shortName': 'Coffee Shop',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a00',
                'name': 'Comfort Food Restaurant',
                'pluralName': 'Comfort Food Restaurants',
                'shortName': 'Comfort Food',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79f2',
                'name': 'Creperie',
                'pluralName': 'Creperies',
                'shortName': 'Creperie',
                
                'categories': []
            },
            {
                'id': '52f2ae52bcbc57f1066b8b81',
                'name': 'Czech Restaurant',
                'pluralName': 'Czech Restaurants',
                'shortName': 'Czech',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d146941735',
                'name': 'Deli / Bodega',
                'pluralName': 'Delis / Bodegas',
                'shortName': 'Deli / Bodega',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1d0941735',
                'name': 'Dessert Shop',
                'pluralName': 'Dessert Shops',
                'shortName': 'Desserts',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1bc941735',
                        'name': 'Cupcake Shop',
                        'pluralName': 'Cupcake Shops',
                        'shortName': 'Cupcakes',
                        'categories': []
                    },
                    {
                        'id': '512e7cae91d4cbb4e5efe0af',
                        'name': 'Frozen Yogurt Shop',
                        'pluralName': 'Frozen Yogurt Shops',
                        'shortName': 'Yogurt',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1c9941735',
                        'name': 'Ice Cream Shop',
                        'pluralName': 'Ice Cream Shops',
                        'shortName': 'Ice Cream',
                        'categories': []
                    },
                    {
                        'id': '5744ccdfe4b0c0459246b4e2',
                        'name': 'Pastry Shop',
                        'pluralName': 'Pastry Shops',
                        'shortName': 'Pastry',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a0a',
                        'name': 'Pie Shop',
                        'pluralName': 'Pie Shops',
                        'shortName': 'Pie Shop',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d147941735',
                'name': 'Diner',
                'pluralName': 'Diners',
                'shortName': 'Diner',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d148941735',
                'name': 'Donut Shop',
                'pluralName': 'Donut Shops',
                'shortName': 'Donuts',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d108941735',
                'name': 'Dumpling Restaurant',
                'pluralName': 'Dumpling Restaurants',
                'shortName': 'Dumplings',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4d0',
                'name': 'Dutch Restaurant',
                'pluralName': 'Dutch Restaurants',
                'shortName': 'Dutch',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d109941735',
                'name': 'Eastern European Restaurant',
                'pluralName': 'Eastern European Restaurants',
                'shortName': 'Eastern European',
                
                'categories': [
                    {
                        'id': '52e928d0bcbc57f1066b7e97',
                        'name': 'Belarusian Restaurant',
                        'pluralName': 'Belarusian Restaurants',
                        'shortName': 'Belarusian',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1ee',
                        'name': 'Bosnian Restaurant',
                        'pluralName': 'Bosnian Restaurants',
                        'shortName': 'Bosnian',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734f3',
                        'name': 'Bulgarian Restaurant',
                        'pluralName': 'Bulgarian Restaurants',
                        'shortName': 'Bulgarian',
                        'categories': []
                    },
                    {
                        'id': '52960bac3cf9994f4e043ac4',
                        'name': 'Romanian Restaurant',
                        'pluralName': 'Romanian Restaurants',
                        'shortName': 'Romanian',
                        'categories': []
                    },
                    {
                        'id': '52e928d0bcbc57f1066b7e98',
                        'name': 'Tatar Restaurant',
                        'pluralName': 'Tatar Restaurants',
                        'shortName': 'Tatar',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a05',
                'name': 'English Restaurant',
                'pluralName': 'English Restaurants',
                'shortName': 'English',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10b941735',
                'name': 'Falafel Restaurant',
                'pluralName': 'Falafel Restaurants',
                'shortName': 'Falafel',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d16e941735',
                'name': 'Fast Food Restaurant',
                'pluralName': 'Fast Food Restaurants',
                'shortName': 'Fast Food',
                
                'categories': []
            },
            {
                'id': '4edd64a0c7ddd24ca188df1a',
                'name': 'Fish & Chips Shop',
                'pluralName': 'Fish & Chips Shops',
                'shortName': 'Fish & Chips',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a09',
                'name': 'Fondue Restaurant',
                'pluralName': 'Fondue Restaurants',
                'shortName': 'Fondue',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d120951735',
                'name': 'Food Court',
                'pluralName': 'Food Courts',
                'shortName': 'Food Court',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d57350b',
                'name': 'Food Stand',
                'pluralName': 'Food Stands',
                'shortName': 'Food Stand',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1cb941735',
                'name': 'Food Truck',
                'pluralName': 'Food Trucks',
                'shortName': 'Food Truck',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10c941735',
                'name': 'French Restaurant',
                'pluralName': 'French Restaurants',
                'shortName': 'French',
                
                'categories': [
                    {
                        'id': '57558b36e4b065ecebd306b6',
                        'name': 'Alsatian Restaurant',
                        'pluralName': 'Alsatian Restaurants',
                        'shortName': 'Alsatian',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306b8',
                        'name': 'Auvergne Restaurant',
                        'pluralName': 'Auvergne Restaurants',
                        'shortName': 'Auvergne',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306bc',
                        'name': 'Basque Restaurant',
                        'pluralName': 'Basque Restaurants',
                        'shortName': 'Basque',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306b0',
                        'name': 'Brasserie',
                        'pluralName': 'Brasseries',
                        'shortName': 'Brasserie',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306c5',
                        'name': 'Breton Restaurant',
                        'pluralName': 'Breton Restaurants',
                        'shortName': 'Breton',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306c0',
                        'name': 'Burgundian Restaurant',
                        'pluralName': 'Burgundian Restaurants',
                        'shortName': 'Burgundian',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306cb',
                        'name': 'Catalan Restaurant',
                        'pluralName': 'Catalan Restaurants',
                        'shortName': 'Catalan',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306ce',
                        'name': 'Ch\'ti Restaurant',
                        'pluralName': 'Ch\'ti Restaurants',
                        'shortName': 'Ch\'ti',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306d1',
                        'name': 'Corsican Restaurant',
                        'pluralName': 'Corsican Restaurants',
                        'shortName': 'Corsican',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306b4',
                        'name': 'Estaminet',
                        'pluralName': 'Estaminets',
                        'shortName': 'Estaminet',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306b2',
                        'name': 'Labour Canteen',
                        'pluralName': 'Labour Canteens',
                        'shortName': 'Labour Canteen',
                        'categories': []
                    },
                    {
                        'id': '57558b35e4b065ecebd306ad',
                        'name': 'Lyonese Bouchon',
                        'pluralName': 'Lyonese Bouchons',
                        'shortName': 'Bouchon',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306d4',
                        'name': 'Norman Restaurant',
                        'pluralName': 'Norman Restaurants',
                        'shortName': 'Norman',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306d7',
                        'name': 'Provençal Restaurant',
                        'pluralName': 'Provençal Restaurants',
                        'shortName': 'Provençal',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306da',
                        'name': 'Savoyard Restaurant',
                        'pluralName': 'Savoyard Restaurants',
                        'shortName': 'Savoyard',
                        'categories': []
                    },
                    {
                        'id': '57558b36e4b065ecebd306ba',
                        'name': 'Southwestern French Restaurant',
                        'pluralName': 'Southwestern French Restaurants',
                        'shortName': 'Southwestern French',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4d4ae6fc7a7b7dea34424761',
                'name': 'Fried Chicken Joint',
                'pluralName': 'Fried Chicken Joints',
                'shortName': 'Fried Chicken',
                
                'categories': []
            },
            {
                'id': '55d25775498e9f6a0816a37a',
                'name': 'Friterie',
                'pluralName': 'Friteries',
                'shortName': 'Friterie',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d155941735',
                'name': 'Gastropub',
                'pluralName': 'Gastropubs',
                'shortName': 'Gastropub',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10d941735',
                'name': 'German Restaurant',
                'pluralName': 'German Restaurants',
                'shortName': 'German',
                
                'categories': [
                    {
                        'id': '56aa371ce4b08b9a8d573583',
                        'name': 'Apple Wine Pub',
                        'pluralName': 'Apple Wine Pubs',
                        'shortName': 'Apple Wine',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d573572',
                        'name': 'Bavarian Restaurant',
                        'pluralName': 'Bavarian Restaurants',
                        'shortName': 'Bavarian',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d57358e',
                        'name': 'Bratwurst Joint',
                        'pluralName': 'Bratwurst Joints',
                        'shortName': 'Bratwurst',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d57358b',
                        'name': 'Currywurst Joint',
                        'pluralName': 'Currywurst Joints',
                        'shortName': 'Currywurst',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d573574',
                        'name': 'Franconian Restaurant',
                        'pluralName': 'Franconian Restaurants',
                        'shortName': 'Franconian',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d573592',
                        'name': 'German Pop-Up Restaurant',
                        'pluralName': 'German Pop-Up Restaurants',
                        'shortName': 'German Pop-Up Restaurant',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d573578',
                        'name': 'Palatine Restaurant',
                        'pluralName': 'Palatine Restaurants',
                        'shortName': 'Palatine',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d57357b',
                        'name': 'Rhenisch Restaurant',
                        'pluralName': 'Rhenisch Restaurants',
                        'shortName': 'Rhenisch',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d573587',
                        'name': 'Schnitzel Restaurant',
                        'pluralName': 'Schnitzel Restaurants',
                        'shortName': 'Schnitzel',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d57357f',
                        'name': 'Silesian Restaurant',
                        'pluralName': 'Silesian Restaurants',
                        'shortName': 'Silesian',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d573576',
                        'name': 'Swabian Restaurant',
                        'pluralName': 'Swabian Restaurants',
                        'shortName': 'Swabian',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4c2cd86ed066bed06c3c5209',
                'name': 'Gluten-free Restaurant',
                'pluralName': 'Gluten-free Restaurants',
                'shortName': 'Gluten-free',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10e941735',
                'name': 'Greek Restaurant',
                'pluralName': 'Greek Restaurants',
                'shortName': 'Greek',
                
                'categories': [
                    {
                        'id': '53d6c1b0e4b02351e88a83e8',
                        'name': 'Bougatsa Shop',
                        'pluralName': 'Bougatsa Shops',
                        'shortName': 'Bougatsa Shops',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83e2',
                        'name': 'Cretan Restaurant',
                        'pluralName': 'Cretan Restaurants',
                        'shortName': 'Cretan Restaurants',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83d8',
                        'name': 'Fish Taverna',
                        'pluralName': 'Fish Tavernas',
                        'shortName': 'Fish Tavernas',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83d6',
                        'name': 'Grilled Meat Restaurant',
                        'pluralName': 'Grilled Meat Restaurants',
                        'shortName': 'Grilled Meat Restaurants',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83e6',
                        'name': 'Kafenio',
                        'pluralName': 'Kafenia',
                        'shortName': 'Kafenia',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83e4',
                        'name': 'Magirio',
                        'pluralName': 'Magirio',
                        'shortName': 'Magirio',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83da',
                        'name': 'Meze Restaurant',
                        'pluralName': 'Meze Restaurants',
                        'shortName': 'Meze Restaurants',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83d4',
                        'name': 'Modern Greek Restaurant',
                        'pluralName': 'Modern Greek Restaurants',
                        'shortName': 'Modern Greek Restaurants',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83dc',
                        'name': 'Ouzeri',
                        'pluralName': 'Ouzeries',
                        'shortName': 'Ouzeries',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83e0',
                        'name': 'Patsa Restaurant',
                        'pluralName': 'Patsa Restaurants',
                        'shortName': 'Patsa Restaurants',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b79f3',
                        'name': 'Souvlaki Shop',
                        'pluralName': 'Souvlaki Shops',
                        'shortName': 'Souvlaki',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83d2',
                        'name': 'Taverna',
                        'pluralName': 'Tavernas',
                        'shortName': 'Tavernas',
                        'categories': []
                    },
                    {
                        'id': '53d6c1b0e4b02351e88a83de',
                        'name': 'Tsipouro Restaurant',
                        'pluralName': 'Tsipouro Restaurants',
                        'shortName': 'Tsipouro Restaurants',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b79ff',
                'name': 'Halal Restaurant',
                'pluralName': 'Halal Restaurants',
                'shortName': 'Halal',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79fe',
                'name': 'Hawaiian Restaurant',
                'pluralName': 'Hawaiian Restaurants',
                'shortName': 'Hawaiian',
                
                'categories': [
                    {
                        'id': '5bae9231bedf3950379f89d4',
                        'name': 'Poke Place',
                        'pluralName': 'Poke Places',
                        'shortName': 'Poke Place',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d16f941735',
                'name': 'Hot Dog Joint',
                'pluralName': 'Hot Dog Joints',
                'shortName': 'Hot Dogs',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79fa',
                'name': 'Hungarian Restaurant',
                'pluralName': 'Hungarian Restaurants',
                'shortName': 'Hungarian',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10f941735',
                'name': 'Indian Restaurant',
                'pluralName': 'Indian Restaurants',
                'shortName': 'Indian',
                
                'categories': [
                    {
                        'id': '54135bf5e4b08f3d2429dfe5',
                        'name': 'Andhra Restaurant',
                        'pluralName': 'Andhra Restaurants',
                        'shortName': 'Andhra',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff3',
                        'name': 'Awadhi Restaurant',
                        'pluralName': 'Awadhi Restaurants',
                        'shortName': 'Awadhi',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff5',
                        'name': 'Bengali Restaurant',
                        'pluralName': 'Bengali Restaurants',
                        'shortName': 'Bengali',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe2',
                        'name': 'Chaat Place',
                        'pluralName': 'Chaat Places',
                        'shortName': 'Chaat',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff2',
                        'name': 'Chettinad Restaurant',
                        'pluralName': 'Chettinad Restaurants',
                        'shortName': 'Chettinad',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe1',
                        'name': 'Dhaba',
                        'pluralName': 'Dhabas',
                        'shortName': 'Dhaba',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe3',
                        'name': 'Dosa Place',
                        'pluralName': 'Dosa Places',
                        'shortName': 'Dosa',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe8',
                        'name': 'Goan Restaurant',
                        'pluralName': 'Goan Restaurants',
                        'shortName': 'Goan',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe9',
                        'name': 'Gujarati Restaurant',
                        'pluralName': 'Gujarati Restaurants',
                        'shortName': 'Gujarati',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe6',
                        'name': 'Hyderabadi Restaurant',
                        'pluralName': 'Hyderabadi Restaurants',
                        'shortName': 'Hyderabadi',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfdf',
                        'name': 'Indian Chinese Restaurant',
                        'pluralName': 'Indian Chinese Restaurants',
                        'shortName': 'Indian Chinese',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe4',
                        'name': 'Indian Sweet Shop',
                        'pluralName': 'Indian Sweet Shops',
                        'shortName': 'Indian Sweets',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe7',
                        'name': 'Irani Cafe',
                        'pluralName': 'Irani Cafes',
                        'shortName': 'Irani',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfea',
                        'name': 'Jain Restaurant',
                        'pluralName': 'Jain Restaurants',
                        'shortName': 'Jain',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfeb',
                        'name': 'Karnataka Restaurant',
                        'pluralName': 'Karnataka Restaurants',
                        'shortName': 'Karnataka',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfed',
                        'name': 'Kerala Restaurant',
                        'pluralName': 'Kerala Restaurants',
                        'shortName': 'Kerala',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfee',
                        'name': 'Maharashtrian Restaurant',
                        'pluralName': 'Maharashtrian Restaurants',
                        'shortName': 'Maharashtrian',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff4',
                        'name': 'Mughlai Restaurant',
                        'pluralName': 'Mughlai Restaurants',
                        'shortName': 'Mughlai',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfe0',
                        'name': 'Multicuisine Indian Restaurant',
                        'pluralName': 'Multicuisine Indian Restaurants',
                        'shortName': 'Multicuisine Indian',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfdd',
                        'name': 'North Indian Restaurant',
                        'pluralName': 'North Indian Restaurants',
                        'shortName': 'North Indian',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff6',
                        'name': 'Northeast Indian Restaurant',
                        'pluralName': 'Northeast Indian Restaurants',
                        'shortName': 'Northeast Indian',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfef',
                        'name': 'Parsi Restaurant',
                        'pluralName': 'Parsi Restaurants',
                        'shortName': 'Parsi',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff0',
                        'name': 'Punjabi Restaurant',
                        'pluralName': 'Punjabi Restaurants',
                        'shortName': 'Punjabi',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dff1',
                        'name': 'Rajasthani Restaurant',
                        'pluralName': 'Rajasthani Restaurants',
                        'shortName': 'Rajasthani',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfde',
                        'name': 'South Indian Restaurant',
                        'pluralName': 'South Indian Restaurants',
                        'shortName': 'South Indian',
                        'categories': []
                    },
                    {
                        'id': '54135bf5e4b08f3d2429dfec',
                        'name': 'Udupi Restaurant',
                        'pluralName': 'Udupi Restaurants',
                        'shortName': 'Udupi',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a06',
                'name': 'Irish Pub',
                'pluralName': 'Irish Pubs',
                'shortName': 'Irish',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d110941735',
                'name': 'Italian Restaurant',
                'pluralName': 'Italian Restaurants',
                'shortName': 'Italian',
                
                'categories': [
                    {
                        'id': '55a5a1ebe4b013909087cbb6',
                        'name': 'Abruzzo Restaurant',
                        'pluralName': 'Abruzzo Restaurants',
                        'shortName': 'Abruzzo',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb7c',
                        'name': 'Agriturismo',
                        'pluralName': 'Agriturismos',
                        'shortName': 'Agriturismo',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cba7',
                        'name': 'Aosta Restaurant',
                        'pluralName': 'Aosta Restaurants',
                        'shortName': 'Aosta',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cba1',
                        'name': 'Basilicata Restaurant',
                        'pluralName': 'Basilicata Restaurants',
                        'shortName': 'Basilicata',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cba4',
                        'name': 'Calabria Restaurant',
                        'pluralName': 'Calabria Restaurants',
                        'shortName': 'Calabria',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb95',
                        'name': 'Campanian Restaurant',
                        'pluralName': 'Campanian Restaurants',
                        'shortName': 'Campanian',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb89',
                        'name': 'Emilia Restaurant',
                        'pluralName': 'Emilia Restaurants',
                        'shortName': 'Emilia',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb9b',
                        'name': 'Friuli Restaurant',
                        'pluralName': 'Friuli Restaurants',
                        'shortName': 'Friuli',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb98',
                        'name': 'Ligurian Restaurant',
                        'pluralName': 'Ligurian Restaurants',
                        'shortName': 'Ligurian',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbbf',
                        'name': 'Lombard Restaurant',
                        'pluralName': 'Lombard Restaurants',
                        'shortName': 'Lombard',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb79',
                        'name': 'Malga',
                        'pluralName': 'Malgas',
                        'shortName': 'Malga',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbb0',
                        'name': 'Marche Restaurant',
                        'pluralName': 'Marche Restaurants',
                        'shortName': 'Marche',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbb3',
                        'name': 'Molise Restaurant',
                        'pluralName': 'Molise Restaurants',
                        'shortName': 'Molise',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb74',
                        'name': 'Piadineria',
                        'pluralName': 'Piadinerias',
                        'shortName': 'Piadineria',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbaa',
                        'name': 'Piedmontese Restaurant',
                        'pluralName': 'Piedmontese Restaurants',
                        'shortName': 'Piedmontese',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb83',
                        'name': 'Puglia Restaurant',
                        'pluralName': 'Puglia Restaurants',
                        'shortName': 'Puglia',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb8c',
                        'name': 'Romagna Restaurant',
                        'pluralName': 'Romagna Restaurants',
                        'shortName': 'Romagna',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb92',
                        'name': 'Roman Restaurant',
                        'pluralName': 'Roman Restaurants',
                        'shortName': 'Roman',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb8f',
                        'name': 'Sardinian Restaurant',
                        'pluralName': 'Sardinian Restaurants',
                        'shortName': 'Sardinian',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb86',
                        'name': 'Sicilian Restaurant',
                        'pluralName': 'Sicilian Restaurants',
                        'shortName': 'Sicilian',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbb9',
                        'name': 'South Tyrolean Restaurant',
                        'pluralName': 'South Tyrolean Restaurants',
                        'shortName': 'South Tyrolean',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb7f',
                        'name': 'Trattoria/Osteria',
                        'pluralName': 'Trattorias/Osterias',
                        'shortName': 'Trattoria/Osteria',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbbc',
                        'name': 'Trentino Restaurant',
                        'pluralName': 'Trentino Restaurants',
                        'shortName': 'Trentino',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cb9e',
                        'name': 'Tuscan Restaurant',
                        'pluralName': 'Tuscan Restaurants',
                        'shortName': 'Tuscan',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbc2',
                        'name': 'Umbrian Restaurant',
                        'pluralName': 'Umbrian Restaurants',
                        'shortName': 'Umbrian',
                        'categories': []
                    },
                    {
                        'id': '55a5a1ebe4b013909087cbad',
                        'name': 'Veneto Restaurant',
                        'pluralName': 'Veneto Restaurants',
                        'shortName': 'Veneto',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b79fd',
                'name': 'Jewish Restaurant',
                'pluralName': 'Jewish Restaurants',
                'shortName': 'Jewish',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b79fc',
                        'name': 'Kosher Restaurant',
                        'pluralName': 'Kosher Restaurants',
                        'shortName': 'Kosher',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d112941735',
                'name': 'Juice Bar',
                'pluralName': 'Juice Bars',
                'shortName': 'Juice Bar',
                
                'categories': []
            },
            {
                'id': '5283c7b4e4b094cb91ec88d7',
                'name': 'Kebab Restaurant',
                'pluralName': 'Kebab Restaurants',
                'shortName': 'Kebab',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1be941735',
                'name': 'Latin American Restaurant',
                'pluralName': 'Latin American Restaurants',
                'shortName': 'Latin American',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d152941735',
                        'name': 'Arepa Restaurant',
                        'pluralName': 'Arepa Restaurants',
                        'shortName': 'Arepas',
                        'categories': []
                    },
                    {
                        'id': '52939a8c3cf9994f4e043a35',
                        'name': 'Empanada Restaurant',
                        'pluralName': 'Empanada Restaurants',
                        'shortName': 'Empanada',
                        'categories': []
                    },
                    {
                        'id': '5745c7ac498e5d0483112fdb',
                        'name': 'Salvadoran Restaurant',
                        'pluralName': 'Salvadoran Restaurants',
                        'shortName': 'Salvadoran',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1cd941735',
                        'name': 'South American Restaurant',
                        'pluralName': 'South American Restaurants',
                        'shortName': 'South American',
                        'categories': [
                            {
                                'id': '4bf58dd8d48988d107941735',
                                'name': 'Argentinian Restaurant',
                                'pluralName': 'Argentinian Restaurants',
                                'shortName': 'Argentinian',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d16b941735',
                                'name': 'Brazilian Restaurant',
                                'pluralName': 'Brazilian Restaurants',
                                'shortName': 'Brazilian',

                                'categories': [
                                    {
                                        'id': '5294c7523cf9994f4e043a62',
                                        'name': 'Acai House',
                                        'pluralName': 'Acai Houses',
                                        'shortName': 'Acai',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939ae13cf9994f4e043a3b',
                                        'name': 'Baiano Restaurant',
                                        'pluralName': 'Baiano Restaurants',
                                        'shortName': 'Baiano',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939a9e3cf9994f4e043a36',
                                        'name': 'Central Brazilian Restaurant',
                                        'pluralName': 'Central Brazilian Restaurants',
                                        'shortName': 'Central Brazilian',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939a643cf9994f4e043a33',
                                        'name': 'Churrascaria',
                                        'pluralName': 'Churrascarias',
                                        'shortName': 'Churrascaria',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '5294c55c3cf9994f4e043a61',
                                        'name': 'Empada House',
                                        'pluralName': 'Empada Houses',
                                        'shortName': 'Empadas',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939af83cf9994f4e043a3d',
                                        'name': 'Goiano Restaurant',
                                        'pluralName': 'Goiano Restaurants',
                                        'shortName': 'Goiano',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939aed3cf9994f4e043a3c',
                                        'name': 'Mineiro Restaurant',
                                        'pluralName': 'Mineiro Restaurants',
                                        'shortName': 'Mineiro',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939aae3cf9994f4e043a37',
                                        'name': 'Northeastern Brazilian Restaurant',
                                        'pluralName': 'Northeastern Brazilian Restaurants',
                                        'shortName': 'Northeastern Brazilian',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939ab93cf9994f4e043a38',
                                        'name': 'Northern Brazilian Restaurant',
                                        'pluralName': 'Northern Brazilian Restaurants',
                                        'shortName': 'Northern Brazilian',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '5294cbda3cf9994f4e043a63',
                                        'name': 'Pastelaria',
                                        'pluralName': 'Pastelarias',
                                        'shortName': 'Pastelaria',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939ac53cf9994f4e043a39',
                                        'name': 'Southeastern Brazilian Restaurant',
                                        'pluralName': 'Southeastern Brazilian Restaurants',
                                        'shortName': 'Southeastern Brazilian',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939ad03cf9994f4e043a3a',
                                        'name': 'Southern Brazilian Restaurant',
                                        'pluralName': 'Southern Brazilian Restaurants',
                                        'shortName': 'Southern Brazilian',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    },
                                    {
                                        'id': '52939a7d3cf9994f4e043a34',
                                        'name': 'Tapiocaria',
                                        'pluralName': 'Tapiocarias',
                                        'shortName': 'Tapiocaria',
                                        'icon': {
                                            
                                            

                                        },
                                        'categories': []
                                    }
                                ]
                            },
                            {
                                'id': '58daa1558bbb0b01f18ec1f4',
                                'name': 'Colombian Restaurant',
                                'pluralName': 'Colombian Restaurants',
                                'shortName': 'Colombian',

                                'categories': []
                            },
                            {
                                'id': '4eb1bfa43b7b52c0e1adc2e8',
                                'name': 'Peruvian Restaurant',
                                'pluralName': 'Peruvian Restaurants',
                                'shortName': 'Peruvian',

                                'categories': []
                            },
                            {
                                'id': '56aa371be4b08b9a8d573558',
                                'name': 'Venezuelan Restaurant',
                                'pluralName': 'Venezuelan Restaurants',
                                'shortName': 'Venezuelan',

                                'categories': []
                            }
                        ]
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1bf941735',
                'name': 'Mac & Cheese Joint',
                'pluralName': 'Mac & Cheese Joints',
                'shortName': 'Mac & Cheese',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c0941735',
                'name': 'Mediterranean Restaurant',
                'pluralName': 'Mediterranean Restaurants',
                'shortName': 'Mediterranean',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1c3941735',
                        'name': 'Moroccan Restaurant',
                        'pluralName': 'Moroccan Restaurants',
                        'shortName': 'Moroccan',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1c1941735',
                'name': 'Mexican Restaurant',
                'pluralName': 'Mexican Restaurants',
                'shortName': 'Mexican',
                
                'categories': [
                    {
                        'id': '58daa1558bbb0b01f18ec1d9',
                        'name': 'Botanero',
                        'pluralName': 'Botaneros',
                        'shortName': 'Botanero',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d153941735',
                        'name': 'Burrito Place',
                        'pluralName': 'Burrito Places',
                        'shortName': 'Burritos',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d151941735',
                        'name': 'Taco Place',
                        'pluralName': 'Taco Places',
                        'shortName': 'Tacos',
                        'categories': []
                    },
                    {
                        'id': '56aa371ae4b08b9a8d5734ba',
                        'name': 'Tex-Mex Restaurant',
                        'pluralName': 'Tex-Mex Restaurants',
                        'shortName': 'Tex-Mex',
                        'categories': []
                    },
                    {
                        'id': '5744ccdfe4b0c0459246b4d3',
                        'name': 'Yucatecan Restaurant',
                        'pluralName': 'Yucatecan Restaurants',
                        'shortName': 'Yucatecan',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d115941735',
                'name': 'Middle Eastern Restaurant',
                'pluralName': 'Middle Eastern Restaurants',
                'shortName': 'Middle Eastern',
                
                'categories': [
                    {
                        'id': '5bae9231bedf3950379f89e1',
                        'name': 'Egyptian Restaurant',
                        'pluralName': 'Egyptian Restaurants',
                        'shortName': 'Egyptian Restaurant',
                        'categories': []
                    },
                    {
                        'id': '5bae9231bedf3950379f89e7',
                        'name': 'Iraqi Restaurant',
                        'pluralName': 'Iraqi Restaurants',
                        'shortName': 'Iraqi Restaurant',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d573529',
                        'name': 'Israeli Restaurant',
                        'pluralName': 'Israeli Restaurants',
                        'shortName': 'Israeli',
                        'categories': []
                    },
                    {
                        'id': '5744ccdfe4b0c0459246b4ca',
                        'name': 'Kurdish Restaurant',
                        'pluralName': 'Kurdish Restaurants',
                        'shortName': 'Kurdish',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1cd',
                        'name': 'Lebanese Restaurant',
                        'pluralName': 'Lebanese Restaurants',
                        'shortName': 'Lebanese',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b79f7',
                        'name': 'Persian Restaurant',
                        'pluralName': 'Persian Restaurants',
                        'shortName': 'Persian',
                        'categories': [
                            {
                                'id': '58daa1558bbb0b01f18ec1bc',
                                'name': 'Ash and Haleem Place',
                                'pluralName': 'Ash and Haleem Places',
                                'shortName': 'Ash and Haleem',

                                'categories': []
                            },
                            {
                                'id': '58daa1558bbb0b01f18ec1c0',
                                'name': 'Dizi Place',
                                'pluralName': 'Dizi Places',
                                'shortName': 'Dizi',

                                'categories': []
                            },
                            {
                                'id': '58daa1558bbb0b01f18ec1c4',
                                'name': 'Gilaki Restaurant',
                                'pluralName': 'Gilaki Restaurants',
                                'shortName': 'Gilaki',

                                'categories': []
                            },
                            {
                                'id': '58daa1558bbb0b01f18ec1c7',
                                'name': 'Jegaraki',
                                'pluralName': 'Jegarakis',
                                'shortName': 'Jegaraki',

                                'categories': []
                            },
                            {
                                'id': '5744ccdfe4b0c0459246b4a8',
                                'name': 'Tabbakhi',
                                'pluralName': 'Tabbakhis',
                                'shortName': 'Tabbakhi',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '5bae9231bedf3950379f89e4',
                        'name': 'Shawarma Place',
                        'pluralName': 'Shawarma Places',
                        'shortName': 'Shawarma Place',
                        'categories': []
                    },
                    {
                        'id': '5bae9231bedf3950379f89da',
                        'name': 'Syrian Restaurant',
                        'pluralName': 'Syrian Restaurants',
                        'shortName': 'Syrian Restaurant',
                        'categories': []
                    },
                    {
                        'id': '5bae9231bedf3950379f89ea',
                        'name': 'Yemeni Restaurant',
                        'pluralName': 'Yemeni Restaurants',
                        'shortName': 'Yemeni Restaurant',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b79f9',
                'name': 'Modern European Restaurant',
                'pluralName': 'Modern European Restaurants',
                'shortName': 'Modern European',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c2941735',
                'name': 'Molecular Gastronomy Restaurant',
                'pluralName': 'Molecular Gastronomy Restaurants',
                'shortName': 'Molecular Gastronomy',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b79f8',
                'name': 'Pakistani Restaurant',
                'pluralName': 'Pakistani Restaurants',
                'shortName': 'Pakistani',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573508',
                'name': 'Pet Café',
                'pluralName': 'Pet Cafés',
                'shortName': 'Pet Café',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ca941735',
                'name': 'Pizza Place',
                'pluralName': 'Pizza Places',
                'shortName': 'Pizza',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a04',
                'name': 'Polish Restaurant',
                'pluralName': 'Polish Restaurants',
                'shortName': 'Polish',
                
                'categories': []
            },
            {
                'id': '4def73e84765ae376e57713a',
                'name': 'Portuguese Restaurant',
                'pluralName': 'Portuguese Restaurants',
                'shortName': 'Portuguese',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734c7',
                'name': 'Poutine Place',
                'pluralName': 'Poutine Places',
                'shortName': 'Poutine Place',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c4941735',
                'name': 'Restaurant',
                'pluralName': 'Restaurants',
                'shortName': 'Restaurant',
                
                'categories': []
            },
            {
                'id': '5293a7563cf9994f4e043a44',
                'name': 'Russian Restaurant',
                'pluralName': 'Russian Restaurants',
                'shortName': 'Russian',
                
                'categories': [
                    {
                        'id': '52e928d0bcbc57f1066b7e9d',
                        'name': 'Blini House',
                        'pluralName': 'Blini Houses',
                        'shortName': 'Blini',
                        'categories': []
                    },
                    {
                        'id': '52e928d0bcbc57f1066b7e9c',
                        'name': 'Pelmeni House',
                        'pluralName': 'Pelmeni Houses',
                        'shortName': 'Pelmeni',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1bd941735',
                'name': 'Salad Place',
                'pluralName': 'Salad Places',
                'shortName': 'Salad',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c5941735',
                'name': 'Sandwich Place',
                'pluralName': 'Sandwich Places',
                'shortName': 'Sandwiches',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c6941735',
                'name': 'Scandinavian Restaurant',
                'pluralName': 'Scandinavian Restaurants',
                'shortName': 'Scandinavian',
                
                'categories': []
            },
            {
                'id': '5744ccdde4b0c0459246b4a3',
                'name': 'Scottish Restaurant',
                'pluralName': 'Scottish Restaurants',
                'shortName': 'Scottish',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ce941735',
                'name': 'Seafood Restaurant',
                'pluralName': 'Seafood Restaurants',
                'shortName': 'Seafood',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d57355a',
                'name': 'Slovak Restaurant',
                'pluralName': 'Slovak Restaurants',
                'shortName': 'Slovak',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1c7941735',
                'name': 'Snack Place',
                'pluralName': 'Snack Places',
                'shortName': 'Snacks',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1dd931735',
                'name': 'Soup Place',
                'pluralName': 'Soup Places',
                'shortName': 'Soup',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d14f941735',
                'name': 'Southern / Soul Food Restaurant',
                'pluralName': 'Southern / Soul Food Restaurants',
                'shortName': 'Southern / Soul',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d150941735',
                'name': 'Spanish Restaurant',
                'pluralName': 'Spanish Restaurants',
                'shortName': 'Spanish',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d14d941735',
                        'name': 'Paella Restaurant',
                        'pluralName': 'Paella Restaurants',
                        'shortName': 'Paella',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1db931735',
                        'name': 'Tapas Restaurant',
                        'pluralName': 'Tapas Restaurants',
                        'shortName': 'Tapas',
                        'categories': []
                    }
                ]
            },
            {
                'id': '5413605de4b0ae91d18581a9',
                'name': 'Sri Lankan Restaurant',
                'pluralName': 'Sri Lankan Restaurants',
                'shortName': 'Sri Lankan',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1cc941735',
                'name': 'Steakhouse',
                'pluralName': 'Steakhouses',
                'shortName': 'Steakhouse',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d158941735',
                'name': 'Swiss Restaurant',
                'pluralName': 'Swiss Restaurants',
                'shortName': 'Swiss',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1dc931735',
                'name': 'Tea Room',
                'pluralName': 'Tea Rooms',
                'shortName': 'Tea Room',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573538',
                'name': 'Theme Restaurant',
                'pluralName': 'Theme Restaurants',
                'shortName': 'Theme Restaurant',
                
                'categories': []
            },
            {
                'id': '57558b36e4b065ecebd306dd',
                'name': 'Truck Stop',
                'pluralName': 'Truck Stops',
                'shortName': 'Truck Stop',
                
                'categories': []
            },
            {
                'id': '4f04af1f2fb6e1c99f3db0bb',
                'name': 'Turkish Restaurant',
                'pluralName': 'Turkish Restaurants',
                'shortName': 'Turkish',
                
                'categories': [
                    {
                        'id': '530faca9bcbc57f1066bc2f3',
                        'name': 'Borek Place',
                        'pluralName': 'Borek Places',
                        'shortName': 'Borek',
                        'categories': []
                    },
                    {
                        'id': '530faca9bcbc57f1066bc2f4',
                        'name': 'Cigkofte Place',
                        'pluralName': 'Cigkofte Places',
                        'shortName': 'Cigkofte',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88d8',
                        'name': 'Doner Restaurant',
                        'pluralName': 'Doner Restaurants',
                        'shortName': 'Doner',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88d9',
                        'name': 'Gozleme Place',
                        'pluralName': 'Gozleme Places',
                        'shortName': 'Gozleme',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88db',
                        'name': 'Kofte Place',
                        'pluralName': 'Kofte Places',
                        'shortName': 'Kofte',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88d6',
                        'name': 'Kokoreç Restaurant',
                        'pluralName': 'Kokoreç Restaurants',
                        'shortName': 'Kokoreç',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d573535',
                        'name': 'Kumpir Restaurant',
                        'pluralName': 'Kumpir Restaurants',
                        'shortName': 'Kumpir',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734bd',
                        'name': 'Kumru Restaurant',
                        'pluralName': 'Kumru Restaurants',
                        'shortName': 'Kumru',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88d5',
                        'name': 'Manti Place',
                        'pluralName': 'Manti Places',
                        'shortName': 'Manti',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88da',
                        'name': 'Meyhane',
                        'pluralName': 'Meyhanes',
                        'shortName': 'Meyhane',
                        'categories': []
                    },
                    {
                        'id': '530faca9bcbc57f1066bc2f2',
                        'name': 'Pide Place',
                        'pluralName': 'Pide Places',
                        'shortName': 'Pide',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1df',
                        'name': 'Pilavcı',
                        'pluralName': 'Pilavcıs',
                        'shortName': 'Pilavcı',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1dc',
                        'name': 'Söğüş Place',
                        'pluralName': 'Söğüş Places',
                        'shortName': 'Söğüş',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734bf',
                        'name': 'Tantuni Restaurant',
                        'pluralName': 'Tantuni Restaurants',
                        'shortName': 'Tantuni',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734c1',
                        'name': 'Turkish Coffeehouse',
                        'pluralName': 'Turkish Coffeehouses',
                        'shortName': 'Turkish Coffeehouse',
                        'categories': []
                    },
                    {
                        'id': '5283c7b4e4b094cb91ec88d4',
                        'name': 'Turkish Home Cooking Restaurant',
                        'pluralName': 'Turkish Home Cooking Restaurants',
                        'shortName': 'Turkish Home Cooking',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1e2',
                        'name': 'Çöp Şiş Place',
                        'pluralName': 'Çöp Şiş Places',
                        'shortName': 'Çöp Şiş',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e928d0bcbc57f1066b7e96',
                'name': 'Ukrainian Restaurant',
                'pluralName': 'Ukrainian Restaurants',
                'shortName': 'Ukrainian',
                
                'categories': [
                    {
                        'id': '52e928d0bcbc57f1066b7e9a',
                        'name': 'Varenyky restaurant',
                        'pluralName': 'Varenyky Restaurants',
                        'shortName': 'Varenyky',
                        'categories': []
                    },
                    {
                        'id': '52e928d0bcbc57f1066b7e9b',
                        'name': 'West-Ukrainian Restaurant',
                        'pluralName': 'West-Ukrainian Restaurants',
                        'shortName': 'West-Ukrainian',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d1d3941735',
                'name': 'Vegetarian / Vegan Restaurant',
                'pluralName': 'Vegetarian / Vegan Restaurants',
                'shortName': 'Vegetarian / Vegan',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d14c941735',
                'name': 'Wings Joint',
                'pluralName': 'Wings Joints',
                'shortName': 'Wings',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06376d81259',
        'name': 'Nightlife Spot',
        'key' : 'nightlife',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '4bf58dd8d48988d116941735',
                'name': 'Bar',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b7a0d',
                        'name': 'Beach Bar',
                        'pluralName': 'Beach Bars',
                        'shortName': 'Beach Bar',
                        'categories': []
                    },
                    {
                        'id': '56aa371ce4b08b9a8d57356c',
                        'name': 'Beer Bar',
                        'pluralName': 'Beer Bars',
                        'shortName': 'Beer Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d117941735',
                        'name': 'Beer Garden',
                        'pluralName': 'Beer Gardens',
                        'shortName': 'Beer Garden',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a0e',
                        'name': 'Champagne Bar',
                        'pluralName': 'Champagne Bars',
                        'shortName': 'Champagne Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d11e941735',
                        'name': 'Cocktail Bar',
                        'pluralName': 'Cocktail Bars',
                        'shortName': 'Cocktail',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d118941735',
                        'name': 'Dive Bar',
                        'pluralName': 'Dive Bars',
                        'shortName': 'Dive Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1d8941735',
                        'name': 'Gay Bar',
                        'pluralName': 'Gay Bars',
                        'shortName': 'Gay Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d119941735',
                        'name': 'Hookah Bar',
                        'pluralName': 'Hookah Bars',
                        'shortName': 'Hookah Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1d5941735',
                        'name': 'Hotel Bar',
                        'pluralName': 'Hotel Bars',
                        'shortName': 'Hotel Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d120941735',
                        'name': 'Karaoke Bar',
                        'pluralName': 'Karaoke Bars',
                        'shortName': 'Karaoke',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d11b941735',
                        'name': 'Pub',
                        'pluralName': 'Pubs',
                        'shortName': 'Pub',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d11c941735',
                        'name': 'Sake Bar',
                        'pluralName': 'Sake Bars',
                        'shortName': 'Sake Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1d4941735',
                        'name': 'Speakeasy',
                        'pluralName': 'Speakeasies',
                        'shortName': 'Speakeasy',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d11d941735',
                        'name': 'Sports Bar',
                        'pluralName': 'Sports Bars',
                        'shortName': 'Sports Bar',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d57354d',
                        'name': 'Tiki Bar',
                        'pluralName': 'Tiki Bars',
                        'shortName': 'Tiki Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d122941735',
                        'name': 'Whisky Bar',
                        'pluralName': 'Whisky Bars',
                        'shortName': 'Whisky Bar',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d123941735',
                        'name': 'Wine Bar',
                        'pluralName': 'Wine Bars',
                        'shortName': 'Wine Bar',
                        'categories': []
                    }
                ]
            },
            {
                'id': '50327c8591d4c4b30a586d5d',
                'name': 'Brewery',
                'pluralName': 'Breweries',
                'shortName': 'Brewery',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d121941735',
                'name': 'Lounge',
                'pluralName': 'Lounges',
                'shortName': 'Lounge',
                
                'categories': []
            },
            {
                'id': '53e510b7498ebcb1801b55d4',
                'name': 'Night Market',
                'pluralName': 'Night Markets',
                'shortName': 'Night Market',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d11f941735',
                'name': 'Nightclub',
                'pluralName': 'Nightclubs',
                'shortName': 'Nightclub',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d11a941735',
                'name': 'Other Nightlife',
                'pluralName': 'Other Nightlife',
                'shortName': 'Nightlife',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1d6941735',
                'name': 'Strip Club',
                'pluralName': 'Strip Clubs',
                'shortName': 'Strip Club',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06377d81259',
        'name': 'Outdoors & Recreation',
        'key': 'outdoors',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '4f4528bc4b90abdf24c9de85',
                'name': 'Athletics & Sports',
                'pluralName': 'Athletics & Sports',
                'shortName': 'Athletics & Sports',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b7a2b',
                        'name': 'Badminton Court',
                        'pluralName': 'Badminton Courts',
                        'shortName': 'Badminton Court',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1e8941735',
                        'name': 'Baseball Field',
                        'pluralName': 'Baseball Fields',
                        'shortName': 'Baseball Field',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1e1941735',
                        'name': 'Basketball Court',
                        'pluralName': 'Basketball Courts',
                        'shortName': 'Basketball Court',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a2f',
                        'name': 'Bowling Green',
                        'pluralName': 'Bowling Greens',
                        'shortName': 'Bowling Green',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d57351a',
                        'name': 'Curling Ice',
                        'pluralName': 'Curling Ices',
                        'shortName': 'Curling Ice',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1e6941735',
                        'name': 'Golf Course',
                        'pluralName': 'Golf Courses',
                        'shortName': 'Golf Course',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1b0',
                        'name': 'Golf Driving Range',
                        'pluralName': 'Golf Driving Ranges',
                        'shortName': 'Golf Driving Range',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d175941735',
                        'name': 'Gym / Fitness Center',
                        'pluralName': 'Gyms or Fitness Centers',
                        'shortName': 'Gym / Fitness',
                        'categories': [
                            {
                                'id': '52f2ab2ebcbc57f1066b8b47',
                                'name': 'Boxing Gym',
                                'pluralName': 'Boxing Gyms',
                                'shortName': 'Boxing Gym',

                                'categories': []
                            },
                            {
                                'id': '503289d391d4c4b30a586d6a',
                                'name': 'Climbing Gym',
                                'pluralName': 'Climbing Gyms',
                                'shortName': 'Climbing Gym',

                                'categories': []
                            },
                            {
                                'id': '52f2ab2ebcbc57f1066b8b49',
                                'name': 'Cycle Studio',
                                'pluralName': 'Cycle Studios',
                                'shortName': 'Cycle Studio',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d105941735',
                                'name': 'Gym Pool',
                                'pluralName': 'Gym Pools',
                                'shortName': 'Pool',

                                'categories': []
                            },
                            {
                                'id': '52f2ab2ebcbc57f1066b8b48',
                                'name': 'Gymnastics Gym',
                                'pluralName': 'Gymnastics Gyms',
                                'shortName': 'Gymnastics Gym',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d176941735',
                                'name': 'Gym',
                                'pluralName': 'Gyms',
                                'shortName': 'Gym',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d101941735',
                                'name': 'Martial Arts Dojo',
                                'pluralName': 'Martial Arts Dojos',
                                'shortName': 'Martial Arts',

                                'categories': []
                            },
                            {
                                'id': '58daa1558bbb0b01f18ec203',
                                'name': 'Outdoor Gym',
                                'pluralName': 'Outdoor Gyms',
                                'shortName': 'Outdoor Gym',

                                'categories': []
                            },
                            {
                                'id': '5744ccdfe4b0c0459246b4b2',
                                'name': 'Pilates Studio',
                                'pluralName': 'Pilates Studios',
                                'shortName': 'Pilates Studio',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d106941735',
                                'name': 'Track',
                                'pluralName': 'Tracks',
                                'shortName': 'Track',

                                'categories': []
                            },
                            {
                                'id': '590a0744340a5803fd8508c3',
                                'name': 'Weight Loss Center',
                                'pluralName': 'Weight Loss Centers',
                                'shortName': 'Weight Loss Center',

                                'categories': []
                            },
                            {
                                'id': '4bf58dd8d48988d102941735',
                                'name': 'Yoga Studio',
                                'pluralName': 'Yoga Studios',
                                'shortName': 'Yoga Studio',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '4f452cd44b9081a197eba860',
                        'name': 'Hockey Field',
                        'pluralName': 'Hockey Fields',
                        'shortName': 'Hockey Field',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d57352c',
                        'name': 'Hockey Rink',
                        'pluralName': 'Hockey Rinks',
                        'shortName': 'Hockey Rink',
                        'categories': []
                    },
                    {
                        'id': '5032829591d4c4b30a586d5e',
                        'name': 'Paintball Field',
                        'pluralName': 'Paintball Fields',
                        'shortName': 'Paintball Field',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a2c',
                        'name': 'Rugby Pitch',
                        'pluralName': 'Rugby Pitches',
                        'shortName': 'Pitch',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d167941735',
                        'name': 'Skate Park',
                        'pluralName': 'Skate Parks',
                        'shortName': 'Skate Park',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d168941735',
                        'name': 'Skating Rink',
                        'pluralName': 'Skating Rinks',
                        'shortName': 'Skating Rink',
                        'categories': []
                    },
                    {
                        'id': '4cce455aebf7b749d5e191f5',
                        'name': 'Soccer Field',
                        'pluralName': 'Soccer Fields',
                        'shortName': 'Soccer Field',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a2e',
                        'name': 'Sports Club',
                        'pluralName': 'Sports Clubs',
                        'shortName': 'Sports Club',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a2d',
                        'name': 'Squash Court',
                        'pluralName': 'Squash Courts',
                        'shortName': 'Squash Court',
                        'categories': []
                    },
                    {
                        'id': '4e39a956bd410d7aed40cbc3',
                        'name': 'Tennis Court',
                        'pluralName': 'Tennis Courts',
                        'shortName': 'Tennis Court',
                        'categories': []
                    },
                    {
                        'id': '4eb1bf013b7b6f98df247e07',
                        'name': 'Volleyball Court',
                        'pluralName': 'Volleyball Courts',
                        'shortName': 'Volleyball Court',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a28',
                'name': 'Bathing Area',
                'pluralName': 'Bathing Areas',
                'shortName': 'Bathing Area',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573544',
                'name': 'Bay',
                'pluralName': 'Bays',
                'shortName': 'Bay',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e2941735',
                'name': 'Beach',
                'pluralName': 'Beaches',
                'shortName': 'Beach',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b7a30',
                        'name': 'Nudist Beach',
                        'pluralName': 'Nudist Beaches',
                        'shortName': 'Nudist Beach',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1e3941735',
                        'name': 'Surf Spot',
                        'pluralName': 'Surf Spots',
                        'shortName': 'Surf Spot',
                        'categories': []
                    }
                ]
            },
            {
                'id': '56aa371be4b08b9a8d57355e',
                'name': 'Bike Trail',
                'pluralName': 'Bike Trails',
                'shortName': 'Bike Trail',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a22',
                'name': 'Botanical Garden',
                'pluralName': 'Botanical Gardens',
                'shortName': 'Botanical Garden',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1df941735',
                'name': 'Bridge',
                'pluralName': 'Bridges',
                'shortName': 'Bridge',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e4941735',
                'name': 'Campground',
                'pluralName': 'Campgrounds',
                'shortName': 'Campground',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d57353b',
                'name': 'Canal Lock',
                'pluralName': 'Canal Locks',
                'shortName': 'Canal Lock',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573562',
                'name': 'Canal',
                'pluralName': 'Canals',
                'shortName': 'Canal',
                
                'categories': []
            },
            {
                'id': '50aaa49e4b90af0d42d5de11',
                'name': 'Castle',
                'pluralName': 'Castles',
                'shortName': 'Castle',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573511',
                'name': 'Cave',
                'pluralName': 'Caves',
                'shortName': 'Cave',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d15c941735',
                'name': 'Cemetery',
                'pluralName': 'Cemeteries',
                'shortName': 'Cemetery',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a12',
                'name': 'Dive Spot',
                'pluralName': 'Dive Spots',
                'shortName': 'Dive Spot',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e5941735',
                'name': 'Dog Run',
                'pluralName': 'Dog Runs',
                'shortName': 'Dog Run',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d15b941735',
                'name': 'Farm',
                'pluralName': 'Farms',
                'shortName': 'Farm',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d15f941735',
                'name': 'Field',
                'pluralName': 'Fields',
                'shortName': 'Field',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a0f',
                'name': 'Fishing Spot',
                'pluralName': 'Fishing Spots',
                'shortName': 'Fishing Spot',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a23',
                'name': 'Forest',
                'pluralName': 'Forests',
                'shortName': 'Forest',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573547',
                'name': 'Fountain',
                'pluralName': 'Fountains',
                'shortName': 'Fountain',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d15a941735',
                'name': 'Garden',
                'pluralName': 'Gardens',
                'shortName': 'Garden',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a11',
                'name': 'Gun Range',
                'pluralName': 'Gun Ranges',
                'shortName': 'Gun Range',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e0941735',
                'name': 'Harbor / Marina',
                'pluralName': 'Harbors / Marinas',
                'shortName': 'Harbor / Marina',
                
                'categories': []
            },
            {
                'id': '5bae9231bedf3950379f89cd',
                'name': 'Hill',
                'pluralName': 'Hills',
                'shortName': 'Hill',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d160941735',
                'name': 'Hot Spring',
                'pluralName': 'Hot Springs',
                'shortName': 'Hot Spring',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4b5',
                'name': 'Indoor Play Area',
                'pluralName': 'Indoor Play Areas',
                'shortName': 'Indoor Play Area',
                
                'categories': []
            },
            {
                'id': '50aaa4314b90af0d42d5de10',
                'name': 'Island',
                'pluralName': 'Islands',
                'shortName': 'Island',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d161941735',
                'name': 'Lake',
                'pluralName': 'Lakes',
                'shortName': 'Lake',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d15d941735',
                'name': 'Lighthouse',
                'pluralName': 'Lighthouses',
                'shortName': 'Lighthouse',
                
                'categories': []
            },
            {
                'id': '55a5a1ebe4b013909087cb77',
                'name': 'Mountain Hut',
                'pluralName': 'Mountain Huts',
                'shortName': 'Mountain Hut',
                
                'categories': []
            },
            {
                'id': '4eb1d4d54b900d56c88a45fc',
                'name': 'Mountain',
                'pluralName': 'Mountains',
                'shortName': 'Mountain',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a21',
                'name': 'National Park',
                'pluralName': 'National Parks',
                'shortName': 'National Park',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a13',
                'name': 'Nature Preserve',
                'pluralName': 'Nature Preserves',
                'shortName': 'Preserve',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d162941735',
                'name': 'Other Great Outdoors',
                'pluralName': 'Other Great Outdoors',
                'shortName': 'Other Outdoors',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a14',
                'name': 'Palace',
                'pluralName': 'Palaces',
                'shortName': 'Palace',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d163941735',
                'name': 'Park',
                'pluralName': 'Parks',
                'shortName': 'Park',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a25',
                'name': 'Pedestrian Plaza',
                'pluralName': 'Pedestrian Plazas',
                'shortName': 'Pedestrian Street/Plaza',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e7941735',
                'name': 'Playground',
                'pluralName': 'Playgrounds',
                'shortName': 'Playground',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d164941735',
                'name': 'Plaza',
                'pluralName': 'Plazas',
                'shortName': 'Plaza',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d15e941735',
                'name': 'Pool',
                'pluralName': 'Pools',
                'shortName': 'Pool',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a29',
                'name': 'Rafting',
                'pluralName': 'Rafting Spots',
                'shortName': 'Rafting',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a26',
                'name': 'Recreation Center',
                'pluralName': 'Recreation Centers',
                'shortName': 'Recreation Center',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573541',
                'name': 'Reservoir',
                'pluralName': 'Reservoirs',
                'shortName': 'Reservoir',
                
                'categories': []
            },
            {
                'id': '4eb1d4dd4b900d56c88a45fd',
                'name': 'River',
                'pluralName': 'Rivers',
                'shortName': 'River',
                
                'categories': []
            },
            {
                'id': '50328a4b91d4c4b30a586d6b',
                'name': 'Rock Climbing Spot',
                'pluralName': 'Rock Climbing Spots',
                'shortName': 'Rock Climbing',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d133951735',
                'name': 'Roof Deck',
                'pluralName': 'Roof Decks',
                'shortName': 'Roof Deck',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d165941735',
                'name': 'Scenic Lookout',
                'pluralName': 'Scenic Lookouts',
                'shortName': 'Scenic Lookout',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d166941735',
                'name': 'Sculpture Garden',
                'pluralName': 'Sculpture Gardens',
                'shortName': 'Sculpture',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1e9941735',
                'name': 'Ski Area',
                'pluralName': 'Ski Areas',
                'shortName': 'Ski Area',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1ea941735',
                        'name': 'Apres Ski Bar',
                        'pluralName': 'Apres Ski Bars',
                        'shortName': 'Apres Ski Bar',
                        'categories': []
                    },
                    {
                        'id': '4eb1c0ed3b7b52c0e1adc2ea',
                        'name': 'Ski Chairlift',
                        'pluralName': 'Ski Chairlifts',
                        'shortName': 'Chairlift',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1ec941735',
                        'name': 'Ski Chalet',
                        'pluralName': 'Ski Chalets',
                        'shortName': 'Ski Chalet',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1eb941735',
                        'name': 'Ski Lodge',
                        'pluralName': 'Ski Lodges',
                        'shortName': 'Lodge',
                        'categories': []
                    },
                    {
                        'id': '4eb1c0f63b7b52c0e1adc2eb',
                        'name': 'Ski Trail',
                        'pluralName': 'Ski Trails',
                        'shortName': 'Trail',
                        'categories': []
                    }
                ]
            },
            {
                'id': '58daa1558bbb0b01f18ec1b9',
                'name': 'Skydiving Drop Zone',
                'pluralName': 'Skydiving Drop Zones',
                'shortName': 'Drop Zone',
                
                'categories': []
            },
            {
                'id': '4eb1baf03b7b2c5b1d4306ca',
                'name': 'Stables',
                'pluralName': 'Stables',
                'shortName': 'Stables',
                
                'categories': []
            },
            {
                'id': '5bae9231bedf3950379f89d0',
                'name': 'State / Provincial Park',
                'pluralName': 'State / Provincial Parks',
                'shortName': 'State / Provincial Park',
                
                'categories': []
            },
            {
                'id': '530e33ccbcbc57f1066bbfe4',
                'name': 'States & Municipalities',
                'pluralName': 'States & Municipalities',
                'shortName': 'States & Municipalities',
                
                'categories': [
                    {
                        'id': '50aa9e094b90af0d42d5de0d',
                        'name': 'City',
                        'pluralName': 'Cities',
                        'shortName': 'City',
                        'categories': []
                    },
                    {
                        'id': '5345731ebcbc57f1066c39b2',
                        'name': 'County',
                        'pluralName': 'Counties',
                        'shortName': 'County',
                        'categories': []
                    },
                    {
                        'id': '530e33ccbcbc57f1066bbff7',
                        'name': 'Country',
                        'pluralName': 'Countries',
                        'shortName': 'Country',
                        'categories': []
                    },
                    {
                        'id': '4f2a25ac4b909258e854f55f',
                        'name': 'Neighborhood',
                        'pluralName': 'Neighborhoods',
                        'shortName': 'Neighborhood',
                        'categories': []
                    },
                    {
                        'id': '530e33ccbcbc57f1066bbff8',
                        'name': 'State',
                        'pluralName': 'States',
                        'shortName': 'State',
                        'categories': []
                    },
                    {
                        'id': '530e33ccbcbc57f1066bbff3',
                        'name': 'Town',
                        'pluralName': 'Towns',
                        'shortName': 'Town',
                        'categories': []
                    },
                    {
                        'id': '530e33ccbcbc57f1066bbff9',
                        'name': 'Village',
                        'pluralName': 'Villages',
                        'shortName': 'Village',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a10',
                'name': 'Summer Camp',
                'pluralName': 'Summer Camps',
                'shortName': 'Summer Camp',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d159941735',
                'name': 'Trail',
                'pluralName': 'Trails',
                'shortName': 'Trail',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a24',
                'name': 'Tree',
                'pluralName': 'Trees',
                'shortName': 'Tree',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1de941735',
                'name': 'Vineyard',
                'pluralName': 'Vineyards',
                'shortName': 'Vineyard',
                
                'categories': []
            },
            {
                'id': '5032848691d4c4b30a586d61',
                'name': 'Volcano',
                'pluralName': 'Volcanoes',
                'shortName': 'Volcano',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573560',
                'name': 'Waterfall',
                'pluralName': 'Waterfalls',
                'shortName': 'Waterfall',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734c3',
                'name': 'Waterfront',
                'pluralName': 'Waterfronts',
                'shortName': 'Waterfront',
                
                'categories': []
            },
            {
                'id': '4fbc1be21983fc883593e321',
                'name': 'Well',
                'pluralName': 'Wells',
                'shortName': 'Well',
                
                'categories': []
            },
            {
                'id': '5bae9231bedf3950379f89c7',
                'name': 'Windmill',
                'pluralName': 'Windmills',
                'shortName': 'Windmill',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06375d81259',
        'name': 'Professional & Other Places',
        'pluralName': 'Professional & Other Places',
        'shortName': 'Professional',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '4e52d2d203646f7c19daa8ae',
                'name': 'Animal Shelter',
                'pluralName': 'Animal Shelters',
                'shortName': 'Animal Shelter',
                'key': 'animals',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1d6',
                'name': 'Art Studio',
                'pluralName': 'Art Studios',
                'shortName': 'Art Studio',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d173941735',
                'name': 'Auditorium',
                'pluralName': 'Auditoriums',
                'shortName': 'Auditorium',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734cf',
                'name': 'Ballroom',
                'pluralName': 'Ballrooms',
                'shortName': 'Ballroom',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d130941735',
                'name': 'Building',
                'pluralName': 'Buildings',
                'shortName': 'Building',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573517',
                'name': 'Business Center',
                'pluralName': 'Business Centers',
                'shortName': 'Business Center',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a35',
                'name': 'Club House',
                'pluralName': 'Club Houses',
                'shortName': 'Club',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a34',
                'name': 'Community Center',
                'pluralName': 'Community Centers',
                'shortName': 'Community Center',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ff931735',
                'name': 'Convention Center',
                'pluralName': 'Convention Centers',
                'shortName': 'Convention Center',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d100941735',
                        'name': 'Meeting Room',
                        'pluralName': 'Meeting Rooms',
                        'shortName': 'Meeting Room',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a32',
                'name': 'Cultural Center',
                'pluralName': 'Cultural Centers',
                'shortName': 'Cultural Center',
                
                'categories': []
            },
            {
                'id': '4e0e22f5a56208c4ea9a85a0',
                'name': 'Distillery',
                'pluralName': 'Distilleries',
                'shortName': 'Distillery',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a37',
                'name': 'Distribution Center',
                'pluralName': 'Distribution Centers',
                'shortName': 'Distributor',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d171941735',
                'name': 'Event Space',
                'pluralName': 'Event Spaces',
                'shortName': 'Event Space',
                
                'categories': [
                    {
                        'id': '56aa371be4b08b9a8d57356a',
                        'name': 'Outdoor Event Space',
                        'pluralName': 'Outdoor Event Spaces',
                        'shortName': 'Outdoor Event Space',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4eb1bea83b7b6f98df247e06',
                'name': 'Factory',
                'pluralName': 'Factories',
                'shortName': 'Factory',
                
                'categories': []
            },
            {
                'id': '4eb1daf44b900d56c88a4600',
                'name': 'Fair',
                'pluralName': 'Fairs',
                'shortName': 'Fair',
                
                'categories': []
            },
            {
                'id': '4f4534884b9074f6e4fb0174',
                'name': 'Funeral Home',
                'pluralName': 'Funeral Homes',
                'shortName': 'Funeral Home',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d126941735',
                'name': 'Government Building',
                'pluralName': 'Government Buildings',
                'shortName': 'Government',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d12a941735',
                        'name': 'Capitol Building',
                        'pluralName': 'Capitol Buildings',
                        'shortName': 'Capitol Building',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d129941735',
                        'name': 'City Hall',
                        'pluralName': 'City Halls',
                        'shortName': 'City Hall',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12b941735',
                        'name': 'Courthouse',
                        'pluralName': 'Courthouses',
                        'shortName': 'Courthouse',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12c951735',
                        'name': 'Embassy / Consulate',
                        'pluralName': 'Embassies / Consulates',
                        'shortName': 'Embassy',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12c941735',
                        'name': 'Fire Station',
                        'pluralName': 'Fire Stations',
                        'shortName': 'Fire Station',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12d941735',
                        'name': 'Monument / Landmark',
                        'pluralName': 'Monuments / Landmarks',
                        'shortName': 'Landmark',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12e941735',
                        'name': 'Police Station',
                        'pluralName': 'Police Stations',
                        'shortName': 'Police Station',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a38',
                        'name': 'Town Hall',
                        'pluralName': 'Town Halls',
                        'shortName': 'Town Hall',
                        'categories': []
                    }
                ]
            },
            {
                'id': '56aa371be4b08b9a8d5734d7',
                'name': 'Industrial Estate',
                'pluralName': 'Industrial Estates',
                'shortName': 'Industrial Estate',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4d6',
                'name': 'Laboratory',
                'pluralName': 'Laboratories',
                'shortName': 'Laboratory',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d12f941735',
                'name': 'Library',
                'pluralName': 'Libraries',
                'shortName': 'Library',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d104941735',
                'name': 'Medical Center',
                'pluralName': 'Medical Centers',
                'shortName': 'Medical',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b7a3b',
                        'name': 'Acupuncturist',
                        'pluralName': 'Acupuncturists',
                        'shortName': 'Acupuncturist',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a3c',
                        'name': 'Alternative Healer',
                        'pluralName': 'Alternative Healers',
                        'shortName': 'Alternative Healer',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a3a',
                        'name': 'Chiropractor',
                        'pluralName': 'Chiropractors',
                        'shortName': 'Chiropractors',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d178941735',
                        'name': 'Dentist\'s Office',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d177941735',
                        'name': 'Doctor\'s Office',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d194941735',
                        'name': 'Emergency Room',
                        'pluralName': 'Emergency Rooms',
                        'shortName': 'Emergency Room',
                        'categories': []
                    },
                    {
                        'id': '522e32fae4b09b556e370f19',
                        'name': 'Eye Doctor',
                        'pluralName': 'Eye Doctors',
                        'shortName': 'Eye Doctor',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d196941735',
                        'name': 'Hospital',
                        'pluralName': 'Hospitals',
                        'shortName': 'Hospital',
                        'categories': [
                            {
                                'id': '58daa1558bbb0b01f18ec1f7',
                                'name': 'Hospital Ward',
                                'pluralName': 'Hospital Wards',
                                'shortName': 'Hospital Ward',

                                'categories': []
                            }
                        ]
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734ff',
                        'name': 'Maternity Clinic',
                        'pluralName': 'Maternity Clinics',
                        'shortName': 'Maternity Clinic',
                        'categories': []
                    },
                    {
                        'id': '4f4531b14b9074f6e4fb0103',
                        'name': 'Medical Lab',
                        'pluralName': 'Medical Labs',
                        'shortName': 'Medical Lab',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a39',
                        'name': 'Mental Health Office',
                        'pluralName': 'Mental Health Offices',
                        'shortName': 'Mental Health',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1d0',
                        'name': 'Nutritionist',
                        'pluralName': 'Nutritionists',
                        'shortName': 'Nutritionist',
                        'categories': []
                    },
                    {
                        'id': '5744ccdfe4b0c0459246b4af',
                        'name': 'Physical Therapist',
                        'pluralName': 'Physical Therapists',
                        'shortName': 'Physical Therapist',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d57351d',
                        'name': 'Rehab Center',
                        'pluralName': 'Rehab Centers',
                        'shortName': 'Rehab Center',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d573526',
                        'name': 'Urgent Care Center',
                        'pluralName': 'Urgent Care Centers',
                        'shortName': 'Urgent Care Center',
                        'categories': []
                    },
                    {
                        'id': '4d954af4a243a5684765b473',
                        'name': 'Veterinarian',
                        'pluralName': 'Veterinarians',
                        'shortName': 'Veterinarians',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4e52adeebd41615f56317744',
                'name': 'Military Base',
                'pluralName': 'Military Bases',
                'shortName': 'Military Base',
                
                'categories': []
            },
            {
                'id': '50328a8e91d4c4b30a586d6c',
                'name': 'Non-Profit',
                'pluralName': 'Non-Profits',
                'shortName': 'Non-Profit',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4d9',
                'name': 'Observatory',
                'pluralName': 'Observatories',
                'shortName': 'Observatory',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d124941735',
                'name': 'Office',
                'pluralName': 'Offices',
                'shortName': 'Office',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b7a3d',
                        'name': 'Advertising Agency',
                        'pluralName': 'Advertising Agencies',
                        'shortName': 'Advertising Agency',
                        'categories': []
                    },
                    {
                        'id': '5032764e91d4c4b30a586d5a',
                        'name': 'Campaign Office',
                        'pluralName': 'Campaign Offices',
                        'shortName': 'Campaign',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d127941735',
                        'name': 'Conference Room',
                        'pluralName': 'Conference Rooms',
                        'shortName': 'Conference room',
                        'categories': []
                    },
                    {
                        'id': '5665ef1d498ec706735f0e59',
                        'name': 'Corporate Amenity',
                        'pluralName': 'Corporate Amenities',
                        'shortName': 'Corporate Amenity',
                        'categories': []
                    },
                    {
                        'id': '54f4ba06498e2cf5561da814',
                        'name': 'Corporate Cafeteria',
                        'pluralName': 'Corporate Cafeterias',
                        'shortName': 'Corporate Cafeteria',
                        'categories': []
                    },
                    {
                        'id': '5665c7b9498e7d8a4f2c0f06',
                        'name': 'Corporate Coffee Shop',
                        'pluralName': 'Corporate Coffee Shops',
                        'shortName': 'Corporate Coffee Shop',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d174941735',
                        'name': 'Coworking Space',
                        'pluralName': 'Coworking Spaces',
                        'shortName': 'Coworking Space',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d125941735',
                        'name': 'Tech Startup',
                        'pluralName': 'Tech Startups',
                        'shortName': 'Tech Startup',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4c38df4de52ce0d596b336e1',
                'name': 'Parking',
                'pluralName': 'Parking',
                'shortName': 'Parking',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d172941735',
                'name': 'Post Office',
                'pluralName': 'Post Offices',
                'shortName': 'Post Office',
                
                'categories': []
            },
            {
                'id': '58daa1548bbb0b01f18ec1a9',
                'name': 'Power Plant',
                'pluralName': 'Power Plants',
                'shortName': 'Power Plant',
                
                'categories': []
            },
            {
                'id': '5310b8e5bcbc57f1066bcbf1',
                'name': 'Prison',
                'pluralName': 'Prisons',
                'shortName': 'Prison',
                
                'categories': []
            },
            {
                'id': '5032856091d4c4b30a586d63',
                'name': 'Radio Station',
                'pluralName': 'Radio Stations',
                'shortName': 'Radio Station',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b57',
                'name': 'Recruiting Agency',
                'pluralName': 'Recruiting Agencies',
                'shortName': 'Recruiting Agency',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1b2',
                'name': 'Research Station',
                'pluralName': 'Research Stations',
                'shortName': 'Research Station',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d13b941735',
                'name': 'School',
                'pluralName': 'Schools',
                'shortName': 'School',
                
                'categories': [
                    {
                        'id': '56aa371ce4b08b9a8d573570',
                        'name': 'Adult Education Center',
                        'pluralName': 'Adult Education Centers',
                        'shortName': 'Adult Education Center',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a43',
                        'name': 'Circus School',
                        'pluralName': 'Circus Schools',
                        'shortName': 'Circus School',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec200',
                        'name': 'Cooking School',
                        'pluralName': 'Cooking Schools',
                        'shortName': 'Cooking School',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a42',
                        'name': 'Driving School',
                        'pluralName': 'Driving Schools',
                        'shortName': 'Driving School',
                        'categories': []
                    },
                    {
                        'id': '4f4533804b9074f6e4fb0105',
                        'name': 'Elementary School',
                        'pluralName': 'Elementary Schools',
                        'shortName': 'Elementary School',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a49',
                        'name': 'Flight School',
                        'pluralName': 'Flight Schools',
                        'shortName': 'Flight School',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d13d941735',
                        'name': 'High School',
                        'pluralName': 'High Schools',
                        'shortName': 'High School',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a48',
                        'name': 'Language School',
                        'pluralName': 'Language Schools',
                        'shortName': 'Language School',
                        'categories': []
                    },
                    {
                        'id': '4f4533814b9074f6e4fb0106',
                        'name': 'Middle School',
                        'pluralName': 'Middle Schools',
                        'shortName': 'Middle School',
                        'categories': []
                    },
                    {
                        'id': '4f04b10d2fb6e1c99f3db0be',
                        'name': 'Music School',
                        'pluralName': 'Music Schools',
                        'shortName': 'Music School',
                        'categories': []
                    },
                    {
                        'id': '4f4533814b9074f6e4fb0107',
                        'name': 'Nursery School',
                        'pluralName': 'Nursery Schools',
                        'shortName': 'Nursery School',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a45',
                        'name': 'Preschool',
                        'pluralName': 'Preschools',
                        'shortName': 'Preschool',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a46',
                        'name': 'Private School',
                        'pluralName': 'Private Schools',
                        'shortName': 'Private School',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a47',
                        'name': 'Religious School',
                        'pluralName': 'Religious Schools',
                        'shortName': 'Religious School',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a44',
                        'name': 'Swim School',
                        'pluralName': 'Swim Schools',
                        'shortName': 'Swim School',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a33',
                'name': 'Social Club',
                'pluralName': 'Social Clubs',
                'shortName': 'Social Club',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d131941735',
                'name': 'Spiritual Center',
                'pluralName': 'Spiritual Centers',
                'shortName': 'Spiritual',
                
                'categories': [
                    {
                        'id': '52e81612bcbc57f1066b7a3e',
                        'name': 'Buddhist Temple',
                        'pluralName': 'Buddhist Temples',
                        'shortName': 'Buddhist Temple',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1eb',
                        'name': 'Cemevi',
                        'pluralName': 'Cemevis',
                        'shortName': 'Cemevi',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d132941735',
                        'name': 'Church',
                        'pluralName': 'Churches',
                        'shortName': 'Church',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734fc',
                        'name': 'Confucian Temple',
                        'pluralName': 'Confucian Temples',
                        'shortName': 'Confucian Temple',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a3f',
                        'name': 'Hindu Temple',
                        'pluralName': 'Hindu Temples',
                        'shortName': 'Hindu Temple',
                        'categories': []
                    },
                    {
                        'id': '5744ccdfe4b0c0459246b4ac',
                        'name': 'Kingdom Hall',
                        'pluralName': 'Kingdom Halls',
                        'shortName': 'Kingdom Hall',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a40',
                        'name': 'Monastery',
                        'pluralName': 'Monasteries',
                        'shortName': 'Monastery',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d138941735',
                        'name': 'Mosque',
                        'pluralName': 'Mosques',
                        'shortName': 'Mosque',
                        'categories': []
                    },
                    {
                        'id': '52e81612bcbc57f1066b7a41',
                        'name': 'Prayer Room',
                        'pluralName': 'Prayer Rooms',
                        'shortName': 'Prayer Room',
                        'categories': []
                    },
                    {
                        'id': '4eb1d80a4b900d56c88a45ff',
                        'name': 'Shrine',
                        'pluralName': 'Shrines',
                        'shortName': 'Shrine',
                        'categories': []
                    },
                    {
                        'id': '5bae9231bedf3950379f89c9',
                        'name': 'Sikh Temple',
                        'pluralName': 'Sikh Temples',
                        'shortName': 'Sikh Temple',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d139941735',
                        'name': 'Synagogue',
                        'pluralName': 'Synagogues',
                        'shortName': 'Synagogue',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d13a941735',
                        'name': 'Temple',
                        'pluralName': 'Temples',
                        'shortName': 'Temple',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734f6',
                        'name': 'Terreiro',
                        'pluralName': 'Terreiros',
                        'shortName': 'Terreiro',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52e81612bcbc57f1066b7a31',
                'name': 'TV Station',
                'pluralName': 'TV Stations',
                'shortName': 'TV Station',
                
                'categories': []
            },
            {
                'id': '4cae28ecbf23941eb1190695',
                'name': 'Voting Booth',
                'pluralName': 'Voting Booths',
                'shortName': 'Voting Booth',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a36',
                'name': 'Warehouse',
                'pluralName': 'Warehouses',
                'shortName': 'Warehouse',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1ac',
                'name': 'Waste Facility',
                'pluralName': 'Waste Facilities',
                'shortName': 'Waste Facility',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734c5',
                'name': 'Wedding Hall',
                'pluralName': 'Wedding Halls',
                'shortName': 'Wedding Hall',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d14b941735',
                'name': 'Winery',
                'pluralName': 'Wineries',
                'shortName': 'Winery',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4e67e38e036454776db1fb3a',
        'name': 'Residence',
        'pluralName': 'Residences',
        'shortName': 'Residence',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '5032891291d4c4b30a586d68',
                'name': 'Assisted Living',
                'pluralName': 'Assisted Living',
                'shortName': 'Assisted Living',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d103941735',
                'name': 'Home (private)',
                'pluralName': 'Homes (private)',
                'shortName': 'Home',
                
                'categories': []
            },
            {
                'id': '4f2a210c4b9023bd5841ed28',
                'name': 'Housing Development',
                'pluralName': 'Housing Developments',
                'shortName': 'Housing Development',
                
                'categories': []
            },
            {
                'id': '4d954b06a243a5684965b473',
                'name': 'Residential Building (Apartment / Condo)',
                'pluralName': 'Residential Buildings (Apartments / Condos)',
                'shortName': 'Residential',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b55',
                'name': 'Trailer Park',
                'pluralName': 'Trailer Parks',
                'shortName': 'Trailer Park',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06378d81259',
        'name': 'Shop & Service',
        'key' : 'shops',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '52f2ab2ebcbc57f1066b8b56',
                'name': 'ATM',
                'pluralName': 'ATMs',
                'shortName': 'ATM',
                
                'categories': []
            },
            {
                'id': '5267e446e4b0ec79466e48c4',
                'name': 'Adult Boutique',
                'pluralName': 'Adult Boutiques',
                'shortName': 'Adult Boutique',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d116951735',
                'name': 'Antique Shop',
                'pluralName': 'Antique Shops',
                'shortName': 'Antiques',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d127951735',
                'name': 'Arts & Crafts Store',
                'pluralName': 'Arts & Crafts Stores',
                'shortName': 'Arts & Crafts',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b43',
                'name': 'Astrologer',
                'pluralName': 'Astrologers',
                'shortName': 'Astrologer',
                
                'categories': []
            },
            {
                'id': '4eb1c1623b7b52c0e1adc2ec',
                'name': 'Auto Dealership',
                'pluralName': 'Auto Dealerships',
                'shortName': 'Auto Dealer',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b44',
                'name': 'Auto Garage',
                'pluralName': 'Auto Garages',
                'shortName': 'Auto Garage',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734d3',
                'name': 'Auto Workshop',
                'pluralName': 'Auto Workshops',
                'shortName': 'Auto Workshop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d124951735',
                'name': 'Automotive Shop',
                'pluralName': 'Automotive Shops',
                'shortName': 'Automotive',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b32',
                'name': 'Baby Store',
                'pluralName': 'Baby Stores',
                'shortName': 'Baby Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10a951735',
                'name': 'Bank',
                'pluralName': 'Banks',
                'shortName': 'Bank',
                
                'categories': []
            },
            {
                'id': '52e81612bcbc57f1066b7a27',
                'name': 'Bath House',
                'pluralName': 'Bath Houses',
                'shortName': 'Bath House',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d5734cb',
                'name': 'Batik Shop',
                'pluralName': 'Batik Shops',
                'shortName': 'Batik Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b40',
                'name': 'Betting Shop',
                'pluralName': 'Betting Shops',
                'shortName': 'Betting Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b42',
                'name': 'Big Box Store',
                'pluralName': 'Big Box Stores',
                'shortName': 'Big Box Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d115951735',
                'name': 'Bike Shop',
                'pluralName': 'Bike Shops',
                'shortName': 'Bike Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f1941735',
                'name': 'Board Shop',
                'pluralName': 'Board Shops',
                'shortName': 'Board Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d114951735',
                'name': 'Bookstore',
                'pluralName': 'Bookstores',
                'shortName': 'Bookstore',
                'key' : 'literature',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d11a951735',
                'name': 'Bridal Shop',
                'pluralName': 'Bridal Shops',
                'shortName': 'Bridal',
                
                'categories': []
            },
            {
                'id': '5453de49498eade8af355881',
                'name': 'Business Service',
                'pluralName': 'Business Services',
                'shortName': 'Business Services',
                
                'categories': []
            },
            {
                'id': '4eb1bdf03b7b55596b4a7491',
                'name': 'Camera Store',
                'pluralName': 'Camera Stores',
                'shortName': 'Camera Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d117951735',
                'name': 'Candy Store',
                'pluralName': 'Candy Stores',
                'shortName': 'Candy Store',
                
                'categories': []
            },
            {
                'id': '4f04ae1f2fb6e1c99f3db0ba',
                'name': 'Car Wash',
                'pluralName': 'Car Washes',
                'shortName': 'Car Washes',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b2a',
                'name': 'Carpet Store',
                'pluralName': 'Carpet Stores',
                'shortName': 'Carpet Store',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b2d',
                'name': 'Check Cashing Service',
                'pluralName': 'Check Cashing Services',
                'shortName': 'Check Cashing Service',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4c7',
                'name': 'Child Care Service',
                'pluralName': 'Child Care Services',
                'shortName': 'Child Care',
                
                'categories': [
                    {
                        'id': '4f4532974b9074f6e4fb0104',
                        'name': 'Daycare',
                        'pluralName': 'Daycares',
                        'shortName': 'Daycare',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b31',
                'name': 'Chocolate Shop',
                'pluralName': 'Chocolate Shops',
                'shortName': 'Chocolate Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d103951735',
                'name': 'Clothing Store',
                'pluralName': 'Clothing Stores',
                'shortName': 'Apparel',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d102951735',
                        'name': 'Accessories Store',
                        'pluralName': 'Accessories Stores',
                        'shortName': 'Accessories',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d104951735',
                        'name': 'Boutique',
                        'pluralName': 'Boutiques',
                        'shortName': 'Boutique',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d105951735',
                        'name': 'Kids Store',
                        'pluralName': 'Kids Stores',
                        'shortName': 'Kids Store',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d109951735',
                        'name': 'Lingerie Store',
                        'pluralName': 'Lingerie Stores',
                        'shortName': 'Lingerie',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d106951735',
                        'name': 'Men\'s Store',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d107951735',
                        'name': 'Shoe Store',
                        'pluralName': 'Shoe Stores',
                        'shortName': 'Shoes',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d108951735',
                        'name': 'Women\'s Store',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b18',
                'name': 'Comic Shop',
                'pluralName': 'Comic Shops',
                'shortName': 'Comic Shop',
                
                'categories': []
            },
            {
                'id': '5454144b498ec1f095bff2f2',
                'name': 'Construction & Landscaping',
                'pluralName': 'Construction & Landscaping',
                'shortName': 'Construction',
                
                'categories': []
            },
            {
                'id': '4d954b0ea243a5684a65b473',
                'name': 'Convenience Store',
                'pluralName': 'Convenience Stores',
                'shortName': 'Convenience Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10c951735',
                'name': 'Cosmetics Shop',
                'pluralName': 'Cosmetics Shops',
                'shortName': 'Cosmetics',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b17',
                'name': 'Costume Shop',
                'pluralName': 'Costume Shops',
                'shortName': 'Costume Shop',
                
                'categories': []
            },
            {
                'id': '5032850891d4c4b30a586d62',
                'name': 'Credit Union',
                'pluralName': 'Credit Unions',
                'shortName': 'Credit Union',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4be',
                'name': 'Currency Exchange',
                'pluralName': 'Currency Exchanges',
                'shortName': 'Currency Exchange',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f6941735',
                'name': 'Department Store',
                'pluralName': 'Department Stores',
                'shortName': 'Department Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f4941735',
                'name': 'Design Studio',
                'pluralName': 'Design Studios',
                'shortName': 'Design',
                
                'categories': []
            },
            {
                'id': '52dea92d3cf9994f4e043dbb',
                'name': 'Discount Store',
                'pluralName': 'Discount Stores',
                'shortName': 'Discount Store',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b1a',
                'name': 'Dive Shop',
                'pluralName': 'Dive Shops',
                'shortName': 'Dive Shop',
                
                'categories': []
            },
            {
                'id': '5745c2e4498e11e7bccabdbd',
                'name': 'Drugstore',
                'pluralName': 'Drugstores',
                'shortName': 'Drugstore',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b1d',
                'name': 'Dry Cleaner',
                'pluralName': 'Dry Cleaners',
                'shortName': 'Dry Cleaner',
                
                'categories': []
            },
            {
                'id': '5032872391d4c4b30a586d64',
                'name': 'EV Charging Station',
                'pluralName': 'EV Charging Stations',
                'shortName': 'EV Charging',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d122951735',
                'name': 'Electronics Store',
                'pluralName': 'Electronics Stores',
                'shortName': 'Electronics',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573554',
                'name': 'Entertainment Service',
                'pluralName': 'Entertainment Services',
                'shortName': 'Entertainment Service',
                
                'categories': []
            },
            {
                'id': '5454152e498ef71e2b9132c6',
                'name': 'Event Service',
                'pluralName': 'Event Services',
                'shortName': 'Event Services',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b26',
                'name': 'Fabric Shop',
                'pluralName': 'Fabric Shops',
                'shortName': 'Fabric Shop',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573523',
                'name': 'Film Studio',
                'pluralName': 'Film Studios',
                'shortName': 'Film Studio',
                
                'categories': []
            },
            {
                'id': '503287a291d4c4b30a586d65',
                'name': 'Financial or Legal Service',
                'pluralName': 'Financial or Legal Services',
                'shortName': 'Financial / Legal',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b3a',
                'name': 'Fireworks Store',
                'pluralName': 'Fireworks Stores',
                'shortName': 'Fireworks Store',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b16',
                'name': 'Fishing Store',
                'pluralName': 'Fishing Stores',
                'shortName': 'Fishing Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f7941735',
                'name': 'Flea Market',
                'pluralName': 'Flea Markets',
                'shortName': 'Flea Market',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573505',
                'name': 'Floating Market',
                'pluralName': 'Floating Markets',
                'shortName': 'Floating Market',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d11b951735',
                'name': 'Flower Shop',
                'pluralName': 'Flower Shops',
                'shortName': 'Flower Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f9941735',
                'name': 'Food & Drink Shop',
                'pluralName': 'Food & Drink Shops',
                'shortName': 'Food & Drink',
                
                'categories': [
                    {
                        'id': '5370f356bcbc57f1066c94c2',
                        'name': 'Beer Store',
                        'pluralName': 'Beer Stores',
                        'shortName': 'Beer Store',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d11d951735',
                        'name': 'Butcher',
                        'pluralName': 'Butchers',
                        'shortName': 'Butcher',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d11e951735',
                        'name': 'Cheese Shop',
                        'pluralName': 'Cheese Shops',
                        'shortName': 'Cheese Shop',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1ca',
                        'name': 'Dairy Store',
                        'pluralName': 'Dairy Stores',
                        'shortName': 'Dairy Store',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1fa941735',
                        'name': 'Farmers Market',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d10e951735',
                        'name': 'Fish Market',
                        'pluralName': 'Fish Markets',
                        'shortName': 'Fish Market',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d573550',
                        'name': 'Food Service',
                        'pluralName': 'Food Services',
                        'shortName': 'Food Service',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1f5941735',
                        'name': 'Gourmet Shop',
                        'pluralName': 'Gourmet Shops',
                        'shortName': 'Gourmet',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d118951735',
                        'name': 'Grocery Store',
                        'pluralName': 'Grocery Stores',
                        'shortName': 'Grocery Store',
                        'categories': []
                    },
                    {
                        'id': '50aa9e744b90af0d42d5de0e',
                        'name': 'Health Food Store',
                        'pluralName': 'Health Food Stores',
                        'shortName': 'Health Food Store',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1e8',
                        'name': 'Kuruyemişçi',
                        'pluralName': 'Kuruyemişçis',
                        'shortName': 'Kuruyemişçi',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d186941735',
                        'name': 'Liquor Store',
                        'pluralName': 'Liquor Stores',
                        'shortName': 'Liquor Store',
                        'categories': []
                    },
                    {
                        'id': '52f2ab2ebcbc57f1066b8b45',
                        'name': 'Organic Grocery',
                        'pluralName': 'Organic Groceries',
                        'shortName': 'Organic Grocery',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d573564',
                        'name': 'Sausage Shop',
                        'pluralName': 'Sausage Shops',
                        'shortName': 'Sausage Shop',
                        'categories': []
                    },
                    {
                        'id': '53e0feef498e5aac066fd8a9',
                        'name': 'Street Food Gathering',
                        'pluralName': 'Street a Gatherings',
                        'shortName': 'Street Food Gathering',
                        'categories': []
                    },
                    {
                        'id': '52f2ab2ebcbc57f1066b8b46',
                        'name': 'Supermarket',
                        'pluralName': 'Supermarkets',
                        'shortName': 'Supermarket',
                        'categories': []
                    },
                    {
                        'id': '58daa1558bbb0b01f18ec1e5',
                        'name': 'Turşucu',
                        'pluralName': 'Turşucus',
                        'shortName': 'Turşucu',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d119951735',
                        'name': 'Wine Shop',
                        'pluralName': 'Wine Shops',
                        'shortName': 'Wine Shop',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b24',
                'name': 'Frame Store',
                'pluralName': 'Frame Stores',
                'shortName': 'Frame Store',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b1c',
                'name': 'Fruit & Vegetable Store',
                'pluralName': 'Fruit & Vegetable Stores',
                'shortName': 'Fruit & Vegetable Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f8941735',
                'name': 'Furniture / Home Store',
                'pluralName': 'Furniture / Home Stores',
                'shortName': 'Furniture / Home',
                
                'categories': [
                    {
                        'id': '55888a5a498e782e3303b43a',
                        'name': 'Lighting Store',
                        'pluralName': 'Lighting Stores',
                        'shortName': 'Lighting',
                        'categories': []
                    }
                ]
            },
            {
                'id': '4bf58dd8d48988d18d941735',
                'name': 'Gaming Cafe',
                'pluralName': 'Gaming Cafes',
                'shortName': 'Gaming Cafe',
                
                'categories': []
            },
            {
                'id': '4eb1c0253b7b52c0e1adc2e9',
                'name': 'Garden Center',
                'pluralName': 'Garden Centers',
                'shortName': 'Garden Center',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d113951735',
                'name': 'Gas Station',
                'pluralName': 'Gas Stations',
                'shortName': 'Gas Station',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d128951735',
                'name': 'Gift Shop',
                'pluralName': 'Gift Shops',
                'shortName': 'Gift Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b19',
                'name': 'Gun Shop',
                'pluralName': 'Gun Shops',
                'shortName': 'Gun Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d112951735',
                'name': 'Hardware Store',
                'pluralName': 'Hardware Stores',
                'shortName': 'Hardware',
                
                'categories': []
            },
            {
                'id': '54541900498ea6ccd0202697',
                'name': 'Health & Beauty Service',
                'pluralName': 'Health & Beauty Services',
                'shortName': 'Health & Beauty',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b2c',
                'name': 'Herbs & Spices Store',
                'pluralName': 'Herbs & Spices Stores',
                'shortName': 'Herbs & Spices Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fb941735',
                'name': 'Hobby Shop',
                'pluralName': 'Hobby Shops',
                'shortName': 'Hobbies',
                
                'categories': []
            },
            {
                'id': '545419b1498ea6ccd0202f58',
                'name': 'Home Service',
                'pluralName': 'Home Services & Repairs',
                'shortName': 'Home Services',
                
                'categories': []
            },
            {
                'id': '50aaa5234b90af0d42d5de12',
                'name': 'Hunting Supply',
                'pluralName': 'Hunting Supplies',
                'shortName': 'Hunting Supply',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b36',
                'name': 'IT Services',
                'pluralName': 'IT Services',
                'shortName': 'IT Services',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1f1',
                'name': 'Insurance Office',
                'pluralName': 'Insurance Offices',
                'shortName': 'Insurance Office',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f0941735',
                'name': 'Internet Cafe',
                'pluralName': 'Internet Cafes',
                'shortName': 'Internet Cafe',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d111951735',
                'name': 'Jewelry Store',
                'pluralName': 'Jewelry Stores',
                'shortName': 'Jewelry',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1b4',
                'name': 'Kitchen Supply Store',
                'pluralName': 'Kitchen Supply Stores',
                'shortName': 'Kitchen Supply',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b25',
                'name': 'Knitting Store',
                'pluralName': 'Knitting Stores',
                'shortName': 'Knitting Supplies',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b33',
                'name': 'Laundromat',
                'pluralName': 'Laundromats',
                'shortName': 'Laundromat',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fc941735',
                'name': 'Laundry Service',
                'pluralName': 'Laundry Services',
                'shortName': 'Laundry',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b3f',
                'name': 'Lawyer',
                'pluralName': 'Lawyers',
                'shortName': 'Lawyer',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b2b',
                'name': 'Leather Goods Store',
                'pluralName': 'Leather Goods Stores',
                'shortName': 'Leather Goods',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b1e',
                'name': 'Locksmith',
                'pluralName': 'Locksmiths',
                'shortName': 'Locksmith',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b38',
                'name': 'Lottery Retailer',
                'pluralName': 'Lottery Retailers',
                'shortName': 'Lottery',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b29',
                'name': 'Luggage Store',
                'pluralName': 'Luggage Stores',
                'shortName': 'Luggage Store',
                
                'categories': []
            },
            {
                'id': '52c71aaf3cf9994f4e043d17',
                'name': 'Marijuana Dispensary',
                'pluralName': 'Marijuana Dispensaries',
                'shortName': 'Dispensary',
                
                'categories': []
            },
            {
                'id': '50be8ee891d4fa8dcc7199a7',
                'name': 'Market',
                'pluralName': 'Markets',
                'shortName': 'Market',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b3c',
                'name': 'Massage Studio',
                'pluralName': 'Massage Studios',
                'shortName': 'Massage Studio',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b27',
                'name': 'Mattress Store',
                'pluralName': 'Mattress Stores',
                'shortName': 'Mattress Store',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec206',
                'name': 'Medical Supply Store',
                'pluralName': 'Medical Supply Stores',
                'shortName': 'Medical Supply',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ff941735',
                'name': 'Miscellaneous Shop',
                'pluralName': 'Miscellaneous Shops',
                'shortName': 'Shop',
                
                'categories': []
            },
            {
                'id': '4f04afc02fb6e1c99f3db0bc',
                'name': 'Mobile Phone Shop',
                'pluralName': 'Mobile Phone Shops',
                'shortName': 'Mobile Phones',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d57354a',
                'name': 'Mobility Store',
                'pluralName': 'Mobility Stores',
                'shortName': 'Mobility Store',
                
                'categories': []
            },
            {
                'id': '5032833091d4c4b30a586d60',
                'name': 'Motorcycle Shop',
                'pluralName': 'Motorcycle Shops',
                'shortName': 'Motorcycle Shop',
                
                'categories': []
            },
            {
                'id': '59d79d6b2e268052fa2a3332',
                'name': 'Motorsports Shop',
                'pluralName': 'Motorsports Shops',
                'shortName': 'Motorsports Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fe941735',
                'name': 'Music Store',
                'pluralName': 'Music Stores',
                'shortName': 'Music Store',
                
                'categories': []
            },
            {
                'id': '4f04aa0c2fb6e1c99f3db0b8',
                'name': 'Nail Salon',
                'pluralName': 'Nail Salons',
                'shortName': 'Nail Salon',
                
                'categories': []
            },
            {
                'id': '4f04ad622fb6e1c99f3db0b9',
                'name': 'Newsstand',
                'pluralName': 'Newsstands',
                'shortName': 'Newsstand',
                
                'categories': []
            },
            {
                'id': '5ae95d208a6f17002ce792b2',
                'name': 'Notary',
                'pluralName': 'Notaries',
                'shortName': 'Notary',
                
                'categories': []
            },
            {
                'id': '4d954afda243a5684865b473',
                'name': 'Optical Shop',
                'pluralName': 'Optical Shops',
                'shortName': 'Optical',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b2f',
                'name': 'Other Repair Shop',
                'pluralName': 'Other Repair Shops',
                'shortName': 'Other Repair',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b22',
                'name': 'Outdoor Supply Store',
                'pluralName': 'Outdoor Supply Stores',
                'shortName': 'Outdoor Supplies',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4df',
                'name': 'Outlet Mall',
                'pluralName': 'Outlet Malls',
                'shortName': 'Outlet Mall',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b35',
                'name': 'Outlet Store',
                'pluralName': 'Outlet Stores',
                'shortName': 'Outlet Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d121951735',
                'name': 'Paper / Office Supplies Store',
                'pluralName': 'Paper / Office Supplies Stores',
                'shortName': 'Office Supplies',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b34',
                'name': 'Pawn Shop',
                'pluralName': 'Pawn Shops',
                'shortName': 'Pawn Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b23',
                'name': 'Perfume Shop',
                'pluralName': 'Perfume Shops',
                'shortName': 'Perfume Shop',
                
                'categories': []
            },
            {
                'id': '5032897c91d4c4b30a586d69',
                'name': 'Pet Service',
                'pluralName': 'Pet Services',
                'shortName': 'Pet Service',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d100951735',
                'name': 'Pet Store',
                'pluralName': 'Pet Stores',
                'shortName': 'Pet Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10f951735',
                'name': 'Pharmacy',
                'pluralName': 'Pharmacies',
                'shortName': 'Pharmacy',
                
                'categories': []
            },
            {
                'id': '4eb1bdde3b7b55596b4a7490',
                'name': 'Photography Lab',
                'pluralName': 'Photography Labs',
                'shortName': 'Photography Lab',
                
                'categories': []
            },
            {
                'id': '554a5e17498efabeda6cc559',
                'name': 'Photography Studio',
                'pluralName': 'Photography Studios',
                'shortName': 'Photo Studio',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b20',
                'name': 'Piercing Parlor',
                'pluralName': 'Piercing Parlors',
                'shortName': 'Piercing Parlor',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b3d',
                'name': 'Pop-Up Shop',
                'pluralName': 'Pop-Up Shops',
                'shortName': 'Pop-Up Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b28',
                'name': 'Print Shop',
                'pluralName': 'Print Shops',
                'shortName': 'Print Shop',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4c4',
                'name': 'Public Bathroom',
                'pluralName': 'Public Bathrooms',
                'shortName': 'Public Bathroom',
                
                'categories': []
            },
            {
                'id': '5032885091d4c4b30a586d66',
                'name': 'Real Estate Office',
                'pluralName': 'Real Estate Offices',
                'shortName': 'Real Estate',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10d951735',
                'name': 'Record Shop',
                'pluralName': 'Record Shops',
                'shortName': 'Record Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b37',
                'name': 'Recording Studio',
                'pluralName': 'Recording Studios',
                'shortName': 'Recording Studio',
                
                'categories': []
            },
            {
                'id': '4f4531084b9074f6e4fb0101',
                'name': 'Recycling Facility',
                'pluralName': 'Recycling Facilities',
                'shortName': 'Recycling',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573552',
                'name': 'Rental Service',
                'pluralName': 'Rental Services',
                'shortName': 'Rental Service',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d110951735',
                'name': 'Salon / Barbershop',
                'pluralName': 'Salons / Barbershops',
                'shortName': 'Salon / Barbershop',
                
                'categories': []
            },
            {
                'id': '58daa1558bbb0b01f18ec1ae',
                'name': 'Sauna / Steam Room',
                'pluralName': 'Saunas / Steam Rooms',
                'shortName': 'Sauna / Steam Room',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b1f',
                'name': 'Shipping Store',
                'pluralName': 'Shipping Stores',
                'shortName': 'Shipping Store',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b39',
                'name': 'Shoe Repair',
                'pluralName': 'Shoe Repair Shops',
                'shortName': 'Shoe Repair',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fd941735',
                'name': 'Shopping Mall',
                'pluralName': 'Shopping Malls',
                'shortName': 'Mall',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4dc',
                'name': 'Shopping Plaza',
                'pluralName': 'Shopping Plazas',
                'shortName': 'Shopping Plaza',
                
                'categories': []
            },
            {
                'id': '5bae9231bedf3950379f89d2',
                'name': 'Skate Shop',
                'pluralName': 'Skate Shops',
                'shortName': 'Skate Shop',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d573566',
                'name': 'Ski Shop',
                'pluralName': 'Ski Shops',
                'shortName': 'Ski Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d123951735',
                'name': 'Smoke Shop',
                'pluralName': 'Smoke Shops',
                'shortName': 'Smoke Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b41',
                'name': 'Smoothie Shop',
                'pluralName': 'Smoothie Shops',
                'shortName': 'Smoothie Shop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b1b',
                'name': 'Souvenir Shop',
                'pluralName': 'Souvenir Shops',
                'shortName': 'Souvenir Shop',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ed941735',
                'name': 'Spa',
                'pluralName': 'Spas',
                'shortName': 'Spa',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f2941735',
                'name': 'Sporting Goods Shop',
                'pluralName': 'Sporting Goods Shops',
                'shortName': 'Sporting Goods',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b21',
                'name': 'Stationery Store',
                'pluralName': 'Stationery Stores',
                'shortName': 'Stationery Store',
                
                'categories': []
            },
            {
                'id': '4f04b1572fb6e1c99f3db0bf',
                'name': 'Storage Facility',
                'pluralName': 'Storage Facilities',
                'shortName': 'Storage',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4cd',
                'name': 'Supplement Shop',
                'pluralName': 'Supplement Shops',
                'shortName': 'Supplement Shop',
                
                'categories': []
            },
            {
                'id': '5032781d91d4c4b30a586d5b',
                'name': 'Tailor Shop',
                'pluralName': 'Tailor Shops',
                'shortName': 'Tailor',
                
                'categories': []
            },
            {
                'id': '4d1cf8421a97d635ce361c31',
                'name': 'Tanning Salon',
                'pluralName': 'Tanning Salons',
                'shortName': 'Tanning Salon',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1de931735',
                'name': 'Tattoo Parlor',
                'pluralName': 'Tattoo Parlors',
                'shortName': 'Tattoo',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d101951735',
                'name': 'Thrift / Vintage Store',
                'pluralName': 'Thrift / Vintage Stores',
                'shortName': 'Thrift / Vintage',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f3941735',
                'name': 'Toy / Game Store',
                'pluralName': 'Toy / Game Stores',
                'shortName': 'Toys & Games',
                
                'categories': []
            },
            {
                'id': '4f04b08c2fb6e1c99f3db0bd',
                'name': 'Travel Agency',
                'pluralName': 'Travel Agencies',
                'shortName': 'Travel Agency',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b30',
                'name': 'Used Bookstore',
                'pluralName': 'Used Bookstores',
                'shortName': 'Used Bookstore',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d57355c',
                'name': 'Vape Store',
                'pluralName': 'Vape Stores',
                'shortName': 'Vape Store',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d10b951735',
                'name': 'Video Game Store',
                'pluralName': 'Video Game Stores',
                'shortName': 'Video Games',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d126951735',
                'name': 'Video Store',
                'pluralName': 'Video Stores',
                'shortName': 'Video Store',
                
                'categories': []
            },
            {
                'id': '52e816a6bcbc57f1066b7a54',
                'name': 'Warehouse Store',
                'pluralName': 'Warehouse Stores',
                'shortName': 'Warehouse Store',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b2e',
                'name': 'Watch Shop',
                'pluralName': 'Watch Shops',
                'shortName': 'Watch Shops',
                
                'categories': []
            }
        ]
    },
    {
        'id': '4d4b7105d754a06379d81259',
        'name': 'Travel & Transport',
        'pluralName': 'Travel & Transport',
        'shortName': 'Travel',
        'icon': {
            
            

        },
        'categories': [
            {
                'id': '4bf58dd8d48988d1ed931735',
                'name': 'Airport',
                'pluralName': 'Airports',
                'shortName': 'Airport',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1ef931735',
                        'name': 'Airport Food Court',
                        'pluralName': 'Airport Food Courts',
                        'shortName': 'Food Court',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1f0931735',
                        'name': 'Airport Gate',
                        'pluralName': 'Airport Gates',
                        'shortName': 'Gate',
                        'categories': []
                    },
                    {
                        'id': '4eb1bc533b7b2c5b1d4306cb',
                        'name': 'Airport Lounge',
                        'pluralName': 'Airport Lounges',
                        'shortName': 'Lounge',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d57352f',
                        'name': 'Airport Service',
                        'pluralName': 'Airport Services',
                        'shortName': 'Airport Service',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1eb931735',
                        'name': 'Airport Terminal',
                        'pluralName': 'Airport Terminals',
                        'shortName': 'Terminal',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1ec931735',
                        'name': 'Airport Tram',
                        'pluralName': 'Airport Trams',
                        'shortName': 'Tram',
                        'categories': []
                    },
                    {
                        'id': '5744ccdfe4b0c0459246b4e5',
                        'name': 'Baggage Claim',
                        'pluralName': 'Baggage Claims',
                        'shortName': 'Baggage Claim',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1f7931735',
                        'name': 'Plane',
                        'pluralName': 'Planes',
                        'shortName': 'Plane',
                        'categories': []
                    }
                ]
            },
            {
                'id': '5744ccdfe4b0c0459246b4e8',
                'name': 'Baggage Locker',
                'pluralName': 'Baggage Lockers',
                'shortName': 'Baggage Locker',
                
                'categories': []
            },
            {
                'id': '4e4c9077bd41f78e849722f9',
                'name': 'Bike Rental / Bike Share',
                'pluralName': 'Bike Rentals / Bike Shares',
                'shortName': 'Bike',
                
                'categories': []
            },
            {
                'id': '5744ccdfe4b0c0459246b4c1',
                'name': 'Boat Rental',
                'pluralName': 'Boat Rentals',
                'shortName': 'Boat Rental',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d12d951735',
                'name': 'Boat or Ferry',
                'pluralName': 'Boats or Ferries',
                'shortName': 'Boat / Ferry',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b4b',
                'name': 'Border Crossing',
                'pluralName': 'Border Crossings',
                'shortName': 'Border Crossing',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fe931735',
                'name': 'Bus Station',
                'pluralName': 'Bus Stations',
                'shortName': 'Bus Station',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d12b951735',
                        'name': 'Bus Line',
                        'pluralName': 'Bus Lines',
                        'shortName': 'Bus',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b4f',
                'name': 'Bus Stop',
                'pluralName': 'Bus Stops',
                'shortName': 'Bus Stop',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b50',
                'name': 'Cable Car',
                'pluralName': 'Cable Cars',
                'shortName': 'Cable Car',
                
                'categories': []
            },
            {
                'id': '55077a22498e5e9248869ba2',
                'name': 'Cruise',
                'pluralName': 'Cruises',
                'shortName': 'Cruise',
                
                'categories': []
            },
            {
                'id': '589ddde98ae3635c072819ee',
                'name': 'Duty-free Shop',
                'pluralName': 'Duty-free Shops',
                'shortName': 'Duty-free',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f6931735',
                'name': 'General Travel',
                'pluralName': 'General Travel',
                'shortName': 'Travel',
                
                'categories': []
            },
            {
                'id': '56aa371ce4b08b9a8d57356e',
                'name': 'Heliport',
                'pluralName': 'Heliports',
                'shortName': 'Heliport',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fa931735',
                'name': 'Hotel',
                'pluralName': 'Hotels',
                'shortName': 'Hotel',
                
                'categories': [
                    {
                        'id': '4bf58dd8d48988d1f8931735',
                        'name': 'Bed & Breakfast',
                        'pluralName': 'Bed & Breakfasts',
                        'shortName': 'B & B',
                        'categories': []
                    },
                    {
                        'id': '4f4530a74b9074f6e4fb0100',
                        'name': 'Boarding House',
                        'pluralName': 'Boarding Houses',
                        'shortName': 'Boarding',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1ee931735',
                        'name': 'Hostel',
                        'pluralName': 'Hostels',
                        'shortName': 'Hostel',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d132951735',
                        'name': 'Hotel Pool',
                        'pluralName': 'Hotel Pools',
                        'shortName': 'Pool',
                        'categories': []
                    },
                    {
                        'id': '5bae9231bedf3950379f89cb',
                        'name': 'Inn',
                        'pluralName': 'Inns',
                        'shortName': 'Inn',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d1fb931735',
                        'name': 'Motel',
                        'pluralName': 'Motels',
                        'shortName': 'Motel',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12f951735',
                        'name': 'Resort',
                        'pluralName': 'Resorts',
                        'shortName': 'Resort',
                        'categories': []
                    },
                    {
                        'id': '56aa371be4b08b9a8d5734e1',
                        'name': 'Vacation Rental',
                        'pluralName': 'Vacation Rentals',
                        'shortName': 'Vacation Rental',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b4c',
                'name': 'Intersection',
                'pluralName': 'Intersections',
                'shortName': 'Intersection',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fc931735',
                'name': 'Light Rail Station',
                'pluralName': 'Light Rail Stations',
                'shortName': 'Light Rail',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1fd931735',
                'name': 'Metro Station',
                'pluralName': 'Metro Stations',
                'shortName': 'Metro',
                
                'categories': []
            },
            {
                'id': '4f2a23984b9023bd5841ed2c',
                'name': 'Moving Target',
                'pluralName': 'Moving Targets',
                'shortName': 'Moving Target',
                
                'categories': []
            },
            {
                'id': '4e74f6cabd41c4836eac4c31',
                'name': 'Pier',
                'pluralName': 'Piers',
                'shortName': 'Piers',
                
                'categories': []
            },
            {
                'id': '56aa371be4b08b9a8d57353e',
                'name': 'Port',
                'pluralName': 'Ports',
                'shortName': 'Port',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b53',
                'name': 'RV Park',
                'pluralName': 'RV Parks',
                'shortName': 'RV Park',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1ef941735',
                'name': 'Rental Car Location',
                'pluralName': 'Rental Car Locations',
                'shortName': 'Rental Car',
                
                'categories': []
            },
            {
                'id': '4d954b16a243a5684b65b473',
                'name': 'Rest Area',
                'pluralName': 'Rest Areas',
                'shortName': 'Rest Areas',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d1f9931735',
                'name': 'Road',
                'pluralName': 'Roads',
                'shortName': 'Road',
                
                'categories': []
            },
            {
                'id': '53fca564498e1a175f32528b',
                'name': 'Taxi Stand',
                'pluralName': 'Taxi Stands',
                'shortName': 'Taxi Stand',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d130951735',
                'name': 'Taxi',
                'pluralName': 'Taxis',
                'shortName': 'Taxi',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b4d',
                'name': 'Toll Booth',
                'pluralName': 'Toll Booths',
                'shortName': 'Toll Booth',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b4e',
                'name': 'Toll Plaza',
                'pluralName': 'Toll Plazas',
                'shortName': 'Toll Plaza',
                
                'categories': []
            },
            {
                'id': '4f4530164b9074f6e4fb00ff',
                'name': 'Tourist Information Center',
                'pluralName': 'Tourist Information Centers',
                'shortName': 'Tourist Information',
                
                'categories': []
            },
            {
                'id': '4bf58dd8d48988d129951735',
                'name': 'Train Station',
                'pluralName': 'Train Stations',
                'shortName': 'Train Station',
                
                'categories': [
                    {
                        'id': '4f4531504b9074f6e4fb0102',
                        'name': 'Platform',
                        'pluralName': 'Platforms',
                        'shortName': 'Platform',
                        'categories': []
                    },
                    {
                        'id': '4bf58dd8d48988d12a951735',
                        'name': 'Train',
                        'pluralName': 'Trains',
                        'shortName': 'Train',
                        'categories': []
                    }
                ]
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b51',
                'name': 'Tram Station',
                'pluralName': 'Tram Stations',
                'shortName': 'Tram',
                
                'categories': []
            },
            {
                'id': '54541b70498ea6ccd0204bff',
                'name': 'Transportation Service',
                'pluralName': 'Transportation Services',
                'shortName': 'Transportation Services',
                
                'categories': []
            },
            {
                'id': '4f04b25d2fb6e1c99f3db0c0',
                'name': 'Travel Lounge',
                'pluralName': 'Travel Lounges',
                'shortName': 'Lounge',
                
                'categories': []
            },
            {
                'id': '52f2ab2ebcbc57f1066b8b4a',
                'name': 'Tunnel',
                'pluralName': 'Tunnels',
                'shortName': 'Tunnel',
                
                'categories': []
            }
        ]
    }
]
