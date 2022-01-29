<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Todo</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <nuxt-link exact active-class="active" class="nav-link" to="/home">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link active-class="active" class="nav-link" to="/work">Work</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
    margin-bottom: 15px;
}
.nav-item {
    margin-left: 20px;
    font-size: 15px;
}
</style>