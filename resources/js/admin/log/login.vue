<template>
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-employee-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Employee only!</h1>
                                    </div>
                                    <div v-if="errors.message">{{ errors.message }}</div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" v-model="form.email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                                        </div>
                                        <div v-if="errors.email">{{errors.email[0]}}</div>
                                        <div class="form-group">
                                            <input type="password" v-model="form.pass" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div v-if="errors.pass">{{errors.pass[0]}}</div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <a @click="login" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr>
                                        <!-- <a href="" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a> -->
                                        <!-- <a @click="authProvider('facebook')" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a> -->
                                    </form>
                                    <hr>
                                    <!-- <div class="text-center">
                                        <a class="small" href="">Forgot Password?</a>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return{
            form:{
                email:'',
                pass:''
            },
            errors:{},
            err:''

        }
    },
    methods:{
        login(){
            const payload={email:this.form.email,pass:this.form.pass};
            this.axios.post('/api/login/admin',payload)
            .then(res=>{this.$router.push({name:'dashboard'})})
            .catch(err=>{
                console.log(err.response.data.message);
                console.log(err.response.data.errors);
               if(err.response.status==422){
                   this.errors=err.response.data.errors;
               }if(err.response.status==423){
                   this.errors=err.response.data;
               }
            });
         },
        authProvider(provider) {
            let self = this;
            this.$auth.authenticate(provider).then(response => {
                self.socialLogin(provider,response);
            }).catch(err => {
                console.log({err:err});
            });
        },
        socialLogin(provider,response) {
            this.$http.post('/api/social/'+provider, response).then(response => {
                this.$router.push({path:'/'});
            }).catch(err => {
                console.log({err:err});
            });
        }
        }
}
</script>zz
