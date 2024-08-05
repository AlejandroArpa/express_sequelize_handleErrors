
type ErrorType = 'Validation Error' | 'Database Error' | 'Service Error'| 'notNull Violation' | 'Cannot add or update a child row';

const errorMapping: Record<ErrorType, {statusCode: number; message: string }>  = {
	'Validation Error' : { statusCode: 400, message: 'Invalid input data' },
	'Database Error': { statusCode: 500, message: 'Internal server error' },
	'Service Error': { statusCode: 500, message: 'Service error' },
	'notNull Violation': { statusCode: 400, message: 'Invalid input data' },
	'Cannot add or update a child row' : { statusCode: 400, message: 'Invalid input data' }
};

function mapErrorToResponse(error: Error) {
	console.log(error.message);
	
	const errorKey = error.message.split(': ')[1] as ErrorType;
	const table = error.message.split(': ')[2]?.split('.')[0];
	const field = error.message.split(': ')[2]?.split('.')[1];
	let mappedError = {statusCode: 500, message: ''};
	mappedError = {...errorMapping[errorKey]};
	if(mappedError.statusCode){
		mappedError.message = `${mappedError.message} on ${table} table, ${field}`;
		return mappedError 
	}
	else {
		return {statusCode: 500, message: 'Internal server error'};
	}
}

export { mapErrorToResponse };