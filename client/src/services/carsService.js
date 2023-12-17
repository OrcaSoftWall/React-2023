import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/data/cars'
const baseUrl = `${import.meta.env.VITE_API_URL}/data/cars`


export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (carId) => {
    const query = new URLSearchParams({
        // where: `carId="${carId}"`,
        load: `owner=_ownerId:users`,
        // load: `owner=_ownerId:users,username=_ownerId:users`,
    })
    const result = await request.get(`${baseUrl}/${carId}?${query}`,);

    return result;
}

export const getLatest = async (amountOfCars) => {
    const query = new URLSearchParams({
        // sortBy: decodeURIComponent(`_createdOn desc`),
        offset: 0,
        pageSize: amountOfCars
    })

    const result = await request.get(`${baseUrl}?sortBy=_createdOn a&${query}`,);   // a or desc
    return result;
}

export const getMyCars = async (userId, amountOfCars) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        offset: 0,
        pageSize: amountOfCars
    })

    const result = await request.get(`${baseUrl}?${query}`,);   
    return result;
}

export const create = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
};

export const edit = async (carId, carData) => {
    const result = await request.put(`${baseUrl}/${carId}`, carData);

    return result;
};

export const remove = async (carId) => request.remove(`${baseUrl}/${carId}`)

