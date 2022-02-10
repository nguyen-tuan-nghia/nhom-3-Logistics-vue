<template>
        <div class="container-fluid">
            <!-- Page Heading -->
            <div
                class="d-sm-flex align-items-center justify-content-between mb-4"
            >
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                    href="#"
                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    ><i class="fas fa-download fa-sm text-white-50"></i>
                    Generate Report</a
                >
            </div>

            <!-- Content Row -->
            <div class="row" v-show="dashboard">
                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div
                                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                                    >
                                        All order
                                    </div>
                                    <div
                                        class="h5 mb-0 font-weight-bold text-gray-800"
                                    >
                                        {{ allorderSum }}
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i
                                        class="fas fa-calendar fa-2x text-gray-300"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div
                                        class="text-xs font-weight-bold text-success text-uppercase mb-1"
                                    >
                                        All COD
                                    </div>
                                    <div
                                        class="h5 mb-0 font-weight-bold text-gray-800"
                                    >
                                        {{ allcodSum |moneyFormat }} VND
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i
                                        class="fas fa-dollar-sign fa-2x text-gray-300"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Earnings (Monthly) Card Example -->
                <!-- <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div
                                        class="text-xs font-weight-bold text-info text-uppercase mb-1"
                                    >
                                        Tasks
                                    </div>
                                    <div
                                        class="row no-gutters align-items-center"
                                    >
                                        <div class="col-auto">
                                            <div
                                                class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                                            >
                                                50%
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div
                                                class="progress progress-sm mr-2"
                                            >
                                                <div
                                                    class="progress-bar bg-info"
                                                    role="progressbar"
                                                    style="width: 50%"
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i
                                        class="fas fa-clipboard-list fa-2x text-gray-300"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- Pending Requests Card Example -->
                <!-- <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div
                                        class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                                    >
                                        Pending Requests
                                    </div>
                                    <div
                                        class="h5 mb-0 font-weight-bold text-gray-800"
                                    >
                                        18
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i
                                        class="fas fa-comments fa-2x text-gray-300"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>

        <!-- Content Row -->

        <div class="row" v-show="dashboard">
            <div class="card" style="margin-left: 20px">
                <div class="card-header">Statistics</div>
                <div class="card-body">
                    <v-row style="padding-left: 50px">
                        <v-col class="d-flex" sm="4">
                            <v-select
                                v-model="itemsday"
                                :items="items"
                                label="Date"
                                @change="findSelect"
                            ></v-select>
                        </v-col>
                        <v-col sm="3" md="3">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date"
                                        label="From data"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menu.save(date)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col sm="3" md="3">
                            <v-menu
                                ref="menu2"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :return-value.sync="date2"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date2"
                                        label="To date"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date2"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu2 = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menu2.save(date2)"
                                        v-on:click="findDate"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <line-chart
                        :chart-data="datacollection"
                        :height="160"
                        style="width: 1200px; padding: 20px"
                    ></line-chart>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>COD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ orderSum }}</td>
                                <td>{{ codSum|moneyFormat }} VND</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LineChart from "./LineChart.js";

export default {
    components: {
        LineChart,
    },
    data() {
        return {
            datacollection: null,
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            menu: false,
            menu2: false,
            itemsday: 7,
            items: [7,14,28,48,90],
            orderSum: 0,
            codSum: 0,
            allorderSum: 0,
            allcodSum: 0,
            dashboard:false
        };
    },
    mounted() {
        this.getauth();
        this.fillData();
        this.fillall();
    },
    methods: {
        getauth() {
            this.axios
                .get("/api/customer/auth")
                .then((res) => {
                    console.log(res.data);
                    for (let n in res.data) {
                        if (
                            res.data[n].name == "View_dashboard") {
                            this.dashboard = true;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        fillall(){
            this.axios.get('/api/customer/statistic/fillall').then(res=>{
                console.log(res);
                this.allorderSum=res.data.order;
                this.allcodSum=res.data.cod;
                this.allfeeshipSum=res.data.feeship;
            }).catch(err=>{
                console.log(err);
            })
        },
        fillData() {
            this.orderSum = 0;
            this.codSum = 0;
            let date = new Array();
            let cod = new Array();
            let order = new Array();
            this.axios
                .get("/api/customer/statistic")
                .then((res) => {
                    console.log(res.data);
                    res.data.forEach((element) => {
                        date.push(element.date);
                        cod.push(element.cod);
                        order.push(element.order);
                        this.orderSum += element.order;
                        this.codSum += element.cod;
                    });
                    this.datacollection = {
                        labels: date,
                        datasets: [
                            {
                                label: "Order",
                                backgroundColor: "#FF0066",
                                data: order,
                            },
                            {
                                label: "Cod",
                                backgroundColor: "#03fcc2",
                                data: cod,
                            },
                        ],
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        findSelect() {
            let date = new Array();
            let cod = new Array();
            let order = new Array();
            this.orderSum = 0;
            this.codSum = 0;
            this.axios
                .post("/api/customer/statistic/findSelect", {
                    day: this.itemsday,
                })
                .then((res) => {
                    console.log(res.data);
                    res.data.forEach((element) => {
                        date.push(element.date);
                        cod.push(element.cod);
                        order.push(element.order);
                        this.orderSum += element.order;
                        this.codSum += element.cod;
                    });
                    this.datacollection = {
                        labels: date,
                        datasets: [
                            {
                                label: "Order",
                                backgroundColor: "#FF0066",
                                data: order,
                            },
                            {
                                label: "Cod",
                                backgroundColor: "#03fcc2",
                                data: cod,
                            },
                        ],
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        findDate(){
            let date = new Array();
            let cod = new Array();
            let order = new Array();
            this.orderSum = 0;
            this.codSum = 0;
            this.axios
                .post("/api/customer/statistic/findDate", {
                    date:this.date,date2:this.date2
                })
                .then((res) => {
                    console.log(res.data);
                    res.data.forEach((element) => {
                        date.push(element.date);
                        cod.push(element.cod);
                        order.push(element.order);
                        this.orderSum += element.order;
                        this.codSum += element.cod;
                    });
                    this.datacollection = {
                        labels: date,
                        datasets: [
                            {
                                label: "Order",
                                backgroundColor: "#FF0066",
                                data: order,
                            },
                            {
                                label: "Cod",
                                backgroundColor: "#03fcc2",
                                data: cod,
                            },
                        ],
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
</script>
