<template>
   <div id="msj">
    <ul>
        <enviar v-for="data in diasSemana ">
            {{data.text}}
        </enviar>
    </ul>
   </div>
</template>
<script>
export default ({
    name:"msj",
    data(){
        return {
            diasSemana:[
                {id:1,text:'Lunes'},
                {id:2,text:'Martes'},
                {id:3,text:'Miercoles'},
                {id:4,text:'Jueves'},
                {id:5,text:'Viernes'},
            ]
        }
    }
})
</script>
<style scoped>
</style>
