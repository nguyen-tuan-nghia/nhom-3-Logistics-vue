<template>
  <v-app
    ><v-content>
      <div class="mx-auto">
        <div class="card">
          <div class="card-header">List Order</div>
          <div class="card-body">
            <v-row>
              <v-col>
                <a @click="deleteChecked"><v-icon>mdi-delete</v-icon>Delete</a>
              </v-col>
              <v-col>
                <a class="btn btn-green" :class="{disabled:selected.length==0}" :href="url"><v-icon>mdi-export</v-icon>Export xlsx</a>
              </v-col>
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
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
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
                  <v-date-picker v-model="date2" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">
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
            <table class="table" id="pdf">
              <thead>
                <tr>
                  <th scope="col">
                    <v-checkbox
                      :label="null"
                      @change="checkAll"
                      v-model="isSelectedAll"
                    ></v-checkbox>
                  </th>
                  <th>Number</th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">address</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created at</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(Order, index) in GetAllOrder.data" :key="index">
                  <td>
                    <div class="form-check">
                      <input
                        v-model="selected"
                        class="form-check-input"
                        type="checkbox"
                        :value="Order.id"
                        @change="select"
                      />
                    </div>
                  </td>
                  <td>
                    {{ (GetAllOrder.from + index) | minus }}
                  </td>
                  <td>{{ Order.id }}</td>
                  <td>
                    {{ Order.to_name }}
                  </td>
                  <td>
                    {{ Order.to_phone }}
                  </td>
                  <td>
                    <span>{{ Order.to_city_name }}</span>
                    /<span>{{ Order.to_district_name }}</span> /<span>{{
                      Order.to_wards_name
                    }}</span>
                    /<span>{{ Order.to_address }}</span>
                  </td>
                  <td>
                    <div v-if="Order.status == 0">
                      <div class="status yellow">Processing</div>
                    </div>
                    <div v-else-if="Order.status == 1">
                      <div class="status blue">Accept</div>
                    </div>
                    <div v-else-if="Order.status == 2">
                      <div class="status orange">Delivering</div>
                    </div>
                    <div v-else-if="Order.status == 3">
                      <div class="status green">Delivery successful</div>
                    </div>
                    <div v-else-if="Order.status == 4">
                      <div class="status red">Refund</div>
                    </div>
                  </td>
                  <td>{{ Order.created_at | dateformat }}</td>
                  <td v-if="Order.status != 0">
                    <a @click="shipperdetail(Order)">Shipper info</a>
                  </td>
                  <td><a @click="print(Order)">print</a></td>
                  <td>
                    <a @click="detailorder(Order)">Order detail</a>
                  </td>
                  <td v-if="Order.status == 0 || Order.status == 4">
                    <router-link
                      :to="{
                        name: 'editOrder',
                        params: { id: Order.id },
                      }"
                      ><v-icon>mdi-pencil</v-icon></router-link
                    >
                  </td>
                  <td v-if="Order.status == 0 || Order.status == 4">
                    <a @click="deleteOrder(Order)"
                      ><v-icon>mdi-delete</v-icon></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="...">
              <ul class="pagination">
                <li
                  class="page-item"
                  :class="{
                    disabled: GetAllOrder.prev_page_url == null,
                  }"
                >
                  <a
                    @click="PageChange(GetAllOrder.current_page - 1)"
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
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li
                  class="page-item"
                  :class="{
                    disabled: GetAllOrder.next_page_url == null,
                  }"
                >
                  <a
                    @click="PageChange(GetAllOrder.current_page + 1)"
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
      <v-dialog v-model="dialog" width="500" id="GFG">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Order detail
          </v-card-title>

          <v-card-text>
            <h5 class="card-title">
              <span>ID: {{ detail.id }}</span>
            </h5>
            <p>
              Sender: name: {{ detail.form_name }} - phone:
              {{ detail.from_phone }}
            </p>
            <p>
              Recipient: name:
              {{ detail.to_name }} - phone:
              {{ detail.to_phone }}
            </p>
            <p class="card-text">
              Send from address:
              <span>{{ detail.from_city_name }}</span>
              /<span>{{ detail.from_district_name }}</span> /<span>{{
                detail.from_wards_name
              }}</span>
              /<span>{{ detail.from_address }}</span>
            </p>
            <p>
              Send to address:
              <span>{{ detail.to_city_name }}</span>
              /<span>{{ detail.to_district_name }}</span> /<span>{{
                detail.to_wards_name
              }}</span>
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
                <tr v-for="(item, index) in items_detail" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.weight }}</td>
                  <td>{{ item.quantity }}</td>
                </tr>
              </tbody>
            </table>
            <p>Total weight: {{ detail.total_weight }}</p>
            <p>Total fee: {{ detail.total_fee | moneyFormat }} VND</p>
            <p>COD: {{ detail.cod | moneyFormat }} VND</p>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Shipper info
          </v-card-title>
          <v-card-text>
            <p><strong>Name: </strong>{{ shipper.name }}</p>
            <p><strong>Phone: </strong>{{ shipper.phone }}</p>
          </v-card-text>
          <v-divider></v-divider>
        </v-card> </v-dialog
    ></v-content>
  </v-app>
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
      getship: [],
      dialog: false,
      dialog2: false,
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
      items_detail: [],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      menu2: false,
      shipper: {
        name: "",
        phone: "",
      },
      url:""
    };
  },
  mounted() {
    this.$store.dispatch("order/GetAllOrder");
  },
  computed: {
    GetAllOrder() {
      return this.$store.getters["order/GetAllOrder"];
    },
    GetAllOrderID() {
      return this.$store.getters["order/GetAllOrderID"];
    },
  },
  watch:{
      selected(){
          this.url="/api/customer/order/export/"+this.selected;
      }
  },
  methods: {
    print(order) {
        order.total_fee=order.total_fee.toString();
            order.total_fee=order.total_fee.replace(/[^\d]/g, "");
            order.total_fee=order.total_fee.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            order.cod=order.cod.toString();
            order.cod=order.cod.replace(/[^\d]/g, "");
            order.cod=order.cod.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      this.axios
        .get(`/api/customer/order/detail/${order.id}`)
        .then((res) => {

          this.items_detail = res.data;
          var a = window.open("", "", "height=1000, width=1000");
          a.document.write("<html><head>");
          a.document.write("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'>");
          a.document.write("</head>");
        a.document.write("<body><div style='margin:auto;wight:200px'>");
          a.document.write("<h1 style='text-align:center'>Logistic order</h1>");
          a.document.write("<h5 class=><span>ID: " + order.id + "</span></h5>");
          a.document.write("<p>Sender: name:" +order.form_name +" - phone: " +order.from_phone +"</p>");
          a.document.write("<p>Recipient: name:" +order.to_name +" - phone: " +order.to_phone +"</p>");
          a.document.write("<table class='table'><thead><tr><th>Name</th><th>Weight</th><th>Quantity</th></tr></thead><tbody>");
          this.items_detail.forEach((element) => {a.document.write("<tr><td>" +element.name +"</td><td>" +element.weight +"</td><td>" +element.quantity +"</td></tr>");});
          a.document.write("</tbody></table>");
          a.document.write("<p>Total weight: " + order.total_weight + "</p>");
          a.document.write("<p>Total fee: " + order.total_fee + " VND</p>");
          a.document.write("<p>COD: " + order.cod + " VND<p></p>");
          a.document.write("</div></body></html>");
          a.document.close();
          a.print();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    shipperdetail(order) {
      this.dialog2 = true;
      this.axios
        .get(`/api/customer/shipper/detail/${order.id}`)
        .then((res) => {
          this.shipper.name = res.data.name;
          this.shipper.phone = res.data.phone;
        })
        .catch((err) => {
          console.log(err);
        });
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
        .get(`/api/customer/order/detail/${order.id}`)
        .then((res) => {
          this.items_detail = res.data;
        })
        .catch((err) => {});
    },
    findDate() {
      const playload = { date: this.date, date2: this.date2 };
      this.$store.dispatch("order/searchDate", playload);
    },
    searchitem() {
      const playload = { groupBy: this.groupBy, search: this.search };
      this.$store.dispatch("order/searchItem", playload);
    },
    deleteChecked() {
      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          for (let n in this.selected) {
            this.GetAllOrder.data = this.GetAllOrder.data.filter((obj) => {
              return obj.id != this.selected[n];
            });
            this.GetAllOrderID.data = this.GetAllOrderID.data.filter((obj) => {
              return obj.id != Order.id;
            });
          }
          const app = new FormData();
          for (let i in this.selected) {
            app.append("selected[]", this.selected[i]);
          }
          this.axios
            .post(`/api/order/delete-checked`, app)
            .then((res) => {
              this.flashMessage.success({
                title: "message",
                message: "delete successfully",
                time: 5000,
                blockClass: "custom-block-class",
              });
              this.selected = [];
            })
            .catch((err) => {
              this.flashMessage.error({
                title: "message",
                message: "Can`t delete",
                time: 5000,
                blockClass: "custom-block-class",
              });
            });
        }
      }
    },
    checkAll() {
      console.log("check");
      if (this.isSelectedAll == false) {
        this.selected = [];
        this.isSelectedAll = false;
        console.log(this.isSelectedAll);
      } else if (this.isSelectedAll == true) {
        for (var post in this.GetAllOrderID.data) {
          this.selected.push(this.GetAllOrderID.data[post].id);
        }
        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select() {
      if (this.GetAllOrderID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange(page) {
      this.$store.dispatch("order/getPageOrder", page);
    },
    deleteOrder(Order) {
      if (confirm(`Delete ${Order.id}`)) {
        this.axios
          .get(`/api/order/delete/${Order.id}`)
          .then((res) => {
            this.GetAllOrder.data = this.GetAllOrder.data.filter((obj) => {
              return obj.id != Order.id;
            });
            this.GetAllOrderID.data = this.GetAllOrderID.data.filter((obj) => {
              return obj.id != Order.id;
            });
            this.flashMessage.success({
              title: "message",
              message: "delete successfully",
              time: 5000,
              blockClass: "custom-block-class",
            });
            this.selected = [];
          })
          .catch((err) => {
            this.flashMessage.error({
              title: "message",
              message: "Can`t delete",
              time: 5000,
              blockClass: "custom-block-class",
            });
          });
      }
    },
  },
};
</script>
<style scoped>
.status {
  color: white;
  border-radius: 25px;
  padding: 5px;
  text-align: center;
}
</style>
