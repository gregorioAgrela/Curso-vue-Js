<template>
    <div>
        <h1>{{nombre}}</h1>
        <h2>{{ciudad}}</h2>
        <h3>{{correo}}</h3>
        <h4>{{telefono}}</h4>
    </div>
</template>
<script>
export default {
    props:{
        nombre:[Number,String],
        ciudad:{
            type:String,
            default:"Data not null"
        },
        correo:String,
    }
}
</script>
<style scope>

</style>