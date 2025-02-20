class ErrorHandler extends Error{
    constructor(message,statuscode){
        supper(message)
        this.statuscode=statuscode;

        Error.captureStackTrace(this,this.constructor)// captureStackatarace will gives main code only  instead on all sub errors .
    }
}
module.exports=ErrorHandler;