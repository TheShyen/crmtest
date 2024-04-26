<template>
  <div class="column items-start" style="gap: 10px">
    <CommonButton :color="'red'">Кнопка</CommonButton>

    <CommonButton :color="'grey'" :mini="true"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </CommonButton>

    <q-badge rounded color="red" label="1" />

    <Select :options="['привет', 'пока']"></Select>

    <SelectButtons square :color="'secondary'" :label="'выпадающие кнопки'"
      ><CommonButton unelevated square color="'white'" text-color="black"
        >Кнопка</CommonButton
      ><CommonButton unelevated square color="'white'" text-color="black"
        >Кнопка</CommonButton
      ><CommonButton unelevated square color="'white'" text-color="black"
        >Кнопка</CommonButton
      ></SelectButtons
    >

    <q-avatar color="red" text-color="white"
      ><img
        style="position: relative"
        src="https://cdn.quasar.dev/img/avatar.png">
        <div class='status' :style='{background: status}'></div>
  </img>
  </q-avatar>

    <q-avatar class="bg-grey"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-person-fill"
        viewBox="0 0 16 16"
        color="white"
      >
        <path
          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </svg>
    </q-avatar>

    <div>
      <label> 
        имя
        <Input  :placeholder="'введите имя'" />
      </label>
    </div>   


    <div class="q-gutter-sm">
      <q-radio v-model="shape" val="line" label="Line" />
      <q-radio v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio v-model="shape" val="polygon" label="Polygon" />
    </div>

    <q-checkbox v-model="val" />

    <q-btn color="indigo">
      Тут подсказка
      <q-tooltip
        :delay="500"
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
      >
        <strong style="font-size: 16px">Подсказка !</strong>
      </q-tooltip>
    </q-btn>

    <q-btn color="purple" label="Выпадающее меню">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle label="Use Mobile Data" />
            <q-toggle label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>

    <q-btn @click="notify" :color="'red'">Алерт</q-btn>

    <q-date v-model="date" range ><q-input filled v-model="time" mask="time" :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="time">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      </q-date>

    <q-spinner color="primary" size="3em" />

    <q-btn label="Модалка" color="primary" @click="alert = true" />

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-chip removable color="teal" text-color="white">Фильтр</q-chip>

    <div class="q-pa-md" style="max-width: 300px">
    <q-input filled v-model="date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { ref } from "vue";
import CommonButton from "@/components/Buttons/CommonButton.vue";
import SelectButtons from "@/components/Select/selectButtons.vue";
import Select from "@/components/Select/commonSelect.vue";
import Input from "@/components/Input/input.vue";

var shape = ref("");
var val = ref("");
var date = ref("2024/02/01");
var alert = ref(false);
var time = ref('')

const notify = () => {
  toast("Вам сообщение !", {
    autoClose: 3000,
  }); // ToastOptions
};

var status = ref("#4dff07")
</script>

<style scoped>
.status {
  position: absolute; width: 13px; height: 13px; border-radius: 6px ; top: 35px; right: 1px
  }
</style>
