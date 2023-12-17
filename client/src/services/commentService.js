import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3030/data/comments';
const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments`


export const getAll = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `owner=_ownerId:users`,
        // load: `owner=_ownerId:users,username=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getOne = async (commentId) => {
    const result = await request.get(`${baseUrl}/${commentId}`,);
    // console.log("CommentID: ", commentId);
    // console.log("Comment Reply from backend: ", result);
    return result;
}

export const create = async (carId, text) => {
    const newComment = await request.post(baseUrl, {
        carId,
        text,
    });

    return newComment;
};

export const patch = async (commentId, text) => {
    try {
        const editComment = await request.patch(`${baseUrl}/${commentId}`, {
            text,
        });

        return editComment;
    } catch (err) {
        console.log('Edit of comment error: ', err);
    }

};

export const remove = async (commentId) => request.remove(`${baseUrl}/${commentId}`);