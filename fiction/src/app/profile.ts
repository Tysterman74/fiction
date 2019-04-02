export class Profile {
    id: number;
    name: string;
    profileUrl: string;
    description: string;
}

export class UserResponse {
    results: User[]
}

export class User {
    name: Name
    picture: Picture
}

export class Name {
    first: string
    last: string
    title: string
}

export class Picture {
    large: string
    medium: string
    thumbnail: string
}