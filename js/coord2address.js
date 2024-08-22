coord2address('128.47566311017596', '35.84292328165031')
    .then((data) => {
        this.displayData(data);
    })
    .catch((error) => {
        console.error(error);
    });

// coord2address2('35.84292328165031', '128.47566311017596', 'kr')
//     .then((data) => {
//         this.displayData2(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// coord2address3('35.84292328165031', '128.47566311017596')
//     .then((data) => {
//         this.displayData3(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// using kakao dev api
function coord2address(x, y){
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        const url = 'https://dapi.kakao.com/v2/local/geo/coord2address?x=' + x + '&y=' + y;

        http.open("GET", url);
        http.setRequestHeader('Authorization', 'KakaoAK 77df4e26e8f06fadc60be1bad97c6dbc');

        http.onload = () => {
            if(http.status == 200) {
                resolve(http.response);
            }else{
                reject(new Error("Failed to fetch data"));
            }
        };

        http.onerror = () => {
            reject(new Error("Network error"));
        };

        http.responseType = 'json';
        http.send();
    })
}

function displayData(data){
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    data = data['documents'][0]['road_address'];

    Object.keys(data).forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = item + ': ' + data[item];
        container.appendChild(itemElement);
    });
}

// using big data cloud api
function coord2address2(lat, lon, lang){
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lon + "&localigyLanguage=" + lang;

        http.open("GET", url);

        http.onload = () => {
            if(http.status == 200) {
                resolve(http.response);
            }else{
                reject(new Error("Failed to fetch data"));
            }
        };

        http.onerror = () => {
            reject(new Error("Network error"));
        };

        http.responseType = 'json';
        http.send();
    })
}

function displayData2(data){
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    console.log(data);
    data = data['localityInfo']['administrative'];

    data.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = item['name'];
        container.appendChild(itemElement);
    });
}

// using osm nominatim api
function coord2address3(lat, lon){
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        const url = 'https://nominatim.openstreetmap.org/reverse?lat=' + lat + '&lon=' + lon + '&format=json';

        http.open("GET", url);

        http.onload = () => {
            if(http.status == 200){
                resolve(http.response);
            }else{
                reject(new Error("Failed to fetch data"));
            }
        };

        http.onerror = () => {
            reject(new Error("Network error"));
        };

        http.responseType = 'json';
        http.send();
    })
}

function displayData3(data){
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    
    console.log(data);
    data = data['address'];

    Object.keys(data).forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = item + ": " + data[item];
        container.appendChild(itemElement);
    });
}