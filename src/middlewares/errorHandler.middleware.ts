import { Request, Response, NextFunction } from 'express';
import { mapErrorToResponse } from '../utilities/errorMapping.utility';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const { statusCode, message } = mapErrorToResponse(err);
    return res.status(statusCode).json({ message });
}

export { errorHandler };