
export class Book{
    constructor(
        public id: number = 0,
        public title: string ='',
        public author: string = '',
        public description: string = '',
        public image:string = '',
        public emagRating:number = 0,
        public amazonRating: number = 0, 
        public nyRating: number=0
        ){};
}