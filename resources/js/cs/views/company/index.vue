<template>
    <v-app
        ><v-content>
            <div class="mx-auto">
                <div class="card">
                    <div class="card-header">List Company</div>
                    <div class="card-body">
                        <v-row>
                            <v-col sm="1">
                                <a @click="deleteChecked"
                                    ><v-icon>mdi-delete</v-icon>Delete</a
                                >
                            </v-col>
                            <v-col>
                                <a @click="dialog = true">Create</a>
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
                                    <th scope="col">Address</th>
                                    <th>Status</th>
                                    <th scope="col">Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(Company, index) in GetAllCompany.data"
                                    :key="index"
                                >
                                    <td>
                                        <div class="form-check">
                                            <input
                                                v-model="selected"
                                                class="form-check-input"
                                                type="checkbox"
                                                :value="Company.id"
                                                @change="select"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        {{ index + 1 }}
                                    </td>
                                    <td>{{ Company.name }}</td>
                                    <td>
                                        <span>{{ Company.city_name }}</span>
                                        /<span>{{
                                            Company.district_name
                                        }}</span>
                                        /<span>{{ Company.wards_name }}</span>

                                        /<span>{{ Company.address }}</span>
                                    </td>
                                    <td>
                                        <label class="switch">
                                            <input
                                                @click="
                                                    changeStatusCompany(
                                                        Company.id
                                                    )
                                                "
                                                :id="`company_status_${Company.id}`"
                                                v-if="Company.status != null"
                                                checked
                                                type="checkbox"
                                            />
                                            <input
                                                @click="
                                                    changeStatusCompany(
                                                        Company.id
                                                    )
                                                "
                                                :id="`company_status_${Company.id}`"
                                                v-else
                                                type="checkbox"
                                            />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        {{ Company.created_at | dateformat }}
                                    </td>
                                    <td><a @click="edit(Company)"><v-icon>mdi-pencil</v-icon></a></td>
                                    <td>
                                        <a @click="deleteCompany(Company)"
                                            ><v-icon>mdi-delete</v-icon></a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
<!--add-->
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Company Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <validation-observer
                                ref="observerCompany"
                                v-slot="{ invalid }"
                            >
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
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="close"
                                        >
                                            Colse
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
                <v-dialog v-model="dialog2" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Edit company</span>
                        </v-card-title>
                        <v-card-text>
                            <validation-observer
                                ref="observerCompany"
                                v-slot="{ invalid }"
                            >
                                <form @submit.prevent="updateCompany">
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
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="close"
                                        >
                                            Colse
                                        </v-btn>
                                    </v-card-actions>
                                </form>
                            </validation-observer>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-content>
    </v-app>
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
            selected: [],
            isSelectedAll: false,
            items: ["name"],
            selectPomission: "",
            search: "",
            groupBy: "",
            dialog: false,
            company: {
                id:"",
                name: "",
                phone: "",
                city_id: "",
                district_id: "",
                wards_id: "",
                address: "",
            },
            getwardsCompany: [],
            getDistrictCompany: [],
            dialog2:false
        };
    },
    mounted() {
        this.$store.dispatch("company/GetAllCompany");
        this.$store.dispatch("feeship/getallcity");
    },
    computed: {
        GetAllCompany() {
            return this.$store.getters["company/GetAllCompany"];
        },
        getallcity() {
            return this.$store.getters["feeship/getallcity"];
        },
    },
    methods: {
        close(){
                this.dialog=false;
                this.dialog2=false;
                this.company.id='';
                this.company.name='';
                this.company.phone='';
                this.company.city_id='';
                this.company.district_id='';
                this.company.wards_id='';
                this.company.address='';
        },
        edit(company){
            this.axios.get(`/api/company/edit/${company.id}`).then(res=>{
                this.dialog2=true;
                this.company.id=res.data.id;
                this.company.name=res.data.name;
                this.company.phone=res.data.phone;
                this.company.city_id=res.data.city_id;
                this.findDistrictCompany();
                this.company.district_id=res.data.district_id;
                this.findwardsCompany();
                this.company.wards_id=res.data.wards_id;
                this.company.address=res.data.address;
            }).catch(err=>{
                console.log(err);
            })
        },
        changeStatusCompany(id) {
            if (
                (document.getElementById(`company_status_${id}`).checked = true)
            ) {
                this.axios
                    .post("/api/changeStatusCompany", { id: id })
                    .then((res) => {
                        for (let n in this.GetAllCompany.data) {
                            if (id != this.GetAllCompany.data[n].id) {
                                document.getElementById(
                                    `company_status_${this.GetAllCompany.data[n].id}`
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
        numberformat() {
            this.company.phone = this.company.phone.toString();
            this.company.phone = this.company.phone.replace(/[^\d]/g, "");
        },
        searchitem() {
            const playload = { groupBy: this.groupBy, search: this.search };
            this.$store.dispatch("company/searchItem", playload);
        },
        deleteChecked() {
            if (this.selected.length == 0) {
                alert("You need to select item to delete");
            } else {
                if (confirm("Do you really want to delete this item")) {
                    for (let n in this.selected) {
                        this.GetAllCompany.data = this.GetAllCompany.data.filter(
                            (obj) => {
                                return obj.id != this.selected[n];
                            }
                        );
                    }
                    const app = new FormData();
                    for (let i in this.selected) {
                        app.append("selected[]", this.selected[i]);
                    }
                    this.axios
                        .post(`/api/company/delete-checked`, app)
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
                for (var post in this.GetAllCompany.data) {
                    this.selected.push(this.GetAllCompany.data[post].id);
                }
                this.isSelectedAll = true;
                console.log(this.isSelectedAll);
            }
        },
        select() {
            if (this.GetAllCompany.data.length == this.selected.length) {
                this.isSelectedAll = true;
            } else {
                this.isSelectedAll = false;
            }
        },
        deleteCompany(Company) {
            if (confirm(`Delete ${Company.name}`)) {
                this.axios
                    .get(`/api/deleteCompany/${Company.id}`)
                    .then((res) => {
                        this.$store.dispatch("company/GetAllCompany");
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
        submitCompany() {
            this.$refs.observerCompany.validate();
            var city_name = document.getElementById("city_name_company").value;
            var district_name = document.getElementById(
                "District_name_company"
            ).value;
            var wards_name =
                document.getElementById("Wards_name_company").value;
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
                    this.close();
                    this.flashMessage.success({
                        title: "Message",
                        message: "add successfully",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                    this.$store.dispatch("company/GetAllCompany");
                    for (let n in this.GetAllCompany.data) {
                        if (res.data.id != this.GetAllCompany.data[n].id) {
                            document.getElementById(
                                `company_status_${this.GetAllCompany.data[n].id}`
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
        updateCompany(){
            this.$refs.observerCompany.validate();
            var city_name = document.getElementById("city_name_company").value;
            var district_name = document.getElementById(
                "District_name_company"
            ).value;
            var wards_name =
                document.getElementById("Wards_name_company").value;
            const play = {
                id: this.company.id,
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
                .post("/api/company/update", play)
                .then((res) => {
                    this.close();
                    this.flashMessage.success({
                        title: "Message",
                        message: "edit successfully",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                    this.$store.dispatch("company/GetAllCompany");
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
    },
};
</script>
