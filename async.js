//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise)

fetchPromise.then( response => {
    console.log(`Received response: ${response.status}`);

});

console.log("Started request...");





//2


console.log(fetchPromise)

fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json();
    })
    .then( json => {
        console.log(json[0].name);
    })
    .catch( error => {
        console.error(`Could not get products: ${error}`);
    });

//multiple promises

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then( responses => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch( error => {
        console.error(`Failed to fetch: ${error}`)
    });

//async await
async function fetchProducts() {
    try {
        const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json;

    }
    catch(error) {
        console.error(`Could not get products: ${error}`);
    }
}

const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name));
