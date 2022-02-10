<template>
        <div class="container-fluid">
      <div class="mx-auto">
        <div class="card">
          <div class="card-header">List Permission</div>
          <div class="card-body">
            <v-row>
              <v-col>
                <a @click="deleteChecked"><v-icon>mdi-delete</v-icon>Delete</a>
                <router-link :to="{name:'cscreatePermission'}"><v-icon>mdi-pencil</v-icon>Create Permission</router-link>
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
                  <th scope="col">name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(Permission, index) in GetAllPermission.data" :key="index">
                  <td>
                <div class="form-check">
                <input v-model="selected" class="form-check-input" type="checkbox" :value="Permission.id" @change="select">
                </div>
                  </td>
                  <td>
                    {{ GetAllPermission.from+index |minus}}
                  </td>
                  <td>{{ Permission.name }}</td>
                  <td>
                    <router-link :to="{name:'csuserPermission',params:{name:Permission.name}}"
                      ><v-icon>mdi-human-greeting-variant</v-icon></router-link
                    >
                  </td>
                  <td>
                    <router-link :to="{name:'cseditPermission',params:{id:Permission.id}}"
                      ><v-icon>mdi-pencil</v-icon></router-link
                    >
                  </td>
                  <td>
                    <a v-if="Permission.name!='Admin'" @click="deletePermission(Permission)"
                      ><v-icon>mdi-delete</v-icon></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: GetAllPermission.prev_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllPermission.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAllPermission.last_page"
                  :key="n"
                  class="page-item"
                  :class="{ active: GetAllPermission.current_page == n }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: GetAllPermission.next_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllPermission.current_page + 1)"
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
        </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      isSelectedAll: false,
      items: ["name"],
      selectPomission: '',
      search:'',
      groupBy:''
    };
  },
  mounted() {
    this.$store.dispatch("csPermission/GetAllPermission");
  },
  computed: {
    GetAllPermission() {
      return this.$store.getters['csPermission/GetAllPermission'];
    },
    GetAllPermissionID() {
      return this.$store.getters['csPermission/GetAllPermissionID'];
    },
  },
  methods: {
    searchitem(){
        const playload={groupBy:this.groupBy,search:this.search};
        this.$store.dispatch("csPermission/searchItem",playload);
    },
    deleteChecked() {
      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
      if (confirm('Do you really want to delete this item')) {
        for (let n in this.selected) {
          this.GetAllPermission.data = this.GetAllPermission.data.filter((obj) => {
            return obj.id != this.selected[n];
          });
        }
        const app = new FormData();
        for (let i in this.selected) {
          app.append("selected[]", this.selected[i]);
        }
        this.axios
          .post(`/api/csPermission/delete-checked`, app)
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
        for (var post in this.GetAllPermissionID.data) {
          this.selected.push(this.GetAllPermissionID.data[post].id);
        }
        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select() {
      if (this.GetAllPermissionID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange(page) {
      this.$store.dispatch("csPermission/getPagePermission", page);
    },
    deletePermission(Permission) {
      if (confirm(`Delete ${Permission.title}`)) {
        this.axios
          .get(`/api/csPermission/delete/${Permission.id}`)
          .then((res) => {
            this.GetAllPermission.data = this.GetAllPermission.data.filter((obj) => {
              return obj.id != Permission.id;
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

