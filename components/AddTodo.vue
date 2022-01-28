<template>
    <div class="input__todo">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="My Todo">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Todo description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-warning">Add</button>
    </div>
</template>

<script>
    export default {
        
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