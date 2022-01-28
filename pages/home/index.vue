<template>
    <div>
        <h1>Home Todos</h1>
        <div class="todos__wrapper">
            <TodoCard v-for="todo in 7" :key='todo'>{{todo}}</TodoCard>
        </div>
    </div>
</template>

<script>
import TodoCard from '@/components/Todocard'
    export default {
        components: {
            TodoCard
        }
    }
</script>

<style scoped>
    .todos__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }
</style>