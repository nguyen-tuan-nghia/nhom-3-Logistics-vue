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
                <div style="col-sm-4or: red" v-if="errors.name">
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
                    <label for="">Order</label>
                          <div><input v-model="selected" type="checkbox" value="View_order" /> View
                          order</div>
                          <div><input v-model="selected" type="checkbox" value="Create_order" /> Create
                          order</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_order" /> Edit
                          order</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_order" /> Delete
                          order</div>
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
                    <label for="">Company</label>
                          <div><input v-model="selected" type="checkbox" value="View_company" /> View
                          Company</div>
                          <div><input v-model="selected" type="checkbox" value="Create_company" /> Create
                          Company</div>
                          <div><input v-model="selected" type="checkbox" value="Edit_company" /> Edit
                          Company</div>
                          <div><input v-model="selected" type="checkbox" value="Delete_company" /> Delete
                          Company</div>
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
  data: () => ({
    selected: [],
    name: "",
    errors: {},
  }),
  mounted(){
    this.getEdit();
  },
  methods: {
    getEdit(){
        this.axios.get(`/api/csPermission/edit/${this.$route.params.id}`).then((res)=>{
            console.log(res.data);
            this.name=res.data.role.name;
            for(let n in res.data.selected){
            this.selected.push(res.data.selected[n].name);}
        }).catch((err)=>{
            console.log(err);
        });
    },
    submit() {
    if(this.selected.length==0){
        alert("Select item to submit");
    }else{
      const payload = { name: this.name, selected: this.selected };
      this.axios
        .post(`/api/update/csPermission/${this.$route.params.id}`, payload)
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
