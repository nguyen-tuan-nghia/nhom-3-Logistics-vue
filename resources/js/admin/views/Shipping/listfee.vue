<template>
        <div class="container-fluid">
      <br />
      <div class="card">
        <div class="card-header">
          <label>Add shipping fee :</label>
        </div>
        <div class="card-body">
          <form @submit.prevent="savefeeship">
            <table class="table">
              <thead>
                <th>Shipping from:</th>
                <th>Shipping to:</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-autocomplete
                      rounded
                      solo
                      v-model="form_feeshipping.fromcity"
                      :items="getallcity"
                      item-text="name"
                      item-value="id"
                      id="fromcity"
                    ></v-autocomplete>
                  </td>
                  <td>
                    <v-autocomplete
                      rounded
                      solo
                      v-model="form_feeshipping.tocity"
                      :items="getallcity"
                      item-text="name"
                      item-value="id"
                      id="tocity"
                    ></v-autocomplete>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="feeshipmoney"
                      class="form-control feeshipmoney"
                      @keyup="feeshipmoney"
                      value=""
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      class="form-control feeshipmoney"
                      value="Submit"
                      :disabled="
                        form_feeshipping.fromcity == '' ||
                        form_feeshipping.tocity == '' ||
                        form_feeshipping.fee == ''
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <br />
      <div class="card">
        <div class="card-header">
          <label>Add city shipping fee:</label>
        </div>
        <div class="card-body">
          <form @submit.prevent="savefeeshipCity">
            <table class="table">
              <thead>
                <th>City:</th>
                <th>Shipping fee in town:</th>
                <th>Shipping fee out town:</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-autocomplete
                      rounded
                      solo
                      v-model="feeshipCity.city"
                      :items="getallcity"
                      item-text="name"
                      item-value="id"
                      id="town"
                    ></v-autocomplete>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="feeshipmoneyCityOn"
                      class="form-control feeshipmoney"
                      @keyup="feeshipmoneyCityOn"
                      value=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="feeshipmoneyCityOut"
                      class="form-control feeshipmoney"
                      @keyup="feeshipmoneyCityOut"
                      value=""
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      class="form-control feeshipmoney"
                      value="Submit"
                      :disabled="
                        feeshipCity.feeIn == '' ||
                        feeshipCity.feeOut == '' ||
                        feeshipCity.city == ''
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <br />

      <div class="mx-auto row">
        <div class="card col">
          <div class="card-header">List shipping fee between city</div>
          <div class="card-body">
            <v-row>
              <v-col>
                <a @click="deleteChecked"><v-icon>mdi-delete</v-icon>Delete</a>
              </v-col>
              <v-col class="d-flex" cols="12" sm="2">
                <v-select
                  v-model="groupBy"
                  :items="items"
                  item-text="name"
                  item-value="value"
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
                  <th scope="col">Ship from:</th>
                  <th scope="col">Ship to:</th>
                  <th scope="col">Ship fee:</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(feeship, index) in GetAllFeeship.data" :key="index">
                  <td>
                    <div class="form-check">
                      <input
                        v-model="selected"
                        class="form-check-input"
                        type="checkbox"
                        :value="feeship.id"
                        @change="select"
                      />
                    </div>
                  </td>
                  <td>
                    {{ (GetAllFeeship.from + index) | minus }}
                  </td>

                  <td>
                    <div v-for="city in getallcity" :key="'A' + city.id">
                      <span v-if="feeship.form_city_id == city.id">
                        {{ city.name }}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div v-for="city2 in getallcity" :key="'B' + city2.id">
                      <span v-if="feeship.to_city_id == city2.id">
                        {{ city2.name }}
                      </span>
                    </div>
                  </td>
                  <td :id="`feeshipEditAble_${feeship.id}`">{{ feeship.price|moneyFormat }}</td>
                  <td>
                      <a @click="editfeeship(feeship.id)">
                          <v-icon>mdi-pencil</v-icon>
                      </a>
                  </td>
                  <td>
                    <a @click="deletefeeship(feeship)"
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
                  :class="{ disabled: GetAllFeeship.prev_page_url == null }"
                >
                  <a
                    @click="PageChange(GetAllFeeship.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAllFeeship.last_page"
                  :key="n"
                  class="page-item"
                  :class="{ active: GetAllFeeship.current_page == n }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: GetAllFeeship.next_page_url == null }"
                >
                  <a
                    @click="PageChange(GetAllFeeship.current_page + 1)"
                    class="page-link"
                    href="#"
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="card col">
          <div class="card-header">List shipping fee in and out the town</div>
          <div class="card-body">
            <v-row>
              <v-col>
                <a @click="deleteCheckedTown"><v-icon>mdi-delete</v-icon>Delete</a>
              </v-col>
              <v-col class="d-flex" cols="12" sm="2">
                <v-select
                  v-model="groupByTown"
                  :items="itemsTown"
                  item-text="name"
                  item-value="value"
                  label="Group by"
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="searchTown"
                  label="search"
                  @input="searchitemTown"
                  :disabled="groupByTown == ''"
                ></v-text-field>
              </v-col>
            </v-row>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <v-checkbox
                      :label="null"
                      @change="checkAllTown"
                      v-model="isSelectedAllTown"
                    ></v-checkbox>
                  </th>
                  <th>Number</th>
                  <th>Town name</th>
                  <th scope="col">Fee ship in town:</th>
                  <th scope="col">Fee ship out town:</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(townFeeship, index) in GetAlltownFeeship.data" :key="index">
                  <td>
                    <div class="form-check">
                      <input
                        v-model="selectedTown"
                        class="form-check-input"
                        type="checkbox"
                        :value="townFeeship.id"
                        @change="selectTown"
                      />
                    </div>
                  </td>
                  <td>
                    {{ (GetAlltownFeeship.from + index) | minus }}
                  </td>
                  <td>
                    <div v-for="city in getallcity" :key="'A' + city.id">
                      <span v-if="townFeeship.city_id == city.id">
                        {{ city.name }}
                      </span>
                    </div>
                  </td>
                  <td :id="`price_in_town_${townFeeship.id}`">{{ townFeeship.price_in_town|moneyFormat }}</td>
                  <td :id="`price_out_town_${townFeeship.id}`">{{ townFeeship.price_out_town|moneyFormat }}</td>
                  <td>{{ townFeeship.fee }}</td>
                  <td>
                      <a @click="editfeeshipTown(townFeeship.id)">
                          <v-icon>mdi-pencil</v-icon>
                      </a>
                  </td>
                  <td>
                    <a @click="deletefeeshipTown(townFeeship)"
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
                  :class="{ disabled: GetAlltownFeeship.prev_page_url == null }"
                >
                  <a
                    @click="PageChangeTown(GetAlltownFeeship.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAlltownFeeship.last_page"
                  :key="n"
                  class="page-item"
                  :class="{ active: GetAlltownFeeship.current_page == n }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChangeTown(n)">{{ n }}</a>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: GetAlltownFeeship.next_page_url == null }"
                >
                  <a
                    @click="PageChangeTown(GetAlltownFeeship.current_page + 1)"
                    class="page-link"
                    href="#"
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div></div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      isSelectedAll: false,
      selectedTown: [],
      isSelectedAllTown: false,
      items: [{name:'form city',value:'form_city_name'},
      {name:'to city',value:'to_city_name'}
      ],
      itemsTown: [{name:'city name',value:'city_name'}
      ],
      search: "",
      groupBy: "",
      searchTown: "",
      groupByTown: "",
      items_city: [],
      items_town_fee: [],
      form_feeshipping: {
        fromcity: "",
        tocity: "",
        fee: "",
      },
      feeshipCity: {
        city: "",
        feeIn: "",
        feeOut: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch("feeship/getallcity"),
      this.$store.dispatch("feeship/GetAllFeeship"),
    this.$store.dispatch("townFeeship/GetAlltownFeeship")
  },
  computed: {
    getallcity() {
      return this.$store.getters["feeship/getallcity"];
    },
    GetAllFeeship() {
      return this.$store.getters["feeship/GetAllFeeship"];
    },
    GetAlltownFeeship() {
      return this.$store.getters["townFeeship/GetAlltownFeeship"];
    },
    GetAllFeeshipID(){
      return this.$store.getters["feeship/GetAllFeeshipID"];
    },
    GetAlltownFeeshipID() {
      return this.$store.getters["townFeeship/GetAlltownFeeshipID"];
    },
  },
  methods: {
    editPriceShipTown(feeship){
      var price_in=document.getElementById(`price_in_town_${feeship}`).innerHTML;
      price_in=price_in.replace(/[^\d]/g, "");
      var price_out=document.getElementById(`price_out_town_${feeship}`).innerHTML;
      price_out=price_out.replace(/[^\d]/g, "");
      this.axios.post("/api/editPriceShipTown", {id:feeship,fee_in:price_in,fee_out:price_out}).then(res => {
          this.flashMessage.success({
            title: "message",
            message: "Edit successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
        price_in = price_in.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        price_out = price_out.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        document.getElementById(`price_in_town_${feeship}`).innerHTML=price_in;
        document.getElementById(`price_out_town_${feeship}`).innerHTML=price_out;
          }).catch(err=>{
          this.flashMessage.error({
            title: "message",
            message: `Edit faild`,
            time: 5000,
            blockClass: "custom-block-class",
          });
          })
    },
    editPriceShip(feeship){
      var price=document.getElementById(`feeshipEditAble_${feeship}`).innerHTML;
      price=price.replace(/[^\d]/g, "");
      this.axios.post("/api/editPriceShip", {id:feeship,fee:price}).then(res => {
          this.flashMessage.success({
            title: "message",
            message: "Edit successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
        price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        document.getElementById(`feeshipEditAble_${feeship}`).innerHTML=price;
          }).catch(err=>{
          this.flashMessage.error({
            title: "message",
            message: `Edit faild`,
            time: 5000,
            blockClass: "custom-block-class",
          });
          })
          },
    editfeeship(feeship){
        var x=document.getElementById(`feeshipEditAble_${feeship}`);
        console.log("ok");
        if (x.contentEditable == "true") {
        x.contentEditable = "false";
        x.style.background ="";
        x.style.color ="";
        this.editPriceShip(feeship);
        } else {
        x.contentEditable = "true";
        x.target;
        x.classList.remove('borderEditfeeship');
        x.style.background ="black";
        x.style.color ="white";
        }
      },
    editfeeshipTown(feeship){
        var x=document.getElementById(`price_in_town_${feeship}`);
        var y=document.getElementById(`price_out_town_${feeship}`);
        console.log("ok");
        if (x.contentEditable == "true") {
        x.contentEditable = "false";
        x.style.background ="";
        x.style.color ="";
        y.contentEditable = "false";
        y.style.background ="";
        y.style.color ="";
        this.editPriceShipTown(feeship);
        } else {
        x.contentEditable = "true";
        y.contentEditable = "true";
        x.style.background ="black";
        x.style.color ="white";
        y.style.background ="black";
        y.style.color ="white";
        }
    },
    savefeeship() {
      var fromcity=document.querySelector('#fromcity').value;
      var tocity=document.querySelector('#tocity').value;
      const play = {
        fromcity: this.form_feeshipping.fromcity,
        tocity: this.form_feeshipping.tocity,
        fee: this.form_feeshipping.fee,
        fromcityname:fromcity,
        tocityname:tocity
      };
      this.axios
        .post("/api/feeship/add", play)
        .then((res) => {
          this.flashMessage.success({
            title: "message",
            message: "Add successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
          this.GetAllFeeship.data.unshift(res.data);
          this.GetAllFeeshipID.data.unshift(res.data);
        })
        .catch((err) => {
          this.flashMessage.error({
            title: "message",
            message: `Add faild, ${err.response.data.message}`,
            time: 5000,
            blockClass: "custom-block-class",
          });
        });
    },
    savefeeshipCity() {
      var cityname=document.querySelector('#town').value;
      const play = {
        city_id: this.feeshipCity.city,
        feeIn: this.feeshipCity.feeIn,
        feeOut: this.feeshipCity.feeOut,
        cityname:cityname
      };
      this.axios
        .post("/api/feeship-town/add", play)
        .then((res) => {
          this.flashMessage.success({
            title: "message",
            message: "Add successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
          this.GetAlltownFeeship.data.unshift(res.data);
          this.GetAlltownFeeshipID.data.unshift(res.data);
        })
        .catch((err) => {
          this.flashMessage.error({
            title: "message",
            message: `Add faild, ${err.response.data.errors.city_id}`,
            time: 5000,
            blockClass: "custom-block-class",
          });
        });
    },
    feeshipmoney() {
      let money = document.getElementById("feeshipmoney").value;
      money = money.toString();
      money = money.replace(/[^\d]/g, "");
      this.form_feeshipping.fee = money;
      money = money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      document.getElementById("feeshipmoney").value = money;
    },
    feeshipmoneyCityOn() {
      let money = document.getElementById("feeshipmoneyCityOn").value;
      money = money.toString();
      money = money.replace(/[^\d]/g, "");
      this.feeshipCity.feeIn = money;
      money = money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      document.getElementById("feeshipmoneyCityOn").value = money;
    },
    feeshipmoneyCityOut() {
      let money = document.getElementById("feeshipmoneyCityOut").value;
      money = money.toString();
      money = money.replace(/[^\d]/g, "");
      this.feeshipCity.feeOut = money;
      money = money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      document.getElementById("feeshipmoneyCityOut").value = money;
    },
    searchitem() {
      const playload = { groupBy: this.groupBy, search: this.search };
      this.$store.dispatch("feeship/searchItem", playload);
    },
    searchitemTown() {
      const playload = { groupBy: this.groupByTown, search: this.searchTown };
      this.$store.dispatch("townFeeship/searchItem", playload);
    },
    deleteChecked() {
      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          for (let n in this.selected) {
            this.GetAllFeeship.data = this.GetAllFeeship.data.filter((obj) => {
              return obj.id != this.selected[n];
            });
          }
          const app = new FormData();
          for (let i in this.selected) {
            app.append("selected[]", this.selected[i]);
          }
          this.axios
            .post(`/api/feeship/delete-checked`, app)
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
    deleteCheckedTown() {
      if (this.selectedTown.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          for (let n in this.selectedTown) {
            this.GetAlltownFeeship.data = this.GetAlltownFeeship.data.filter((obj) => {
              return obj.id != this.selectedTown[n];
            });
          }
          const app = new FormData();
          for (let i in this.selectedTown) {
            app.append("selected[]", this.selectedTown[i]);
          }
          this.axios
            .post(`/api/townFeeship/delete-checked`, app)
            .then((res) => {
              this.flashMessage.success({
                title: "message",
                message: "delete successfully",
                time: 5000,
                blockClass: "custom-block-class",
              });
              this.selectedTown = [];
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
        for (var post in this.GetAllFeeshipID.data) {
          this.selected.push(this.GetAllFeeshipID.data[post].id);
        }
        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    checkAllTown() {
      console.log("check");
      if (this.isSelectedAllTown == false) {
        this.selectedTown = [];
        this.isSelectedAllTown = false;
        console.log(this.isSelectedAllTown);
      } else if (this.isSelectedAllTown == true) {
        for (var post in this.GetAlltownFeeshipID.data) {
          this.selectedTown.push(this.GetAlltownFeeshipID.data[post].id);
        }
        this.isSelectedAllTown = true;
        console.log(this.isSelectedAllTown);
      }
    },
    select() {
      if (this.GetAllFeeshipID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    selectTown() {
      if (this.GetAlltownFeeshipID.data.length == this.selectedTown.length) {
        this.isSelectedAllTown = true;
      } else {
        this.isSelectedAllTown = false;
      }
    },
    PageChange(page) {
      this.$store.dispatch("feeship/getPageFeeship", page);
    },
    PageChangeTown(page) {
      this.$store.dispatch("townFeeship/getPageFeeship", page);
    },
    deletefeeship(feeship) {
      if (confirm(`Delete ${feeship.title}`)) {
        this.axios
          .get(`/api/feeship/delete/${feeship.id}`)
          .then((res) => {
            this.GetAllFeeship.data = this.GetAllFeeship.data.filter((obj) => {
              return obj.id != feeship.id;
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
    deletefeeshipTown(feeship) {
      if (confirm(`Delete ${feeship.title}`)) {
        this.axios
          .get(`/api/townFeeship/delete/${feeship.id}`)
          .then((res) => {
            this.GetAlltownFeeship.data = this.GetAlltownFeeship.data.filter((obj) => {
              return obj.id != feeship.id;
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
}
</script>
<style scoped>
.feeshipmoney {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  height: 48px;
  border-radius: 25px;
}
</style>
