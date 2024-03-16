//making a standardized error code, so it can become standard
//error handling ko thoda aur begtar banana using nodeJS error, it provide a class
//API error process streamline ho jaaye
//use gpt for more info
class ApiError extends Error {
    constructor(
        statusCode,
        message= "something went wrong",
        errors= [],
        stack = ""
    ){
        super(message)
        this.statusCode= statusCode
        this.data= null
        this.message= false;
        this.errors= errors

        if(stack) {
            this.stack= stack
        }else{
            Error.captureStackTrace(this, this.
                constructor)
        }
    }
}

export {ApiError}