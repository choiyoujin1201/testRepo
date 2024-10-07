address2coord2('연암공원로 10')
    .then((data) => {
        this.displayData2(data);
    })
    .catch((error) => {
        console.error(error);
    });

// using kakao dev api
function address2coord(address){
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        const url = 'https://dapi.kakao.com/v2/local/search/address.json?query=' + address;

        http.open("GET", url);
        http.setRequestHeader('Authorization', 'KakaoAK 77df4e26e8f06fadc60be1bad97c6dbc');

        http.onload = () => {
            if(http.status == 200){
                resolve(http.response);
            }else{
                reject(new Error('Failed to fetch data.'));
            }
        };

        http.onerror = () => {
            reject(new Error('Network error'));
        };

        http.responseType = 'json';
        http.send();
    })
}

function displayData(data){
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    data = data['documents'][0]['address'];

    lat = data['y'];
    lon = data['x'];

    const latElement = document.createElement('p');
    latElement.innerText = 'latitude: ' + lat;
    container.appendChild(latElement);

    const lonElement = document.createElement('p');
    lonElement.innerText = 'longitude: ' + lon;
    container.appendChild(lonElement);
}

// using osm nominatim api
function address2coord2(address){
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        const url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + address;

        http.open('GET', url);

        http.onload = () => {
            if(http.status == 200){
                resolve(http.response);
            }else{
                reject(new Error('Failed to fetch data'));
            }
        };

        http.onerror = () => {
            reject(new Error('Network error'));
        };
    
        http.responseType = 'json';
        http.send();
    })
}

function displayData2(data){
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    console.log(data);

    data = data[0];

    lat = data.lat;
    lon = data.lon

    const latElement = document.createElement('p');
    latElement.innerText = 'latitude: ' + lat;
    container.appendChild(latElement);

    const lonElement = document.createElement('p');
    lonElement.innerText = 'longitude: ' + lon;
    container.appendChild(lonElement);
}
