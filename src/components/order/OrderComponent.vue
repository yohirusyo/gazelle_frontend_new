<template>
  <MenuItem
    label="Заказы"
    v-model="orderStore.currentOrder"
  >
  <template #main="{}">
    <OrderList v-if="!$q.screen.xs" />
    <OrderListMobile v-else />
  </template>
  <template #create="{ onDone }">
    <OrderCreation @done="onDone" />
  </template>
  </MenuItem>
</template>

<script setup lang="ts">
import { useOrderStore } from 'src/stores';
import MenuItem from '../base/MenuItem.vue';

const orderStore = useOrderStore();

</script>