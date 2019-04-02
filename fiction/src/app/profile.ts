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
}

export class Name {
    first: string
    last: string
    title: string
}