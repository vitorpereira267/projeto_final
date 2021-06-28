<template>
  <div class="hello" style="width:100%; height: 100vh">
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      	resultados:"",
        pesquisa:""
    }
  },
  methods:{
    carregaInfo(){
      axios.get('https://finalspaceapi.com/api/v0/character') //https://finalspaceapi.com/api/v0/
          .then(
            res => {
              this.resultados = res.data
            }
          )
    }
  },
  mounted(){
    this.carregaInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.hello{
  background-image: url("https://images6.alphacoders.com/108/thumb-1920-1081312.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.space{
  display: inline-block;
  margin: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0,0, 0, 0.25);
}

</style>
