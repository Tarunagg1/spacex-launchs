let name = "tracking";
let url = "url";


export const getLocalStorage = () => {
    return localStorage.getItem(name) ? localStorage.getItem(name) : [];
}

export const updateLocalStorage = (data) => {
    localStorage.setItem(name, data)
}
// Request URL: https://api.spacexdata.com/v3/launches?limit=100&launch_year=2007
// Request URL: https://api.spacexdata.com/v3/launches?limit=100&launch_year=2007&launch_success=false
// Request URL: https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&landing_success=true

export const getLocalStorageUrl = () => {
    return localStorage.getItem(url) ? localStorage.getItem(url) : null;
}

export const updateLocalStorageUrl = (data) => {
    localStorage.setItem(url, data)
}



