<template>
    <NavBar/>
    <main>
        <router-view/>
    </main>
    <FooterSection/>
</template>
<script>
import NavBar from '@/components/frontend/Nav.vue'
import FooterSection from '@/components/frontend/Foot.vue'
export default {
    name: 'FrontendLayout',
    components: {
        NavBar,
        FooterSection,
    }
    
}
</script>