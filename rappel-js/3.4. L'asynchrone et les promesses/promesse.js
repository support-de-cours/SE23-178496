function getData() {

    console.info("2. > Call getData() function");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.info("4. > getData() generate the response and call the resolve() method.");

            const data = 21+21;
            resolve(data);
        }, 2000);
    });
}

console.info("1. > start");

getData()
    .then(result => {
        console.log("5.a. > Receive the response of getData()");
        console.log(`6. > Universal response is ${result}`);
    })
    .catch(error => {
        console.log("5.b. > Receive an error of getData()");
        console.error(error);
    });


console.info("3. > Script end");
