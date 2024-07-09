import axios from 'axios';

export const getDataUser = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: "https://66866c4283c983911b023229.mockapi.io/user"
        })
        console.log(res)
    } catch (err) {
        throw new Error(err);
    }
}

