export class Upload {

    $key?:String;
    file:File;
    name?: String;
    url?: String;
    progress?:Number;
    createdAt:Date = new Date();

    constructor(file:File) {
        this.file = file;
    }


}
