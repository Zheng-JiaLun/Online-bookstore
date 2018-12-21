<template>
    <div class="page">
        <Islogin/>
        <Nav/>
    </div>
</template>

<script>
import Nav from '../components/nav.vue'
import Islogin from '../components/islogin.vue'
export default {
    name:'Mine',
    components:{
        Nav,
        Islogin
    }
}
</script>

<style scoped>

</style>