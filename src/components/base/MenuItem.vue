<template>
  <div class="col row full-height">
    <div
      class="col col-shrink"
      :class="$q.screen.xs ? 'q-mr-sm' : 'q-mr-md'"
      v-if="!$q.screen.xs"
    >
      <q-tabs
        v-model="tab"
        dense
        class="text-grey full-height"
        :class="$q.screen.xs ? 'q-pt-sm q-pl-sm' : ''"
        active-color="primary"
        indicator-color="transparent"
        narrow-indicator
        vertical
        ref="tabs"
      >
        <q-tab
          name="main"
          icon="list"
          no-caps
          :ripple="false"
          style="border-radius: 8px"
        >
          <q-tooltip>
            {{ label }}
          </q-tooltip>
        </q-tab>
        <q-tab
          name="create"
          icon="edit"
          no-caps
          :ripple="false"
          style="border-radius: 8px"
          v-if="authStore.currentUser?.roleNot(ROLE.WATCHER)"
        >
          <q-tooltip>
            {{ modelValue ? "Редактирование" : "Создание" }}
          </q-tooltip>
        </q-tab>
        <slot
          name="menu"
          v-if="authStore.currentUser?.roleNot(ROLE.WATCHER)"
        />
      </q-tabs>
    </div>

    <q-tab-panels
      v-model="tab"
      animated
      class="col column"
      :class="$q.screen.xs ? '' : 'menu-scroll-area '"
      keep-alive
      :style="`height: ${height}px; ${!$q.screen.xs
      ? 'border: 1px solid rgba(0, 0, 0, 0.12);'
      : '  background: rgba(173, 216, 230, 0.1)'
      }`"
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel
        name="main"
        class="col column menu-scroll-area_inner"
      >
        <slot
          name="main"
          :height="height"
        />
      </q-tab-panel>

      <q-tab-panel
        name="create"
        class="col column"
      >
        <slot
          name="create"
          :height="height"
          :onDone="onDone"
        />
      </q-tab-panel>
    </q-tab-panels>
    <div
      v-if="$q.screen.xs"
      class="col col-shrink"
      :class="$q.screen.xs ? 'q-mr-sm' : 'q-mr-md'"
      style="border-left: 1px solid rgba(0, 0, 0, 0.12)"
    >
      <q-tabs
        v-model="tab"
        dense
        class="text-grey full-height"
        :class="$q.screen.xs ? 'q-pt-sm q-pl-sm' : ''"
        active-color="primary"
        indicator-color="transparent"
        narrow-indicator
        vertical
        ref="tabs"
      >
        <q-tab
          name="main"
          icon="list"
          no-caps
          :ripple="false"
          style="border-radius: 8px"
        >
          <q-tooltip>
            {{ label }}
          </q-tooltip>
        </q-tab>
        <q-tab
          name="create"
          icon="edit"
          no-caps
          :ripple="false"
          style="border-radius: 8px"
          v-if="authStore.currentUser?.roleNot(ROLE.WATCHER)"
        >
          <q-tooltip>
            {{ modelValue ? "Редактирование" : "Создание" }}
          </q-tooltip>
        </q-tab>
        <slot
          name="menu"
          v-if="authStore.currentUser?.roleNot(ROLE.WATCHER)"
        />
      </q-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QTabs } from 'quasar';
import { ROLE } from 'src/shared';
import { useAuthStore } from 'src/stores';
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
  label: string,
  modelValue: any,
}>()

const authStore = useAuthStore();

const tab = ref('main');
const height = ref(0);
const tabs = ref<QTabs | null>(null);

function onDone() {
  tab.value = 'main';
}

onMounted(() => {
  height.value = tabs.value?.$el.clientHeight - 2;
})

watch(() => props.modelValue, (before, after) => {
  if (!!after) {
    tab.value = "create";
  }
})

</script>

<style lang="scss">
.menu-scroll-area {
  // border-radius: 8px;
  box-sizing: border-box;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.menu-scroll-area_inner {
  box-sizing: border-box;
}
</style>
