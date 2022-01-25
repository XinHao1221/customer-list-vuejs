<template>

    <div>
        <form @submit="updateCustomerDetails">
        <div class="container">

            <div class="input-group mb-5">
                <span class="input-group-text">Customer Name</span>
                <input type="text" aria-label="Customer Name" class="form-control" id="customer-name" :value="customer.name">
            </div>
            <div class="input-group mb-5">
                <span class="input-group-text">Age</span>
                <input type="number" aria-label="Customer Name" class="form-control" id="age" :value="customer.age">
            </div>
            <div class="input-group mb-5">
                <span class="input-group-text">Email Address</span>
                <input type="email" aria-label="exp: abc@gmail.com" class="form-control" id="email-address" :value="customer.email">
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Save</button>
            </div>
        </div>

    </form>
    </div>

</template>


<script>

import axios from 'axios';

const baseURL = "http://localhost:3000/todos";

export default {
    name: {

    },
    data() {
        return {
            id: 0,
            customer: {}
        }
    },
    created() {
        // get query string
        this.id = this.$route.query.id;

        this.loadCustomerDetails();
    },
    methods: {
        async loadCustomerDetails() {
            // get data from json-server
            try {
                const res = await axios.get(baseURL + "/" + this.id);

                this.customer = res.data;
            }
            catch(e) {
                console.error(e);
            }
        },
        async updateCustomerDetails() {

            // udpdate customer details
            const res = await axios.put(baseURL + "/" + this.id, 
                    {name: document.getElementById('customer-name').value,
                    age: document.getElementById('age').value,
                    email: document.getElementById('email-address').value});

            console.log(res);

        }
    },
}
</script>