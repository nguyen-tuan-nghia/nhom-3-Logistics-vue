<template>
        <div class="container-fluid">
      <div class="mx-auto">
        <div class="card">
          <div class="card-header">List customer statistic</div>
          <div class="card-body">
            <v-row>
              <v-col>
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
                  <th>Number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Order</th>
                  <th scope="col">COD</th>
                  <th scope="col">Feeship</th>
                  <th scope="col">Created at</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(customerStatistic, index) in GetAllcustomerStatistic.data" :key="index">
                  <td>
                    {{ GetAllcustomerStatistic.from + index |minus}}
                  </td>
                  <td>{{ customerStatistic.name }}</td>
                  <td>{{ customerStatistic.email }}</td>
                    <td>{{customerStatistic.statistic.order}}</td>
                    <td>{{customerStatistic.statistic.cod |moneyFormat}} VND</td>
                    <td>{{customerStatistic.statistic.feeship |moneyFormat}} VND</td>
                  <td>{{customerStatistic.created_at|dateformat}}</td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: GetAllcustomerStatistic.prev_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllcustomerStatistic.current_page - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="n in GetAllcustomerStatistic.last_page"
                  :key="n"
                  class="page-item"
                  :class="{ active: GetAllcustomerStatistic.current_page == n }"
                  aria-current="page"
                >
                  <a class="page-link" @click="PageChange(n)">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: GetAllcustomerStatistic.next_page_url==null }"
>
                  <a
                    @click="PageChange(GetAllcustomerStatistic.current_page + 1)"
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
      items: ["name", "email"],
      selectPomission: '',
      search:'',
      groupBy:''
    };
  },
  mounted() {
    this.$store.dispatch("customerStatistic/GetAllcustomerStatistic");
  },
  computed: {
    GetAllcustomerStatistic() {
      return this.$store.getters['customerStatistic/GetAllcustomerStatistic'];
    },
    GetAllcustomerStatisticID() {
      return this.$store.getters['customerStatistic/GetAllcustomerStatisticID'];
    },
  },
  methods: {
    searchitem(){
        const playload={groupBy:this.groupBy,search:this.search};
        this.$store.dispatch("customerStatistic/searchItem",playload);
    },
    PageChange(page) {
      this.$store.dispatch("customerStatistic/getPagecustomerStatistic", page);
    },
  },
};
</script>

