<template>
    <q-layout view="lHh lpR fFf">
        <q-header
            bordered
            class="bg-white text-black"
        >
            <q-toolbar class="row justify-between full-height q-pa-none">
                <div class="column items-center justify-center toolbar-border">
                    <q-avatar
                        @click="$router.push({ path: '/' })"
                        style="cursor: pointer"
                    >
                        <img src="favicon.ico" />
                    </q-avatar>
                </div>
                <div
                    v-if="!$q.screen.xs"
                    class="col text-h5"
                >
                    <div class="q-pl-md">Автотранспортное Управление</div>
                </div>
                <div
                    class="q-pr-sm text-center col col-shrink column justify-center items-end"
                    v-if="authStore.isLoggedIn"
                >
                    <span v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER)">
                        {{ (authStore.currentUser as User | null | undefined)?.surname }}
                        {{ (authStore.currentUser as User | null | undefined)?.name }}
                        {{ (authStore.currentUser as User | null | undefined)?.middlename }}
                    </span>
                    <span v-else>
                        {{ (authStore.currentUser as Customer | null | undefined)?.fullname }}
                    </span>
                    <div
                        style="font-size: 0.8rem"
                        class="text-grey"
                    >
                        {{ authStore.currentUser?.role }}
                    </div>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container class="bg-accent row">
            <div
                class="column bg-white q-py-sm justify-between items-center"
                style="width: 50px; border-right: 1px solid rgba(0, 0, 0, 0.12)"
            >
                <div
                    class="column items-center q-gutter-y-md"
                    v-if="authStore.isLoggedIn"
                >
                    <q-btn
                        icon="las la-user-cog"
                        to="/admin"
                        flat
                        dense
                        v-if="!$q.screen.xs && authStore.currentUser?.roleIs(ROLE.ADMIN)"
                    >
                        <q-tooltip> Панель администратора </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-users"
                        to="/user"
                        flat
                        dense
                        v-if="authStore.currentUser?.roleIs(ROLE.ADMIN)"
                    >
                        <q-tooltip> Пользователи </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-list"
                        to="/"
                        flat
                        dense
                    >
                        <q-tooltip>
                            {{
                                    authStore.currentUser?.roleIs(ROLE.CUSTOMER)
                                        ? `Панель ${authStore.currentUser?.roleIs(ROLE.WATCHER)
                                            ? "просмотра"
                                            : "диспетчера"
                                        }`
                                        : "Заказ"
                            }}
                        </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-history"
                        to="/history"
                        flat
                        dense
                        v-if="$q.screen.xs && authStore.currentUser?.roleIs(ROLE.CUSTOMER)"
                    >
                        <q-tooltip> История заказов </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-truck"
                        to="/transport"
                        flat
                        dense
                        v-if="$q.screen.xs && authStore.currentUser?.roleNot(ROLE.CUSTOMER)"
                    >
                        <q-tooltip> Транспорт </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-id-card"
                        to="/driver"
                        flat
                        dense
                        v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER, ROLE.WATCHER)"
                    >
                        <q-tooltip> Водители </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-map"
                        to="/map"
                        flat
                        dense
                        v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER, ROLE.WATCHER)"
                    >
                        <q-tooltip> Карта </q-tooltip>
                    </q-btn>

                    <q-btn
                        icon="las la-book"
                        to="/report"
                        flat
                        dense
                        v-if="authStore.currentUser?.roleNot(ROLE.CUSTOMER, ROLE.WATCHER)"
                    >
                        <q-tooltip> Отчёт </q-tooltip>
                    </q-btn>
                </div>

                <q-btn
                    icon="las la-sign-out-alt"
                    @click="logout"
                    dense
                    flat
                    v-if="authStore.isLoggedIn"
                />
            </div>
            <router-view class="col" />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { QLayout, QHeader, QToolbar, QAvatar, QPageContainer, QBtn, QTooltip } from 'quasar';
import { Customer, User } from 'src/models';
import { ROLE } from 'src/shared';
import { useAuthStore } from 'src/stores';
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

function logout() {
    authStore.logout();
    router.push({ name: 'Authorization' })
}

onMounted(async () => {
    await authStore.requestCurrentUser();
})

</script>
  
  <!-- <script>
  import { mapActions, mapMutations, mapState } from "vuex";
  import { Loading } from "quasar";
  import { formatRole } from "src/helpers/formatters.js";
  export default {
    name: "MainLayout",
    components: {},
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      formatRole,
      ...mapActions("auth", ["logout"]),
      ...mapMutations("auth", ["setState"]),
      ...mapActions("current", ["requestCurrentUser"]),
      ...mapActions("transport", [
        "subscribeTransportSockets",
        "requestTransports",
      ]),
      ...mapActions("order", [
        "subscribeOrderSockets",
        "requestOrders",
        "requestNames",
      ]),
      ...mapActions("contact", ["subscribeContactSockets", "requestContacts"]),
      ...mapActions("customer", ["subscribeCustomerSockets", "requestCustomers"]),
      ...mapActions("place", ["subscribePlaceSockets", "requestPlaces"]),
      ...mapActions("user", [
        "subscribeUserSockets",
        "requestDrivers",
        "requestNonDrivers",
      ]),
      ...mapActions("status", ["requestStatuses"]),
    },
    computed: {
      ...mapState("current", ["currentUser"]),
    },
    created() {
      this.subscribeTransportSockets();
      this.subscribeOrderSockets();
      this.subscribeContactSockets();
      this.subscribeCustomerSockets();
      this.subscribePlaceSockets();
      this.subscribeUserSockets();
    },
    async mounted() {
      Loading.show({ message: "Загрузка актуальной информации" });
      await Promise.all([
        this.requestCurrentUser(),
        this.requestTransports(),
        this.requestPlaces(),
        this.requestOrders(),
        this.requestDrivers(),
        this.requestNonDrivers(),
        this.requestStatuses(),
        this.requestContacts(),
        this.requestCustomers(),
        this.requestNames(),
      ]);
      Loading.hide();
    },
  };
  </script> -->
  
<style lang="scss">
.toolbar-border {
    width: 50px;
    height: 50px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
}
</style>