<template>
    <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
    >
        <!-- Sidebar - Brand -->
        <router-link
            class="sidebar-brand d-flex align-items-center justify-content-center"
            :to="{ name: 'dashboard' }"
        >
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'dashboard' }">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></router-link
            >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Interface</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item" v-show="notshipper">
            <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
            >
                <i class="fas fa-fw fa-cog"></i>
                <span>Posts</span>
            </a>
            <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
            >
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Posts Components:</h6>
                    <router-link
                        v-show="Create_posts"
                        class="collapse-item"
                        :to="{ name: 'addAdminPosts' }"
                        >Create Posts</router-link
                    >
                    <router-link
                        v-show="View_posts"
                        class="collapse-item"
                        :to="{ name: 'listAdminPosts' }"
                        >List Posts</router-link
                    >
                </div>
            </div>
        </li>
        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item" v-show="shipper">
            <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseorder"
                aria-expanded="true"
                aria-controls="collapseorder"
            >
                <i class="fas fa-fw fa-wrench"></i>
                <span>Order</span>
            </a>
            <div
                id="collapseorder"
                class="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
            >
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">User Components:</h6>
                    <router-link
                        class="collapse-item"
                        :to="{ name: 'shipper.listallorder' }"
                        >List all order</router-link
                    >
                    <router-link
                        class="collapse-item"
                        :to="{ name: 'shipper.listYourorder' }"
                        >Your order</router-link
                    >
                </div>
            </div>
        </li>
        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item" v-show="notshipper">
            <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
            >
                <i class="fas fa-fw fa-wrench"></i>
                <span>User</span>
            </a>
            <div
                id="collapseUtilities"
                class="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
            >
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">User Components:</h6>
                    <router-link
                        v-show="View_user"
                        class="collapse-item"
                        :to="{ name: 'listAdminUser' }"
                        >List User</router-link
                    >
                </div>
            </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Addons</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item" v-show="notshipper">
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
                    <router-link
                        v-show="permission"
                        class="collapse-item"
                        :to="{ name: 'listPermission' }"
                        >List Permission</router-link
                    >
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Shipping:</h6>
                    <router-link
                        v-show="shipfee"
                        class="collapse-item"
                        :to="{ name: 'listFee' }"
                        >Shipping fee</router-link
                    >
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Weight:</h6>
                    <router-link
                        v-show="weightfee"
                        class="collapse-item"
                        :to="{ name: 'listweight' }"
                        >Weight fee</router-link
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
            Create_posts: false,
            View_posts: false,
            View_user: false,
            permission: false,
            shipfee: false,
            weightfee: false,
            shipper: false,
            notshipper: true,
        };
    },
    mounted() {
        this.getauth();
    },
    methods: {
        sidebarToggle() {
            let element = document.getElementById("accordionSidebar");
            if (element.classList.contains("toggled")) {
                element.classList.remove("toggled");
            } else {
                element.classList.toggle("toggled");
            }
        },
        getauth() {
            this.axios
                .get("/api/admin/auth")
                .then((res) => {
                    console.log(res.data);
                    for (let n in res.data) {
                        if (
                            res.data[n].name == "View_order") {
                            this.shipper = true;
                        }
                        if (res.data[n].name == "Create_posts") {
                            this.Create_posts = true;
                        }
                        if (res.data[n].name == "View_posts") {
                            this.View_posts = true;
                        }
                        if (res.data[n].name == "View_user_permission") {
                            this.View_user = true;
                        }
                        if (res.data[n].name == "View_permission") {
                            this.permission = true;
                        }
                        if (res.data[n].name == "View_weightfee") {
                            this.weightfee = true;
                        }
                        if (res.data[n].name == "View_feeship") {
                            this.shipfee = true;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
