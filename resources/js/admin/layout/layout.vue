<template>
    <v-app>
    <div id="wrapper">

        <!-- Sidebar -->
        <Slide></Slide>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
            <Header></Header>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <router-view></router-view>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <Footer></Footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    </v-app>
</template>
<script>
import Slide from '../components/slide.vue';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
    components:{
        Slide,
        Header,
        Footer
    }
}
</script>

