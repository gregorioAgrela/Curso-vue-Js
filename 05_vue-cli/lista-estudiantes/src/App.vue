<template>
  <div id="app">
    <hr>
    <h2> {{titulo }}</h2>
    <div class="container">
      <div class="form">
        <div class="form-group">
          <label>nombre</label>
          <input type="text" class="form-control" v-model="registro.nombre">
        </div>
        <div class="form-group">
          <label> Colegio</label>
          <input type="text" class="form-control" v-model="registro.colegio">
        </div>
        <br>
        <button class="btn btn-primary" @click="agregarEstudiante"> Guardar</button>
      </div>
      <hr>
      <div class="row">
        <div class="col-5" v-for="registro in registros">
          <div class="card">
            <div class="form-group">
              <h2> {{registro.nombre}}</h2>
              <hr>
              <p> {{registro.colegio}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'welcome to Your gowplay',
      registro:{
        nombre:'',
        colegio:''
      },
      registros:[
        {
          nombre:'Juan perez',
          colegio: 'Juan xxv'
        }
      ],
    };
  },
  methods:{
    agregarEstudiante: function(){
      const {nombre, colegio} = this.registro;
      this.registros.push({
        nombre,
        colegio
      })
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
