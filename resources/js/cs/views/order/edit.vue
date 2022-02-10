<template>
  <div>
    <div class="card">
      <div class="card-header">Edit order</div>
      <div class="card-body">
        <label>Send form:</label>
        <div class="row">
          <div v-show="company_info" class="col-sm-3">
            <div>Name: {{ ship.name }}, Phone: {{ ship.phone }}</div>
            <p>
              Address:
              <span>{{ ship.from_city_name }} </span>/<span
                >{{ ship.from_district_name }} </span
              >/<span>{{ ship.from_wards_name }} </span>/<span>
                {{ ship.address }}</span
              >
            </p>
          </div>
          <div class="col-sm-3">
            <v-btn
              @click="dialogviewcompany = true"
              class="ma-2"
              outlined
              large
              fab
              color="indigo"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
        </div>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <div class="row">
              <div class="col">
                <label>Send to:</label>
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:30"
                >
                  <v-text-field
                    v-model="ship.to_name"
                    :counter="30"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Phone"
                  rules="required|max:10"
                >
                  <v-text-field
                    v-model="ship.to_phone"
                    :counter="10"
                    :error-messages="errors"
                    label="Phone"
                    @keyup="numberformat"
                    required
                  ></v-text-field>
                </validation-provider>
              </div>
              <div class="col">
                <label>Address:</label>
                <validation-provider
                  v-slot="{ errors }"
                  name="City"
                  rules="required"
                >
                  <v-autocomplete
                    rounded
                    solo
                    v-model="ship.to_city_id"
                    placeholder="City"
                    :items="getallcity"
                    item-text="name"
                    item-value="id"
                    @input="findDistrict"
                    :error-messages="errors"
                    :disabled="ship.name == ''"
                    required
                    id="to_city_name"
                  ></v-autocomplete>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="District"
                  rules="required"
                >
                  <v-autocomplete
                    rounded
                    solo
                    v-model="ship.to_district_id"
                    placeholder="District"
                    :items="getDistrict"
                    item-text="name"
                    item-value="id"
                    @input="findwards"
                    :error-messages="errors"
                    required
                    id="to_district_name"
                  ></v-autocomplete>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Wards"
                  rules="required"
                >
                  <v-autocomplete
                    rounded
                    solo
                    v-model="ship.to_wards_id"
                    placeholder="Wards"
                    :items="getwards"
                    item-text="name"
                    item-value="id"
                    :error-messages="errors"
                    @change="getfeeship"
                    required
                    id="to_wards_name"
                  ></v-autocomplete>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Address detail"
                  rules="required"
                >
                  <v-text-field
                    v-model="ship.to_address"
                    :error-messages="errors"
                    label="Address detail"
                    required
                  ></v-text-field>
                </validation-provider>
              </div>
            </div>
            <br />
            <hr />
            <label>Goods:</label>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>
                    <validation-provider
                      v-slot="{ errors }"
                      name="Name"
                      rules="required"
                    >
                      <v-text-field
                        v-model="item.name"
                        :error-messages="errors"
                        label="Name"
                        required
                      ></v-text-field>
                    </validation-provider>
                  </td>
                  <td>
                    <validation-provider
                      v-slot="{ errors }"
                      name="Weigh"
                      rules="required"
                    >
                      <v-text-field
                        v-model="item.weight"
                        :error-messages="errors"
                        label="Weigh (gam)"
                        required
                        @keyup="numberformat"
                      ></v-text-field>
                    </validation-provider>
                  </td>
                  <td>
                    <validation-provider
                      v-slot="{ errors }"
                      name="Quantity"
                      rules="required"
                    >
                      <v-text-field
                        v-model="item.quantity"
                        :error-messages="errors"
                        label="Quantity"
                        required
                        @keyup="numberformat"
                      ></v-text-field>
                    </validation-provider>
                  </td>
                  <td>
                    <a
                      class="btn btn-success"
                      style="color: white"
                      v-on:click="addItem"
                      v-if="items.length - 1 <= index"
                      v-bind:class="{
                        disabled:
                          item.name.length == 0 ||
                          item.weight.length == 0 ||
                          item.quantity.length == 0,
                      }"
                      >Add</a
                    >
                    <a
                      class="btn btn-danger"
                      style="color: white"
                      v-on:click="removeItem(index)"
                      v-if="
                        items.length - 1 >= index && items.length - 1 != index
                      "
                      >Remove</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <hr />
            <label>Total:</label>
            <table class="table">
              <thead></thead>
              <tbody>
                <td>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Weight"
                    rules="required"
                  >
                    <v-text-field
                      v-model="order.totalweight"
                      :error-messages="errors"
                      label="Weight (g)"
                      required
                      disabled
                      @keyup="numberformat"
                    ></v-text-field>
                  </validation-provider>
                </td>
                <td>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Height"
                    rules="required"
                  >
                    <v-text-field
                      v-model="order.height"
                      :error-messages="errors"
                      label="Height (cm)"
                      required
                      @keyup="numberformat"
                    ></v-text-field>
                  </validation-provider>
                </td>
                <td>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Width"
                    rules="required"
                  >
                    <v-text-field
                      v-model="order.width"
                      :error-messages="errors"
                      label="Width (cm)"
                      required
                      @keyup="numberformat"
                    ></v-text-field>
                  </validation-provider>
                </td>
              </tbody>
            </table>
            <validation-provider
              v-slot="{ errors }"
              name="COD"
              rules="required"
            >
              <v-text-field
                :error-messages="errors"
                v-model="order.cod"
                label="COD"
                required
                @keyup="numberformat"
                style="width: 30%"
              ></v-text-field>
            </validation-provider>
            <br />
            <hr />
            <label>Total price: {{ totalfee | moneyFormat }}</label>
            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
          </form>
        </validation-observer>
      </div>
    </div>
    <!-- view company -->
    <v-row justify="center">
      <v-dialog v-model="dialogviewcompany" persistent max-width="1000px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Chose you company</span>
            <v-btn @click="dialog = true" class="mx-2" fab dark color="indigo">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <div class="row">
              <div
                class="col-sm-3"
                style="padding: 20px"
                v-for="(com, index) in GetAllCompany"
                :key="index"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ com.name }}
                    </h5>
                    <v-icon
                      @click="deleteCompany(com)"
                      style="left: 137px; top: -38px"
                      >mdi-trash-can</v-icon
                    >
                    <p class="card-text">Phone: {{ com.phone }}</p>
                    <p>
                      <span>{{ com.city_name }} </span>/<span
                        >{{ com.district_name }} </span
                      ><span>{{ com.wards_name }} </span>/<span>{{
                        com.address
                      }}</span>
                    </p>
                    <p>
                      <label class="switch">
                        <input
                          @click="changeStatusCompany(com.id)"
                          :id="`company_status_${com.id}`"
                          v-if="com.status != null"
                          checked
                          type="checkbox"
                        />
                        <input
                          @click="changeStatusCompany(com.id)"
                          :id="`company_status_${com.id}`"
                          v-else
                          type="checkbox"
                        />
                        <span class="slider round"></span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialogviewcompany = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- add campany -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Company Profile</span>
          </v-card-title>
          <v-card-text>
            <validation-observer ref="observerCompany" v-slot="{ invalid }">
              <form @submit.prevent="submitCompany">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required"
                >
                  <v-text-field
                    v-model="company.name"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Phone"
                  rules="required|max:10"
                >
                  <v-text-field
                    v-model="company.phone"
                    :counter="10"
                    :error-messages="errors"
                    label="Phone"
                    required
                    @keyup="numberformat"
                  ></v-text-field>
                </validation-provider>
                <label>Address:</label>
                <validation-provider
                  v-slot="{ errors }"
                  name="city"
                  rules="required"
                >
                  <v-autocomplete
                    rounded
                    solo
                    v-model="company.city_id"
                    placeholder="City"
                    :items="getallcity"
                    item-text="name"
                    item-value="id"
                    @input="findDistrictCompany"
                    :error-messages="errors"
                    id="city_name_company"
                    required
                  ></v-autocomplete>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="District"
                  rules="required"
                >
                  <v-autocomplete
                    rounded
                    solo
                    v-model="company.district_id"
                    placeholder="District"
                    :items="getDistrictCompany"
                    item-text="name"
                    item-value="id"
                    @input="findwardsCompany"
                    :error-messages="errors"
                    id="District_name_company"
                    required
                  ></v-autocomplete>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Wards"
                  rules="required"
                >
                  <v-autocomplete
                    rounded
                    solo
                    v-model="company.wards_id"
                    placeholder="Wards"
                    :items="getwardsCompany"
                    item-text="name"
                    item-value="id"
                    :error-messages="errors"
                    id="Wards_name_company"
                    required
                  ></v-autocomplete>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Address detail"
                  rules="required"
                >
                  <v-text-field
                    v-model="company.address"
                    :error-messages="errors"
                    label="Address detail"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    type="submit"
                    :disabled="invalid"
                  >
                    Submit
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Colse
                  </v-btn>
                </v-card-actions>
              </form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import { required, digits, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      company: {
        name: "",
        phone: "",
        city_id: "",
        district_id: "",
        wards_id: "",
        address: "",
      },
      dialogviewcompany: false,
      company_info: false,
      dialog: false,
      order: {
        id:"",
        totalweightfee: 0,
        totalweight: 0,
        feeship: "",
        height: "",
        width: "",
        cod: "",
      },
      ship: {
        name: "",
        phone: "",
        address: "",
        from_city_id: "",
        from_city_name: "",
        from_district_name: "",
        from_wards_name: "",
        to_name: "",
        to_phone: "",
        to_address: "",
        to_city_id: "",
        to_district_id: "",
        to_wards_id: "",
        to_city_name: "",
        to_district_name: "",
        to_wards_name: "",
      },
      items: [
        {
          name: "",
          weight: "",
          quantity: "",
        },
      ],
      getwards: [],
      getDistrict: [],
      getwardsCompany: [],
      getDistrictCompany: [],
    };
  },
  mounted() {
    this.edit();
    this.$store.dispatch("feeship/getallcity"),
      this.$store.dispatch("company/GetAllCompany"),
      this.getcompany();
  },
  computed: {
    totalfee() {
      return this.order.feeship + this.order.totalweightfee;
    },
    getallcity() {
      return this.$store.getters["feeship/getallcity"];
    },
    GetAllCompany() {
      return this.$store.getters["company/GetAllCompany"];
    },
  },
  methods: {
    edit(){
        this.axios.get(`/api/order/edit/${this.$route.params.id}`).then(res=>{
    console.log(res.data.order);
    this.ship.to_city_id=res.data.ship.to_city_id;
    this.findDistrict();
    this.ship.to_district_id=res.data.ship.to_district_id;
    this.findwards();
    this.ship.to_wards_id=res.data.ship.to_wards_id;
    this.getfeeship();
    this.order.id=res.data.order.id;
    this.order.height=res.data.order.height;
    this.order.width=res.data.order.width;
    this.items=res.data.order_detail;
    this.ship.to_name=res.data.ship.to_name;
    this.ship.to_phone=res.data.ship.to_phone;
    this.ship.to_address=res.data.ship.to_address;
    this.getWeightfee();
    this.order.cod=res.data.order.cod;
    this.order.cod=this.order.cod.toString();
    this.order.cod=this.order.cod.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }).catch(err=>{
        console.log(err);
     });
    },
    deleteCompany(com) {
      this.axios
        .get(`/api/deleteCompany/${com.id}`)
        .then((res) => {
          this.$store.dispatch("company/GetAllCompany");
          this.getcompany();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeStatusCompany(id) {
      if ((document.getElementById(`company_status_${id}`).checked = true)) {
        this.axios
          .post("/api/changeStatusCompany", { id: id })
          .then((res) => {
            for (let n in this.GetAllCompany) {
              if (id != this.GetAllCompany[n].id) {
                document.getElementById(
                  `company_status_${this.GetAllCompany[n].id}`
                ).checked = false;
              }
            }
            this.getcompany();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getcompany() {
      this.axios
        .get("/api/getcompanyOrder")
        .then((res) => {
          console.log(res);
          this.ship.name = res.data.data.name;
          this.ship.phone = res.data.data.phone;
          this.ship.from_city_id = res.data.data.city_id;
          this.ship.from_city_name = res.data.data.city_name;
          this.ship.from_district_name = res.data.data.district_name;
          this.ship.from_wards_name = res.data.data.wards_name;
          this.ship.address = res.data.data.address;
          this.company_info = true;
        })
        .catch((err) => {
          console.log(err);
          this.company_info = false;
        });
    },
    getfeeship() {
      const play = { from: this.ship.from_city_id, to: this.ship.to_city_id };
      this.axios
        .post("/api/getfeeshipInOrder", play)
        .then((res) => {
          console.log(res.data.data);
          this.order.feeship = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findDistrict() {
      this.ship.District_id = "";
      this.ship.wards_id = "";
      this.axios
        .get("/api/find-district", {
          params: { id: this.ship.to_city_id },
        })
        .then((res) => {
          console.log(res.data.data);
          this.getDistrict = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findwards() {
      this.axios
        .get("/api/find-wards", {
          params: { id: this.ship.to_district_id },
        })
        .then((res) => {
          console.log(res.data.data);
          this.getwards = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findDistrictCompany() {
      this.company.district_id = "";
      this.company.wards_id = "";
      this.axios
        .get("/api/find-district", {
          params: { id: this.company.city_id },
        })
        .then((res) => {
          console.log(res.data.data);
          this.getDistrictCompany = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findwardsCompany() {
      this.axios
        .get("/api/find-wards", {
          params: { id: this.company.district_id },
        })
        .then((res) => {
          console.log(res.data.data);
          this.getwardsCompany = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getWeightfee() {
      this.order.totalweight = 0;
      this.order.totalweightfee = 0;
      for (let n in this.items) {
        this.order.totalweight += this.items[n].weight * this.items[n].quantity;
      }
      if (this.order.totalweight > 0) {
        this.axios
          .post("/api/getWeightfee", { weight: this.order.totalweight })
          .then((res) => {
            console.log(res.data.data);
            this.order.totalweightfee = res.data.data;
          })
          .catch((err) => {
            console.log(err);
            this.order.totalweightfee = 0;
          });
      }
    },
    numberformat() {
      this.ship.to_phone = this.ship.to_phone.toString();
      this.order.height = this.order.height.toString();
      this.order.width = this.order.width.toString();
      this.order.cod = this.order.cod.toString();
      this.company.phone = this.company.phone.toString();

      this.ship.to_phone = this.ship.to_phone.replace(/[^\d]/g, "");
      this.order.height = this.order.height.replace(/[^\d]/g, "");
      this.order.width = this.order.width.replace(/[^\d]/g, "");
      this.order.cod = this.order.cod.replace(/[^\d]/g, "");
      this.order.cod=this.order.cod;

      this.company.phone = this.company.phone.replace(/[^\d]/g, "");
      for (let n in this.items) {
        this.items[n].weight = this.items[n].weight.toString();
        this.items[n].quantity = this.items[n].quantity.toString();
        this.items[n].weight = this.items[n].weight.replace(/[^\d]/g, "");
        this.items[n].quantity = this.items[n].quantity.replace(/[^\d]/g, "");
        this.order.cod = this.order.cod.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
      this.getWeightfee();
    },
    submit() {
      this.$refs.observer.validate();
      this.ship.to_city_name = document.getElementById("to_city_name").value;
      this.ship.to_district_name =
        document.getElementById("to_district_name").value;
      this.ship.to_wards_name = document.getElementById("to_wards_name").value;
      this.order.cod.toString();
      this.order.cod = this.order.cod.replace(/[^\d]/g, "");
      const app = new FormData();
      app.append("cod", this.order.cod);
      app.append("totalweight", this.order.totalweight);
      app.append("totalweightfee", this.order.totalweightfee);
      app.append("feeship", this.order.feeship);
      app.append("height", this.order.height);
      app.append("width", this.order.width);
      for (let n in this.items) {
        app.append("item_name[]", this.items[n].name);
        app.append("item_quantity[]", this.items[n].quantity);
        app.append("item_weight[]", this.items[n].weight);
      }
      app.append("from_name", this.ship.name);
      app.append("from_phone", this.ship.phone);
      app.append("from_address", this.ship.address);
      app.append("from_city_name", this.ship.from_city_name);
      app.append("from_district_name", this.ship.from_district_name);
      app.append("from_wards_name", this.ship.from_wards_name);

      app.append("to_name", this.ship.to_name);
      app.append("to_phone", this.ship.to_phone);
      app.append("to_address", this.ship.to_address);

      app.append("to_city_id", this.ship.to_city_id);
      app.append("to_district_id", this.ship.to_district_id);
      app.append("to_wards_id", this.ship.to_wards_id);

      app.append("to_city_name", this.ship.to_city_name);
      app.append("to_district_name", this.ship.to_district_name);
      app.append("to_wards_name", this.ship.to_wards_name);
      this.axios
        .post(`/api/order/update/${this.order.id}`, app)
        .then((res) => {
            this.$router.push({name:'listOrders'});
          this.flashMessage.success({
            title: "Message",
            message: "edit successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
        })
        .catch((err) => {
          this.flashMessage.error({
            title: "message",
            message: "edit faild",
            time: 5000,
            blockClass: "custom-block-class",
          });
        });
    },
    submitCompany() {
      this.$refs.observerCompany.validate();
      var city_name = document.getElementById("city_name_company").value;
      var district_name = document.getElementById(
        "District_name_company"
      ).value;
      var wards_name = document.getElementById("Wards_name_company").value;
      const play = {
        name: this.company.name,
        phone: this.company.phone,
        city_id: this.company.city_id,
        district_id: this.company.district_id,
        wards_id: this.company.wards_id,
        address: this.company.address,
        city_name: city_name,
        district_name: district_name,
        wards_name: wards_name,
      };
      this.axios
        .post("/api/company/add", play)
        .then((res) => {
          this.dialog = false;
          this.flashMessage.success({
            title: "Message",
            message: "add successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
          this.$store.dispatch("company/GetAllCompany");
          this.getcompany();
          for (let n in this.GetAllCompany) {
            if (res.data.id != this.GetAllCompany[n].id) {
              document.getElementById(
                `company_status_${this.GetAllCompany[n].id}`
              ).checked = false;
            }
          }
        })
        .catch((err) => {
          this.flashMessage.error({
            title: "message",
            message: "add faild",
            time: 5000,
            blockClass: "custom-block-class",
          });
        });
    },
    addItem: function () {
    if(this.items.length<5){
      this.items.push({
        name: "",
        weight: "",
        height: "",
        width: "",
        quantity: "",
      });
      }
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
      this.getWeightfee();
    },
  },
};
</script>

