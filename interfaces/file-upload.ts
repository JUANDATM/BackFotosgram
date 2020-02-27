export interface FileUpload{
    name: string;
    data: any;
    size: String,
    encoding: String ,
    tempFilePath: String ,
    truncated: boolean ,
    mimetype: String ,
    md5: string


    mv: Function;
}