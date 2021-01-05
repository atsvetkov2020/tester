export {};
class apiAnswer{
    public success:boolean;
    public code:number;
    public message:string;
    public data:object;
    public error:object;

    constructor(success: boolean, code:number, message:string, data:object, error:object){
        this.success = typeof success !== 'undefined' ? success : false;
        this.code = typeof code !== 'undefined' ? code : 500;
        this.message = typeof message !== 'undefined' ? message : '';
        this.data = typeof data !== 'undefined' ? data : {};
        this.error = typeof error !== 'undefined' ? error : {};
    }
}