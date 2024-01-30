const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        return Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    }
}



/** Another approach  */
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }