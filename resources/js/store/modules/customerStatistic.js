import axios from "axios";
export default {
    namespaced: true,
    state: {
        allcustomerStatistic: [],
        allcustomerStatisticID: [],
    },
    getters: {
        GetAllcustomerStatistic(state) {
            return state.allcustomerStatistic;
        },
        GetAllcustomerStatisticID(state) {
            return state.allcustomerStatisticID;
        },
    },
    actions: {
        GetAllcustomerStatistic({ commit }) {
            axios
                .get("/api/customerStatistic/index")
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllcustomerStatistic", res.data.data_all);
                    commit("GetAllcustomerStatisticID", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getPagecustomerStatistic({ commit }, page) {
            axios
                .get("/api/customerStatistic/index?page=" + page)
                .then((res) => {
                    commit("GetAllcustomerStatistic", res.data.data_all);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        searchItem({ commit }, playload) {
            console.log(playload);
            axios
                .get("/api/customerStatistic/index", { params: playload })
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllcustomerStatistic", res.data.data_all);
                    commit("GetAllcustomerStatisticID", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mutations: {
        GetAllcustomerStatistic(state, data) {
            return (state.allcustomerStatistic = data);
        },
        GetAllcustomerStatisticID(state, data) {
            return (state.allcustomerStatisticID = data);
        },
    },
};
