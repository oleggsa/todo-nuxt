<template>
    <div class="input__todo">
        <div class="mb-3">
            <label class="form-label">My Todo</label>
            <input 
            type="email" 
            class="form-control" 
            placeholder="Title" 
            :value='title' 
            @input="title = $event.target.value">
        </div>
        <div class="mb-3">
            <textarea class="form-control" 
            rows="3" 
            placeholder="Description"
            :value='description' 
            @input="description = $event.target.value"
            >
            </textarea>
        </div>
        <button type="button" 
        class="btn btn-warning" 
        @click="AddTodo">Add</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            title: '',
            description: ''
            }
        },
        methods: {
            AddTodo() {
                if (this.title.length || this.description.length){
                    if (document.location.pathname === '/home') {
                        this.$store.commit('ADD_HOME_TODO', {
                        id: Date.now(),
                        title: this.title,
                        description: this.description
                    })
                    this.title = '';
                    this.description = '';
                    }
                    if (document.location.pathname === '/work') {
                        this.$store.commit('ADD_WORK_TODO', {
                        id: Date.now(),
                        title: this.title,
                        description: this.description
                    })
                    this.title = '';
                    this.description = '';
                    }
                }
            }
        }
    }
</script>

<style scoped>
.input-group {
    width: 300px;
}
.input__todo {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>