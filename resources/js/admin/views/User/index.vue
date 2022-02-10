<template>
        <div class="container-fluid">
      <div class="mx-auto">
        <div class="card">
          <div class="card-header">List User</div>
          <div class="card-body">
            <v-row>
              <v-col>
                <a @click="deleteChecked"><v-icon>mdi-delete</v-icon>Delete</a>
              </v-col>
            <v-col class="d-flex" cols="12" sm="2">
              <v-select v-model="groupBy" :items="items" label="Group by"></v-select>
            </v-col>
            <v-col>
          <v-text-field
            v-model="search"
            label="search"
            @input="searchitem"
            :disabled="groupBy==''"
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
                  <th scope="col">Created at</th>
                  <th scope="col">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(User, index) in GetAllUser.data" :key="index">
                  <td>
                <div class="form-check">
                <input v-model="selected" class="form-check-input" type="checkbox" :value="User.id" @change="select">
                </div>
                  </td>
                  <td>
                    {{ GetAllUser.from + index |minus}}
                  </td>
                  <td>{{ User.name }}</td>
                  <td>{{ User.email }}</td>
                  <td>{{User.created_at|dateformat}}</td>
                  <td>{{User.updated_at|dateformat}}</td>
                  <td>
                    <a @click="deleteUser(User)"
                      ><v-icon>mdi-delete</v-icon></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: GetAllUser.prev_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllUser.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAllUser.last_page"
                  :key="n"
                  class="page-item"
                  :class="{ active: GetAllUser.current_page == n }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: GetAllUser.next_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllUser.current_page + 1)"
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
      items: ["name", "email"],
      selectPomission: '',
      search:'',
      groupBy:''
    };
  },
  mounted() {
    this.$store.dispatch("User/GetAllUser");
  },
  computed: {
    GetAllUser() {
      return this.$store.getters['User/GetAllUser'];
    },
    GetAllUserID() {
      return this.$store.getters['User/GetAllUserID'];
    },
  },
  methods: {
    searchitem(){
        const playload={groupBy:this.groupBy,search:this.search};
        this.$store.dispatch("User/searchItem",playload);
    },
    deleteChecked() {
      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
      if (confirm('Do you really want to delete this item')) {
        for (let n in this.selected) {
          this.GetAllUser.data = this.GetAllUser.data.filter((obj) => {
            return obj.id != this.selected[n];
          });
        }
        const app = new FormData();
        for (let i in this.selected) {
          app.append("selected[]", this.selected[i]);
        }
        this.axios
          .post(`/api/User/delete-checked`, app)
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
      }}
    },
    checkAll() {
      console.log("check");
      if (this.isSelectedAll == false) {
        this.selected = [];
        this.isSelectedAll = false;
        console.log(this.isSelectedAll);
      } else if (this.isSelectedAll == true) {
        for (var post in this.GetAllUserID.data) {
          this.selected.push(this.GetAllUserID.data[post].id);
        }
        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select() {
      if (this.GetAllUserID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange(page) {
      this.$store.dispatch("User/getPageUser", page);
    },
    deleteUser(User) {
      if (confirm(`Delete ${User.name}`)) {
        this.axios
          .get(`/api/User/delete/${User.id}`)
          .then((res) => {
            this.GetAllUser.data = this.GetAllUser.data.filter((obj) => {
              return obj.id != User.id;
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

