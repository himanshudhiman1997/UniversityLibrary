export class book
{
    public name: string;
    public volume: number;
    public author: string;
    public description: string;
    public version: number;
    public price: number;
    public subjectCategory: string;
    public entryDate: any;
    constructor(title: string,author: string, entryDate?: any){
        this.name = title;
        this.author = author;
        this.entryDate = entryDate;
    }
}
