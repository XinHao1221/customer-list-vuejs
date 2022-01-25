<template>

    <h1>Add new customer</h1>

    <br/>

    <form @submit="addCustomer">
        <div class="container">

            <div class="input-group mb-5">
                <span class="input-group-text">Customer Name</span>
                <input type="text" aria-label="Customer Name" class="form-control is-valid" id="customer-name" required>
            </div>
            <div class="input-group mb-5">
                <span class="input-group-text">Age</span>
                <input type="number" aria-label="Customer Name" class="form-control is-valid" id="age" required>
            </div>
            <div class="input-group mb-5">
                <span class="input-group-text">Email Address</span>
                <input type="email" aria-label="exp: abc@gmail.com" class="form-control is-valid" id="email-address" required>
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Save</button>
            </div>
        </div>

    </form>
    
</template>

<script>
import axios from 'axios'

const baseURL = "http://localhost:3000/todos"

export default {
    name: "Add Customer",
    data() {
        return {

        }
    },
    methods: {
        async addCustomer() {
            const res = await axios.put(baseURL, 
            {name: document.getElementById('customer-name').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email-address').value});

            console.log(res);
        }
    }
}

</script>
