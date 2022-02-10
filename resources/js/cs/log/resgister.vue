<template>
  <v-app>
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form @submit.prevent="register" class="user">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="form.name"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Name"
                    />
                    <div class="errorlog" v-if="errors.name">{{errors.name[0]}}</div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="form.email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email"
                    />
                    <div class="errorlog" v-if="errors.email">{{errors.email[0]}}</div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="form.phone"
                      class="form-control form-control-user"
                      id="Phone"
                      placeholder="Phone"
                      @keyup="numberformat"
                    />
                    <div class="errorlog" v-if="errors.phone">{{errors.phone[0]}}</div>
                  </div>
                  <v-autocomplete
                    rounded
                    solo
                    v-model="form.address"
                    :items="getallcity"
                    item-text="name"
                    item-value="id"
                    placeholder="City"
                    id="city"
                  ></v-autocomplete>
                    <div class="errorlog" v-if="errors.address">{{errors.address[0]}}</div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                      v-model="form.pass"
                        type="password"
                        class="form-control form-control-user"
                        id="InputPassword"
                        placeholder="Password"
                      />
                      <div class="errorlog" v-if="errors.pass">{{errors.pass[0]}}</div>
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        v-model="form.pass2"
                        class="form-control form-control-user"
                        id="RepeatPassword"
                        placeholder="Repeat Password"
                      />
                    <div class="errorlog" v-if="errors.pass2">{{errors.pass2[0]}}</div>
                      <div class="errorpass"></div>
                    </div>
                  </div>
                  <br />
                  <input
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                    value="Register Account"
                  />
                  <hr />
                  <!-- <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a> -->
                </form>
                <hr />
                <div class="text-center">
                  <router-link class="small" :to="{name:'login'}"
                    >Already have an account? Login!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></v-app
  >
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        address: "",
        pass: "",
        pass2: "",
        email: "",
        phone: "",
      },
      errors:{}
    };
  },
  mounted() {
    this.$store.dispatch("feeship/getallcity");
  },
  computed: {
    getallcity() {
      return this.$store.getters["feeship/getallcity"];
    },
  },
  methods: {
    numberformat() {
      let num = document.getElementById("Phone").value;
      num = num.toString();
      num = num.replace(/[^\d]/g, "");
      this.form.phone = num;
      document.getElementById("Phone").value = num;
    },
    register() {
      var address_name=document.querySelector('#city').value;
        const play = {
          name: this.form.name,
          address: this.form.address,
          pass: this.form.pass,
          pass2:this.form.pass2,
          email: this.form.email,
          phone: this.form.phone,
          address_name:address_name
        };
        this.axios
          .post("/api/register", play)
          .then((res) => {
            this.flashMessage.success({
              title: "Message",
              message: "Sign up successfully",
              time: 5000,
              blockClass: "custom-block-class",
            });
            this.$router.push({name:'login'});
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
          });
    },
  },
};
</script>
<style >
.errorpass {
  color: red;
  display: block;
}
.errorlog{
  color: red;
}
</style>

