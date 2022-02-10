import axios from "axios";
export default {
    namespaced: true,
    state: {
        allOrder: [],
        allOrderID: [],
    },
    getters: {
        GetAllOrder(state) {
            return state.allOrder;
        },
        GetAllOrderID(state) {
            return state.allOrderID;
        },
    },
    actions: {
        GetAllOrder({ commit }) {
            axios
                .get("/api/order/index")
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllOrder", res.data.data_all);
                    commit("GetAllOrderID", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getPageOrder({ commit }, page) {
            axios
                .get("/api/order/index?page=" + page)
                .then((res) => {
                    commit("GetAllOrder", res.data.data_all);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        searchItem({ commit }, playload) {
            console.log(playload);
            axios
                .get("/api/order/index", { params: playload })
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllOrder", res.data.data_all);
                    commit("GetAllOrderID", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        searchDate({ commit }, playload) {
            console.log(playload);
            axios
                .get("/api/order/findDate", { params: playload })
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllOrder", res.data.data_all);
                    commit("GetAllOrder", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        ShipperGetAllOrder({ commit }) {
            axios
                .get("/api/shipper/allorder/index")
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllOrder", res.data.data_all);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        ShippergetPageOrder({ commit }, page) {
            axios
                .get("/api/shipper/allorder/index?page=" + page)
                .then((res) => {
                    commit("GetAllOrder", res.data.data_all);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        ShippersearchItem({ commit }, playload) {
            console.log(playload);
            axios
                .get("/api/shipper/allorder/index", { params: playload })
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllOrder", res.data.data_all);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        ShippersearchDate({ commit }, playload) {
            console.log(playload);
            axios
                .get("/api/shipper/allorder/findDate", { params: playload })
                .then((res) => {
                    console.log(res.data);
                    commit("GetAllOrder", res.data.data_all);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mutations: {
        GetAllOrder(state, data) {
            return (state.allOrder = data);
        },
        GetAllOrderID(state, data) {
            return (state.allOrderID = data);
        },
    },
};
