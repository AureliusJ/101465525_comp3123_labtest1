const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const successMessage = { 'message': 'delayed success!' };
            resolve(successMessage);
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            const errorMessage = new Error('error: delayed exception!');
            reject(errorMessage);
        }, 500);
    });
}


resolvedPromise()
    .then(success => console.log(success))
    .catch(error => console.error(error));


rejectedPromise()
    .then(success => console.log(success))
    .catch(error => console.error(error));
