<template>
<div>
<Hearder></Hearder>
<router-view></router-view>
<Footer></Footer>
</div>
</template>
<script>
import Hearder from'../components/hearder.vue';
import Footer from'../components/footer.vue';

export default ({
    components:{
        Hearder,
        Footer
    }
})
</script>

