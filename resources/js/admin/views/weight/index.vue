<template>
        <div class="container-fluid">
      <div class="card">
        <div class="card-header">Weight fee</div>
        <div class="card-body">
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <table class="table">
                <thead>
                  <tr>
                    <td>Min (gam)</td>
                    <td>Max (gam)</td>
                    <td>Price</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Min"
                        rules="required"
                      >
                        <v-text-field
                          v-model="item.min"
                          :error-messages="errors"
                          label="Min"
                          required
                          disabled
                          @keyup="numberformat"
                          :id="`min_${index}`"
                        ></v-text-field>
                      </validation-provider>
                    </td>
                    <td>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Max"
                        rules="required"
                      >
                        <v-text-field
                          v-model="item.max"
                          :error-messages="errors"
                          label="Max"
                          required
                          @keyup="numberformat"
                          @input="maxvalue"
                          :id="`max_${index}`"
                        ></v-text-field>
                      </validation-provider>
                    </td>
                    <td>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Price"
                        rules="required"
                      >
                        <v-text-field
                          v-model="item.price"
                          :error-messages="errors"
                          label="Price"
                          required
                          @keyup="numberformat"
                          :id="`price_${index}`"
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
                            item.min.length == 0 ||
                            item.max.length == 0 ||
                            item.price.length == 0,
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
              <table class="table table-active">
                <thead>
                  <tr>
                    <td>Min (gam)</td>
                    <td>Max (gam)</td>
                    <td>Price</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.min }}</td>
                    <td>{{ item.max }}</td>
                    <td>{{ item.price | moneyFormat }}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
              </v-btn>
            </form>
          </validation-observer>
        </div>
      </div>
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
      items: [
        {
          min: "0",
          max: "",
          price: "",
        },
      ],
    };
  },
  mounted() {
    this.getweightfee();
  },
  methods: {
    getweightfee() {
      this.axios
        .get("/api/weightfee/index")
        .then((res) => {
          console.log(res.data.data);
          if(res.data.data.length!=0){
          this.items = res.data.data;
          for (let n in this.items) {
            this.items[n].price = this.items[n].price.toString();
            this.items[n].price = this.items[n].price.replace(/[^\d]/g, "");
            this.items[n].price = this.items[n].price.replace(
              /(\d)(?=(\d{3})+(?!\d))/g,
              "$1."
            );
          }}
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      const play = new FormData();
      for (let n in this.items) {
        this.items[n].price = this.items[n].price.toString();
        this.items[n].price = this.items[n].price.replace(/[^\d]/g, "");
        play.append("min[]", this.items[n].min);
        play.append("max[]", this.items[n].max);
        play.append("price[]", this.items[n].price);
      }
      this.axios
        .post("/api/weightfee/add", play)
        .then((res) => {
          this.flashMessage.success({
            title: "message",
            message: "Add successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
          this.numberformat();
        })
        .catch((err) => {
          this.flashMessage.error({
            title: "message",
            message: "Add faild",
            time: 5000,
            blockClass: "custom-block-class",
          });
        });
    },
    maxvalue() {
      if (this.items.length > 1) {
        for (var n = 1; n < this.items.length; n++) {
          this.items[n].min = this.items[n - 1].max;
        }
      }
    },
    addItem: function () {
      this.items.push({
        min: this.items[this.items.length - 1].max,
        max: "",
        price: "",
      });
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
    },
    numberformat() {
      for (let n in this.items) {
        this.items[n].min = this.items[n].min.toString();
        this.items[n].max = this.items[n].max.toString();
        this.items[n].price = this.items[n].price.toString();
        this.items[n].min = this.items[n].min.replace(/[^\d]/g, "");
        this.items[n].max = this.items[n].max.replace(/[^\d]/g, "");
        this.items[n].price = this.items[n].price.replace(/[^\d]/g, "");
        this.items[n].price = this.items[n].price.replace(
          /(\d)(?=(\d{3})+(?!\d))/g,
          "$1."
        );
        console.log(this.items[n].price);
      }
    },
  },
};
</script>
