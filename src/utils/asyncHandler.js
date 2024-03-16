// with promises with .then 
const asyncHandler = (requestHandler) => {
    (res, req, next) => { //this arrow function is implicitly returned by asyncHandler
        Promise.resolve(requestHandler(req, res, next)). //promise is manually invoked,and resolved, search on chatgpt for more
        catch((err) => next(err)) //this promise will either resolve or reject/catch, 
    }
}

export {asyncHandler}









//with try catch

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (func) => async (req, res , next) => { //next for middleware, we can also include err also
//     try { //async (req, res , next) this function is returned by asyncHandler, it's a implicit return, because it's a single expression
//         await func(req, res, next)
//     } catch (error) { //status ke ander error code, agar user pass ker rha he, to err.code, warna 500 ya 400
//         res.status(err.code || 500).json({
//             success: false, // sending sucess messagee ki false he ya true
//             message: err.message //sendint the message
//         })
//     }
// }