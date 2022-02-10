<template>
        <div class="container-fluid">
      <div class="mx-auto">
        <div class="card">
          <div class="card-header">List {{ $route.params.name }}</div>
          <div class="card-body">
            <v-row>
              <v-col sm="1">
                <a @click="deleteChecked"><v-icon>mdi-delete</v-icon>Delete</a>
              </v-col>
              <v-col sm="2">
                <a @click="dialog = true">Create {{ $route.params.name }}</a>
              </v-col>

              <v-col class="d-flex" cols="12" sm="2">
                <v-select
                  v-model="groupBy"
                  :items="items"
                  label="Group by"
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="search"
                  label="search"
                  @input="searchitem"
                  :disabled="groupBy == ''"
                ></v-text-field>
              </v-col>
            </v-row>
            <table class="table">
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
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th>Phone</th>
                  <th scope="col">Created at</th>
                  <th scope="col">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(Customer, index) in GetAllCustomer.data" :key="index">
                  <td>
                    <div class="form-check">
                      <input
                        v-model="selected"
                        class="form-check-input"
                        type="checkbox"
                        :value="Customer.id"
                        @change="select"
                      />
                    </div>
                  </td>
                  <td>
                    {{ (GetAllCustomer.from + index) | minus }}
                  </td>
                  <td>{{ Customer.name }}</td>
                  <td>{{ Customer.email }}</td>
                  <td>{{ Customer.phone }}</td>
                  <td>{{ Customer.created_at | dateformat }}</td>
                  <td>{{ Customer.updated_at | dateformat }}</td>
                  <td>
                    <a @click="edit(Customer)"><v-icon>mdi-pencil</v-icon></a>
                  </td>
                  <td>
                    <a @click="deleteCustomer(Customer)"><v-icon>mdi-delete</v-icon></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="...">
              <ul class="pagination">
                <li
                  class="page-item"
                  :class="{
                    disabled: GetAllCustomer.prev_page_url == null,
                  }"
                >
                  <a
                    @click="PageChange(GetAllCustomer.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAllCustomer.last_page"
                  :key="n"
                  class="page-item"
                  :class="{
                    active: GetAllCustomer.current_page == n,
                  }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li
                  class="page-item"
                  :class="{
                    disabled: GetAllCustomer.next_page_url == null,
                  }"
                >
                  <a
                    @click="PageChange(GetAllCustomer.current_page + 1)"
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
<!--add-->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Customer Profile</span>
          </v-card-title>
          <v-card-text>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:50"
                >
                  <v-text-field
                    v-model="name"
                    :counter="50"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 10,
                    regex: '^(09|03|01|08)\\d{8}$',
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    :counter="10"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    type="submit"
                    :disabled="invalid"
                    @click="submit"
                  >
                    Save
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
<!--edit-->
    <v-row justify="center">
      <v-dialog v-model="dialogEdit" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Edit Customer Profile</span>
          </v-card-title>
          <v-card-text>
            <validation-observer ref="observerEdit" v-slot="{ invalid }">
              <form @submit.prevent="update">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:50"
                >
                  <v-text-field
                    v-model="nameEdit"
                    :counter="50"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 10,
                    regex: '^(09|03|01|08)\\d{8}$',
                  }"
                >
                  <v-text-field
                    v-model="phoneNumberEdit"
                    :counter="10"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="emailEdit"
                    :error-messages="errors"
                    label="E-mail"
                    disabled
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
                    Save
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialogEdit = false">
                    Close
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
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
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

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      selected: [],
      isSelectedAll: false,
      items: ["name", "email", "phone"],
      selectPomission: "",
      search: "",
      groupBy: "",
      dialog: false,
      dialogEdit: false,
      name: "",
      phoneNumber: "",
      email: "",

      nameEdit: "",
      phoneNumberEdit: "",
      emailEdit: "",
      edit_id:""
    };
  },
  mounted() {
    const GetAllCustomer = { permission: this.$route.params.name };
    this.$store.dispatch("Customer/GetAllCustomer", GetAllCustomer);
  },
  computed: {
    GetAllCustomer() {
      return this.$store.getters["Customer/GetAllCustomer"];
    },
    GetAllCustomerID() {
      return this.$store.getters["Customer/GetAllCustomerID"];
    },
  },
  methods: {
    edit(Customer) {
      this.nameEdit = Customer.name;
      this.phoneNumberEdit = Customer.phone;
      this.emailEdit = Customer.email;
      this.edit_id=Customer.id;
      this.dialogEdit = true;
    },
    update(){
      this.$refs.observerEdit.validate();
      const play = {
        name: this.nameEdit,
        phone: this.phoneNumberEdit,
        email: this.emailEdit,
      };
      this.axios
        .post(`/api/Customer/update/${this.edit_id}`, play)
        .then((res) => {
            for(let n in this.GetAllCustomer.data)
              if( this.GetAllCustomer.data[n].id == res.data.id){
                  this.GetAllCustomer.data[n].name=res.data.name;
                  this.GetAllCustomer.data[n].emai=res.data.email;
                  this.GetAllCustomer.data[n].phone=res.data.phone;
              }
          this.flashMessage.success({
            title: "message",
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
    submit() {
      this.$refs.observer.validate();
      const play = {
        name: this.name,
        phone: this.phoneNumber,
        email: this.email,
        permission: this.$route.params.name,
      };
      this.axios
        .post("/api/Customer/add", play)
        .then((res) => {
          console.log(res.data);
          this.GetAllCustomer.data.unshift(res.data.data);
          this.GetAllCustomerID.data.unshift(res.data.data);
          this.flashMessage.success({
            title: "message",
            message: "add successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          if (err.response.status == 422) {
            this.flashMessage.error({
              title: "message",
              message: `add faild, ${err.response.data.errors.email[0]}`,
              time: 5000,
              blockClass: "custom-block-class",
            });
          }
        });
    },
    searchitem() {
      const playload = {
        groupBy: this.groupBy,
        search: this.search,
        permission: this.$route.params.name,
      };
      this.$store.dispatch("Customer/searchItem", playload);
    },
    deleteChecked() {
      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          for (let n in this.selected) {
            this.GetAllCustomer.data = this.GetAllCustomer.data.filter((obj) => {
              return obj.id != this.selected[n];
            });
          }
          const app = new FormData();
          for (let i in this.selected) {
            app.append("selected[]", this.selected[i]);
          }
          this.axios
            .post(`/api/Customer/delete-checked`, app)
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
        for (var post in this.GetAllCustomerID.data) {
          this.selected.push(this.GetAllCustomerID.data[post].id);
        }
        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select() {
      if (this.GetAllCustomerID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange(page) {
      this.$store.dispatch("Customer/getPageCustomer", page);
    },
    deleteCustomer(Customer) {
      if (confirm(`Delete ${Customer.name}`)) {
        this.axios
          .get(`/api/Customer/delete/${Customer.id}`)
          .then((res) => {
            this.GetAllCustomer.data = this.GetAllCustomer.data.filter((obj) => {
              return obj.id != Customer.id;
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
