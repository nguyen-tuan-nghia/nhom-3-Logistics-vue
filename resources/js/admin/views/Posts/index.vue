<template>
        <div class="container-fluid">
      <div class="mx-auto">
        <div class="card">
          <div class="card-header">List posts</div>
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
                  <th scope="col">Title</th>
                  <th scope="col">Avata</th>
                  <th scope="col">Keywords</th>
                  <th scope="col">Created at</th>
                  <th scope="col">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(posts, index) in GetAllPosts.data" :key="index">
                  <td>
                <div class="form-check">
                <input v-model="selected" class="form-check-input" type="checkbox" :value="posts.id" @change="select">
                </div>
                  </td>
                  <td>
                    {{ GetAllPosts.from + index |minus}}
                  </td>
                  <td>{{ posts.title }}</td>
                  <td>
                    <img :src="`/images/${posts.image}`" style="width: 150px" />
                  </td>
                  <td>{{ posts.keywords }}</td>
                  <td>{{posts.created_at|dateformat}}</td>
                  <td>{{posts.updated_at|dateformat}}</td>
                  <td>
                    <router-link :to="{name:'editPosts',params:{id:posts.id}}"
                      ><v-icon>mdi-pencil</v-icon></router-link
                    >
                  </td>
                  <td>
                    <a @click="deletePosts(posts)"
                      ><v-icon>mdi-delete</v-icon></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: GetAllPosts.prev_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllPosts.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAllPosts.last_page"
                  :key="n"
                  class="page-item"
                  :class="{ active: GetAllPosts.current_page == n }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: GetAllPosts.next_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllPosts.current_page + 1)"
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
      items: ["title", "keywords"],
      selectPomission: '',
      search:'',
      groupBy:''
    };
  },
  mounted() {
    this.$store.dispatch("posts/GetAllPosts");
  },
  computed: {
    GetAllPosts() {
      return this.$store.getters['posts/GetAllPosts'];
    },
    GetAllPostsID() {
      return this.$store.getters['posts/GetAllPostsID'];
    },
  },
  methods: {
    searchitem(){
        const playload={groupBy:this.groupBy,search:this.search};
        this.$store.dispatch("posts/searchItem",playload);
    },
    deleteChecked() {
      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
      if (confirm('Do you really want to delete this item')) {
        for (let n in this.selected) {
          this.GetAllPosts.data = this.GetAllPosts.data.filter((obj) => {
            return obj.id != this.selected[n];
          });
        }
        const app = new FormData();
        for (let i in this.selected) {
          app.append("selected[]", this.selected[i]);
        }
        this.axios
          .post(`/api/posts/delete-checked`, app)
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
        for (var post in this.GetAllPostsID.data) {
          this.selected.push(this.GetAllPostsID.data[post].id);
        }
        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select() {
      if (this.GetAllPostsID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange(page) {
      this.$store.dispatch("posts/getPagePosts", page);
    },
    deletePosts(posts) {
      if (confirm(`Delete ${posts.title}`)) {
        this.axios
          .get(`/api/posts/delete/${posts.id}`)
          .then((res) => {
            this.GetAllPosts.data = this.GetAllPosts.data.filter((obj) => {
              return obj.id != posts.id;
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

