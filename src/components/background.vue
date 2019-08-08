<template>
    <div id="backgroundFixo">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    #backgroundFixo{
        width: 100%;
        height: 100%;
        padding: 0px;
        position: relative;
        background-image: linear-gradient( to bottom, rgba(0,0,0,1) , transparent )
    }
</style>
