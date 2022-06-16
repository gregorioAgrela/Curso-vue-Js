import Address from './address';
export default{
template:`<div class="contact-details-component>
<h4>Contact Details:</h4>
<label for="phone" class="form-control">Phone: </label>
<input class="form-control input-sm" name="phone" v-model="phone">
<label for="email" class="form-control">Email: </label>
<input class="form-control input-sm" name="email" v-model="email">
<h4>Address:</h4>
<address :address-type="addressType"></address>
//see camelCase vs kebab-case explanation below
</div>`,
props:['phone', 'email'],
data:(){
return:{
addressType:'Office'
}
},
components:{Address}
}