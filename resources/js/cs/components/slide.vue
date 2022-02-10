<template>
    <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
    >
        <!-- Sidebar - Brand -->
        <router-link
            class="sidebar-brand d-flex align-items-center justify-content-center"
            :to="{ name: 'csdashboard' }"
        >
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3" id="customer_name"></div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'csdashboard' }">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></router-link
            >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Interface</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
            >
                <i class="fas fa-fw fa-cog"></i>
                <span>Orders</span>
            </a>
            <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
            >
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Orders Components:</h6>
                    <router-link
                        class="collapse-item" v-show="Create_order"
                        :to="{ name: 'addOrder' }"
                        >Create order</router-link
                    >
                    <router-link v-show="View_order"
                        class="collapse-item"
                        :to="{ name: 'listOrders' }"
                        >List orders</router-link
                    >
                </div>
            </div>
        </li>

        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
            <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
            >
                <i class="fas fa-fw fa-wrench"></i>
                <span>Company</span>
            </a>
            <div
                id="collapseUtilities"
                class="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
            >
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Company Components:</h6>
                    <router-link v-show="View_company"
                        class="collapse-item"
                        :to="{ name: 'listCustomerCompany' }"
                        >List Company</router-link
                    >
                </div>
            </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Addons</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
            >
                <i class="fas fa-fw fa-folder"></i>
                <span>Folder</span>
            </a>
            <div
                id="collapsePages"
                class="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
            >
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Permission:</h6>
                    <router-link v-show="View_permission"
                        class="collapse-item"
                        :to="{ name: 'cslistPermission' }"
                        >List Permission</router-link
                    >
                </div>
            </div>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button
                class="rounded-circle border-0"
                @click="sidebarToggle"
                id="sidebarToggle"
            ></button>
        </div>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            View_order: false,
            Create_order: false,
            View_company: false,
            View_permission: false,
        };
    },
    mounted() {
        document.getElementById("customer_name").innerHTML =localStorage.getItem("cus_name");
        this.getauth();
    },
    methods: {
        getauth() {
            this.axios
                .get("/api/customer/auth")
                .then((res) => {
                    console.log(res.data);
                    for (let n in res.data) {
                        if (res.data[n].name == "View_order") {
                            this.View_order = true;
                        }
                        if (res.data[n].name == "Create_order") {
                            this.Create_order = true;
                        }
                        if (res.data[n].name == "View_company") {
                            this.View_company = true;
                        }
                        if (res.data[n].name == "View_permission") {
                            this.View_permission = true;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        sidebarToggle() {
            let element = document.getElementById("accordionSidebar");
            if (element.classList.contains("toggled")) {
                element.classList.remove("toggled");
            } else {
                element.classList.toggle("toggled");
            }
        },
    },
};
</script>
