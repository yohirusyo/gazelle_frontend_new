<template>
    <q-page
        class="row items-stretch justify-center"
        v-if="!$q.screen.xs"
    >
        <div
            class="col-6 column"
            style="border-right: 1px solid rgba(0, 0, 0, 0.12)"
        >
            <Order
                :col="12"
                v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER)"
            />
            <OrderRequestCreation v-else />
        </div>
        <div
            class="col-6 column"
            v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER)"
        >
            <Transport :col="6" />
        </div>
        <div
            class="col-6 column"
            v-else
        >
            <OrderHistory :col="12" />
        </div>
    </q-page>

    <q-page
        class="column"
        v-else
    >
        <Order
            :col="12"
            v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER)"
        />
        <OrderRequestCreation v-else />
    </q-page>
</template>
  
<!-- <script>
import BaseCard from "src/components/base/Card.vue";
import Order from "src/components/order/OrderComponent.vue";
import Transport from "src/components/transport/TransportComponent.vue";
import Driver from "src/components/driver/DriverComponent.vue";
import Place from "src/components/place/PlaceComponent.vue";
import YaMap from "src/components/map/YaMap.vue";
import OrderRequestCreation from "src/components/customer/form/OrderRequestCreation.vue";
import OrderHistory from "src/components/customer/history/OrderHistory.vue";
import { mapState } from "vuex";
export default {
    name: "PageIndex",
    components: {
        BaseCard,
        Order,
        Transport,
        Driver,
        Place,
        YaMap,
        OrderRequestCreation,
        OrderHistory,
    },
    computed: {
        ...mapState("current", ["currentUser"]),
    },
};
</script> -->
  
  
<script setup lang="ts">
import { ROLE } from 'src/shared';
import { useAuthStore } from 'src/stores';
import Order from 'src/components/order/OrderComponent.vue';

const authStore = useAuthStore();

</script>
