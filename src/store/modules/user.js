import {getDataUser} from "@/apis/user";

const state= () => {
    return {
        userList: [
            {
                "id": 1,
                "name": "Nguyễn Phong Hào",
                "avatar": "https://thepet.vn/wp-content/uploads/2023/05/angry_cat_2-scaled-1-1024x683.webp",
                "age": 23,
                "description": "thân thiện , hoc hỏi nhanh",
                "programmingLanguage": ["JS", "JAVA"],
                "gender": "Nam",
                "type": "ADMIN"
            },
            {
                "id": 2,
                "name": "Phan Thùy Duyên",
                "avatar": "https://media.ultv.edu.vn/files/ngovananh/2023/09/15/giong-meo-canh-de-nuoi-090208.png",
                "age": 22,
                "description": "thân thiện , hoc hỏi nhanh",
                "programmingLanguage": ["PHP", "C#"],
                "gender": "Nữ",
                "type": "CLIENT"
            }
        ],
        searchName : "Phong"

    }
};
const getters = {
    userListByBoy(state) {
        return state.userList.filter(user => user.gender ==="Nam");
    },
    userListBySearchName(state) {
        const {userList, searchName} = state;
        return userList.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase()));
    }
};
const mutations = {
    setSearchNameMutations (state, payloadNewSearchName) {
        state.searchName = payloadNewSearchName;
    },
    addUserMutation (state, payload) {
        state.userList.push(payload);
        // state.userList = [...state.userList, payload];
    },
    removeUserMutation (state, payload) {
        const index = state.userList.findIndex(user => user.id === payload);
        if(index !== -1) {
            state.userList.splice(index, 1);
        }
    },
    updateUserMutation (state, payload) {
        const index = state.userList.findIndex(user => user.id === payload.id);
        if(index !== -1) {
            state.userList[index] = payload;
        }
    },
    testMutation () {
        getDataUser();
    }
};
const actions = {
    getAllUsersActions (context) {
        getDataUser();
        context.commit("testMutation");
    },
    setSearchNameActions (context, payload) {
        context.commit("setSearchNameMutations", payload)
    },
    addUserAction(context, payload) {
        const newUser = {...payload, id: Math.random()};
        context.commit("addUserMutation", newUser);

    },
    handleRemoveAction(context, payload) {
        context.commit("removeUserMutation", payload);
    },
    updateUserAction(context, payload) {
        context.commit("updateUserMutation", payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};