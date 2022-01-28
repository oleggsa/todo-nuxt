<template>
    <div>
        <Navbar />
        <AddTodo />
        <main>
            <div class="container">
                <nuxt />
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AddTodo from '@/components/AddTodo.vue'

export default {
    components: {
        Navbar,
        AddTodo
    }
}
</script>