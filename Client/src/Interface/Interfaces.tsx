export interface IUser{
    username : string,
    password : string,
    image : string

}

export interface IComment {
    content : string
    author : IUser[]
}

export interface IPuzzels {
    title : string,
    content : string,
    author : IUser[],
    comments : IComment []
}

