<template>
    <div>
        <div class="todos__card">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .todos__card {
        min-width: 200px;
        min-height: 200px;
        margin: 20px;
        box-shadow: 3px 3px 5px black;
        background: blanchedalmond;
        padding: 10px;
        border-radius: 10px;
    }
</style>