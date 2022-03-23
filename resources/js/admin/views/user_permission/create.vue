<template>
        <div class="container-fluid">
      <div class="mx-auto" style="width: 700px">
        <div class="card">
          <div class="card-header">Create Permission</div>
          <div class="card-body">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="name"
                  rules="required|max:50"
                >
                  <v-text-field
                    v-model="name"
                    :counter="50"
                    :error-messages="errors"
                    label="name"
                    required
                  ></v-text-field>
                </validation-provider>
                <div style="color: red" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>

                <br />
                <div class="row">
                  <div class="col-sm-4">
                    <label for="">Dashboard</label>
                          <div><input v-model="selected" type="checkbox" value="View_dashboard" /> View
                          dashboard</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Fee ship between city</label>
                          <div><input v-model="selected" type="checkbox" value="View_feeship" /> View
                          fee ship</div>
                          <div><input v-model="selected" type="checkbox" value="Create_feeship" /> Create
                          fee ship</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_feeship" /> Edit
                          fee ship</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_feeship" /> Delete
                          fee ship</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Fee ship in and out town</label>
                          <div><input v-model="selected" type="checkbox" value="View_feeship_town" /> View
                          fee ship at town</div>
                          <div><input v-model="selected" type="checkbox" value="Create_feeship_town" /> Create
                          fee ship at town</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_feeship_town" /> Edit
                          fee ship at town</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_feeship_town" /> Delete
                          fee ship at town</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Weight fee</label>
                          <div><input v-model="selected" type="checkbox" value="View_weightfee" /> View
                          weight fee</div>
                          <div><input v-model="selected" type="checkbox" value="Create_weightfee" /> Create
                          weight fee</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_weightfee" /> Edit
                          weight fee</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_weightfee" /> Delete
                          weight fee</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Permission</label>
                          <div><input v-model="selected" type="checkbox" value="View_permission" /> View
                          permission</div>
                          <div><input v-model="selected" type="checkbox" value="Create_permission" /> Create
                          permission</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_permission" /> Edit
                          permission</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_permission" /> Delete
                          permission</div>
                          <br>
                          <div><input v-model="selected" type="checkbox" value="View_user_permission" /> View
                          user permission</div>
                          <div><input v-model="selected" type="checkbox" value="Create_user_permission" /> Create
                          user permission</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_user_permission" /> Edit
                          user permission</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_user_permission" /> Delete
                          user permission</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Posts</label>
                          <div><input v-model="selected" type="checkbox" value="View_posts" /> View
                          posts</div>
                          <div><input v-model="selected" type="checkbox" value="Create_posts" /> Create
                          posts</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_posts" /> Edit
                          posts</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_posts" /> Delete
                          posts</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Message</label>
                          <div><input v-model="selected" type="checkbox" value="View_message" /> View
                          message</div>
                          <div><input v-model="selected" type="checkbox" value="Create_message" /> Create
                          message</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_message" /> Edit
                          message</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_message" /> Delete
                          message</div>
                  </div>
                  <div class="col-sm-4">
                    <label for="">Shipper</label>
                          <div><input v-model="selected" type="checkbox" value="View_order" /> View
                          order</div>
                          <div><input v-model="selected" type="checkbox" value="Print_order" /> Print
                          order</div>
                          <div><input v-model="selected" type="checkbox" value="Change_status_order" /> Change status
                          order</div>
                  </div>
                </div>
                <br />
                <v-btn
                  class="mr-4"
                  type="submit"
                  :disabled="invalid"
                  depressed
                  color="primary"
                >
                  submit
                </v-btn>
              </form>
            </validation-observer>
          </div>
        </div>
      </div></div>
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
  data: () => ({
    selected: [],
    name: "",
    errors: {},
  }),
  methods: {
    submit() {
    if(this.selected.length==0){
        alert("Select item to submit");
    }else{
      const payload = { name: this.name, selected: this.selected };
      this.axios
        .post("/api/add/permission", payload)
        .then((result) => {
          this.flashMessage.success({
            title: "Message",
            message: "add successfully",
            time: 5000,
            blockClass: "custom-block-class",
          });
        })
        .catch((err) => {
          this.flashMessage.error({
            title: "message",
            message: "new add faild",
            time: 5000,
            blockClass: "custom-block-class",
          });
          if ((err.response.status = 422)) {
            console.log(err);
            this.errors = err.response.data.errors;
          }
        });}
    },
  },
};
</script>
<style scoped>
.w-150px {
  width: 150px;
}
</style>
