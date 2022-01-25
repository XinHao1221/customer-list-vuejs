<template>
  <div class="home">
    <CustomerList />
  </div>
</template>

<script>
import CustomerList from '../components/CustomerList.vue'

export default {
  name: 'Customer List',
  components: {
    CustomerList
  }
}
</script>
