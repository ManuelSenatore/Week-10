export interface Post {
        id:number,
        title: string,
        body: string,
        type: "politics"|"news"|"education",
        date: string,
        liked: boolean,
        active: boolean
}
