export default{
    template:`<div class="user-component">
    <label for="name" class="form-control">Name: </label>
    <input class="form-control input-sm" name="name" v-model="name">
    <contact-details :phone="phone" :email="email"></contact-details>
    </div>`,
    data(){
    return{
    name:'',
    phone:'',
    email:''
    }
    },
    }