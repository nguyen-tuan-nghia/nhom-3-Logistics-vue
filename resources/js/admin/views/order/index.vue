<template>
        <div class="container-fluid">
            <div class="mx-auto">
                <div class="card">
                    <div class="card-header">List Order</div>
                    <div class="card-body">
                        <v-row>
                            <v-col> </v-col>
                            <v-col sm="2" md="2">
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
                            <v-col sm="2" md="2">
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
                            <v-col class="d-flex" sm="1">
                                <v-select
                                    v-model="groupBy"
                                    :items="items"
                                    label="Group by"
                                ></v-select>
                            </v-col>
                            <v-col sm="3">
                                <v-text-field
                                    v-model="search"
                                    label="search"
                                    @input="searchitem"
                                    :disabled="groupBy == ''"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <div
                            class="card"
                            v-for="(Order, index) in GetAllOrder.data"
                            :key="index"
                            style=""
                        >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <h5 class="card-title">
                                            <span>ID: {{ Order.id }}</span>
                                        </h5>
                                        <p>
                                            Sender: name: {{ Order.to_name }} -
                                            phone: {{ Order.to_phone }}
                                        </p>
                                        <p>
                                            Recipient: name:
                                            {{ Order.to_name }} - phone:
                                            {{ Order.to_phone }}
                                        </p>
                                        <p class="card-text">
                                            Send from address:
                                            <span>{{
                                                Order.from_city_name
                                            }}</span>
                                            /<span>{{
                                                Order.from_district_name
                                            }}</span>
                                            /<span>{{
                                                Order.from_wards_name
                                            }}</span>
                                            /<span>{{
                                                Order.from_address
                                            }}</span>
                                        </p>
                                        <p>
                                            Send to address:
                                            <span>{{
                                                Order.to_city_name
                                            }}</span>
                                            /<span>{{
                                                Order.to_district_name
                                            }}</span>
                                            /<span>{{
                                                Order.to_wards_name
                                            }}</span>
                                            /<span>{{ Order.to_address }}</span>
                                        </p>
                                        <v-btn @click="chnageStatus(Order)"
                                            >Receive</v-btn
                                        >
                                    </div>
                                    <div class="col">
                                        <v-icon @click="detailorder(Order)"
                                            >mdi-pencil</v-icon
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li
                                    class="page-item"
                                    :class="{
                                        disabled:
                                            GetAllOrder.prev_page_url == null,
                                    }"
                                >
                                    <a
                                        @click="
                                            PageChange(
                                                GetAllOrder.current_page - 1
                                            )
                                        "
                                        class="page-link"
                                        >Previous</a
                                    >
                                </li>
                                <li
                                    v-for="n in GetAllOrder.last_page"
                                    :key="n"
                                    class="page-item"
                                    :class="{
                                        active: GetAllOrder.current_page == n,
                                    }"
                                    aria-current="page"
                                >
                                    <a
                                        class="page-link"
                                        @click="PageChange(n)"
                                        >{{ n }}</a
                                    >
                                </li>
                                <li
                                    class="page-item"
                                    :class="{
                                        disabled:
                                            GetAllOrder.next_page_url == null,
                                    }"
                                >
                                    <a
                                        @click="
                                            PageChange(
                                                GetAllOrder.current_page + 1
                                            )
                                        "
                                        class="page-link"
                                        href="#"
                                        >Next</a
                                    >
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <v-dialog v-model="dialog" width="500">
                <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                        Order detail
                    </v-card-title>

                    <v-card-text>
                        <h5 class="card-title">
                            <span>ID: {{ detail.id }}</span>
                        </h5>
                        <p>
                            Sender: name: {{ detail.to_name }} - phone:
                            {{ detail.to_phone }}
                        </p>
                        <p>
                            Recipient: name:
                            {{ detail.to_name }} - phone:
                            {{ detail.to_phone }}
                        </p>
                        <p class="card-text">
                            Send from address:
                            <span>{{ detail.from_city_name }}</span>
                            /<span>{{ detail.from_district_name }}</span> /<span
                                >{{ detail.from_wards_name }}</span
                            >
                            /<span>{{ detail.from_address }}</span>
                        </p>
                        <p>
                            Send to address:
                            <span>{{ detail.to_city_name }}</span>
                            /<span>{{ detail.to_district_name }}</span> /<span
                                >{{ detail.to_wards_name }}</span
                            >
                            /<span>{{ detail.to_address }}</span>
                        </p>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Weight</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in items" :key="index">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.weight }}</td>
                                    <td>{{ item.quantity }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Total weight: {{ detail.total_weight }}</p>
                        <p>
                            Total fee: {{ detail.total_fee | moneyFormat }} VND
                        </p>
                        <p>COD: {{ detail.cod | moneyFormat }} VND</p>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="chnageStatus(detail)"
                        >
                            Receive
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
</template>
<script>
export default {
    data() {
        return {
            selected: [],
            isSelectedAll: false,
            items: ["id"],
            selectPomission: "",
            search: "",
            groupBy: "",
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            menu: false,
            menu2: false,
            dialog: false,
            detail: {
                id: "",
                from_name: "",
                from_phone: "",
                to_name: "",
                to_phone: "",
                from_city_name: "",
                from_district_name: "",
                from_wards_name: "",
                from_address: "",
                to_city_name: "",
                to_district_name: "",
                to_wards_name: "",
                to_address: "",
                total_weight: "",
                total_fee: "",
                cod: "",
            },
            items: [],
        };
    },
    mounted() {
        this.$store.dispatch("order/ShipperGetAllOrder");
    },
    computed: {
        GetAllOrder() {
            return this.$store.getters["order/GetAllOrder"];
        },
    },
    methods: {
        chnageStatus(order) {
            this.axios
                .post("/api/order/Receive", { id: order.id })
                .then((res) => {
                    this.dialog=false;
                    this.GetAllOrder.data=this.GetAllOrder.data.filter(obj=>{
                        return obj.id!=order.id;
                    })
                    this.flashMessage.success({
                        title: "Message",
                        message: "Receive successfully",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    if(err.response.status==422){
                    this.flashMessage.error({
                        title: "message",
                        message: `Receive faild1, ${err.response.data.errors.message[0]}`,
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                    }
                });
        },
        findDate() {
            const playload = { date: this.date, date2: this.date2 };
            this.$store.dispatch("order/ShippersearchDate", playload);
        },
        searchitem() {
            const playload = { groupBy: this.groupBy, search: this.search };
            this.$store.dispatch("order/ShippersearchItem", playload);
        },
        PageChange(page) {
            this.$store.dispatch("order/ShippergetPageOrder", page);
        },
        detailorder(order) {
            this.dialog = true;
            this.detail.id = order.id;
            this.detail.from_name = order.from_name;
            this.detail.from_phone = order.from_phone;
            this.detail.to_name = order.to_name;
            this.detail.to_phone = order.to_phone;
            this.detail.from_city_name = order.from_city_name;
            this.detail.from_district_name = order.from_district_name;
            this.detail.from_wards_name = order.from_wards_name;
            this.detail.from_address = order.from_address;
            this.detail.to_city_name = order.to_city_name;
            this.detail.to_district_name = order.to_district_name;
            this.detail.to_wards_name = order.to_wards_name;
            this.detail.to_address = order.to_address;
            this.detail.total_weight = order.total_weight;
            this.detail.total_fee = order.total_fee;
            this.detail.cod = order.cod;
            this.axios
                .get(`/api/shipper/order/detail/${order.id}`)
                .then((res) => {
                    this.items = res.data;
                })
                .catch((err) => {});
        },
    },
};
</script>
<style scoped>
.status {
    color: white;
    border-radius: 25px;
    padding: 10px;
}
</style>
