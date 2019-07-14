export class Profile {
// tslint:disable-next-line: variable-name
constructor(public avatar_url: string, public name: string, public url: string,
            // tslint:disable-next-line: variable-name
            public bio: string, public location: string, public public_repos: number,
            // tslint:disable-next-line: variable-name
            public followers: number, public following: number, public created_at: Date) {}
}
