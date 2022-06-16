export default{
    template:`<div class="address-component">
    <h6>{{addressType}}</h6>
    <label for="block" class="form-control">Block: </label>
    <input class="form-control input-sm" name="block" v-model="block">
<label for="street" class="form-control">Street: </label>
<input class="form-control input-sm" name="street" v-model="street">
<label for="city" class="form-control">City: </label>
<input class="form-control input-sm" name="city" v-model="city">
</div>`,
props:{
addressType:{
required:true,
type:String,
default:'Office'
},
data(){
return{
block:'',
street:'',
city:''
}
}
}