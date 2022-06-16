import Vue from 'vue';
Vue.component('user-component', require'./user-component');
Vue.component('contact-details', require'./contact-details');
new Vue({
el:'body'
});