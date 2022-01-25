<template>
    <div>
        <h1>Customer List</h1>

        <div>
            <!-- <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customerList" :key="customer.id">
                        <th scope="row">{{ customer.id }}</th>
                        <th>{{ customer.name }}</th>
                        <th>{{ customer.age }}</th>
                        <th>{{ customer.email }}</th>
                    </tr>
                </tbody>
            </table> -->

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customerList" :key="customer.id">
                        <th scope="row">{{ customer.id + 1 }}</th>
                        <td>{{customer.name}}</td>
                        <td>{{customer.age}}</td>
                        <td>{{customer.email}}</td>
                        <td>
                            <button style="background-color: red; color:white" @click="deleteCustomer(customer.id)">Delete</button>
                            <button style="background-color: blue; color:white" @click="editCustomerDetails(customer.id)">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

import axios from 'axios';

const baseURL = "http://localhost:3000/todos";

export default {
    name: 'Customer List',
    data(){
        return {
            customerList: [],
        }  
    },
    created() {
        // load data from json-server and display on screen
        this.loadData();
    },
    methods: {
        async deleteCustomer(id) {
            const res = await axios.delete(baseURL + "/" + id);

            console.log(res);

            // update customer list
            this.loadData();

        },
        async loadData() {
            // get data from json-server
            try {
                const res = await axios.get(baseURL);

                this.customerList = res.data;
            }
            catch(e) {
                console.error(e);
            }
        },
        editCustomerDetails(id){
            // Redirect to edit customer page
            this.$router.push({path:'/edit', query:{id: id}});
        }
    }
}
</script>