<template>
    <div class="card container">
        <div class="card-header">Setting Account</div>
        <div class="card-body">
            <validation-observer ref="observer" v-slot="{ invalid }">
                <form @submit.prevent="submit">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required|max:10"
                    >
                        <v-text-field
                            v-model="name"
                            :counter="10"
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
                            regex: '^(09|08|03|01)\\d{8}$',
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
                            disabled
                            required
                        ></v-text-field>
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="password"
                        rules="required"
                    >
                        <v-text-field
                            v-model="pass"
                            :error-messages="errors"
                            label="Password"
                            type="password"
                            required
                        ></v-text-field>
                    </validation-provider>
                    <v-btn class="mr-4" type="submit" :disabled="invalid">
                        submit
                    </v-btn>
                </form>
            </validation-observer>
        </div>
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
    data(){
        return{
        name: "",
        phoneNumber: "",
        email: "",
        pass: "",
    }},
    mounted() {
        this.detail();
    },
    methods: {
        submit() {
            this.$refs.observer.validate();
            const play={
                    name:this.name,
                    phone:this.phoneNumber,
                    pass:this.pass,
                };
            this.axios
                .post("/api/ad/pass/edit",play)
                .then((res) => {
                    this.flashMessage.success({
                        title: "Message",
                        message: "successfully",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                })
                .catch((err) => {
                    this.flashMessage.error({
                        title: "message",
                        message: "faild",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                });
        },
        detail() {
            this.axios
                .get("/api/ad/setting")
                .then((res) => {
                    this.name=res.data.name;
                    this.phoneNumber=res.data.phone;
                    this.pass=res.data.password;
                    this.email=res.data.email;
                })
                .catch((err) => {
                });
        },
    },
};
</script>
