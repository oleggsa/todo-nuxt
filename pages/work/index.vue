<template>
    <div>
        <h1>Work Todos</h1>
        <div class="todos__wrapper">
            <TodoCard v-for="todo in this.workList" :key='todo.id'>
                <button 
                    type="button" 
                    class="btn-close todo__delete" 
                    aria-label="Close"
                    @click="deleteItem(todo)"
                ></button>
                <h3>{{todo.title}}</h3>
                <p>{{todo.description}}</p>
            </TodoCard>
        </div>
    </div>
</template>

<script>
import TodoCard from '@/components/Todocard'
    export default {
        data() {
            return {
                workList: []
            }
        },
        components: {
            TodoCard
        },
        mounted() {
            this.workList = this.$store.state.work;
        },
        methods: {
            deleteItem(todo) {
                this.workList = this.workList.filter(el => el.id !== todo.id)
            }
        }
    }
</script>

<style scoped>
    .todos__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    h3, p {
        word-wrap: break-word;
    }
    .todo__delete {
        position: absolute;
        right: 13px;
        top: 10px;
    }
</style>