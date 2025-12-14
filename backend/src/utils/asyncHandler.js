const asyncHandler = (fn) => async (req, res, next) => {
    try {
        return await fn(req, res, next);
    } catch (error) {
        // console.error('ERROR in handler:', error); // Optional logging
        
        let status = error.statusCode || error.code || 500;

        // Safety check to ensure status is a valid HTTP code
        if (typeof status !== 'number' || status < 100 || status > 599) {
            status = 500;
        }
        
        res.status(status).json({
            success: false,
            message: error.message || 'Internal Server Error',
            errors: error.errors || [] // Include validation errors if any
        });
    }
};

export { asyncHandler };