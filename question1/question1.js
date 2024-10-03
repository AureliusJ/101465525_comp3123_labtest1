function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input is not an array');
        } else {
            const wordsArray = mixedArray
                .filter(item => typeof item === 'string')  
                .map(word => word.toLowerCase());          
            resolve(wordsArray);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings', 'JAson', 'P1zza'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.log(error));