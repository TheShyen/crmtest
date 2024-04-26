<template>
  <h6 class="q-my-sm">Структура компании</h6>

  <q-layout container> </q-layout>
  <label
    class="bg-primary q-field row no-wrap items-start q-field--standard q-input"
    style="border-radius: 15px"
  >
    <div class="q-field__inner relative-position col self-stretch">
      <div class="q-field__control relative-position row no-wrap">
        <div
          class="q-field__control-container col relative-position row no-wrap q-anchor--skip items-center"
        >
          <q-chip
            removable
            @remove="deleteChip(item.id)"
            color="teal"
            text-color="white"
            v-for="item in filter.filters"
            :id="item.id"
            :key="item.id"
            >{{ item.value }}</q-chip
          >
          <input
            v-model="search"
            class="q-field__native q-placeholder text-white"
            type="text"
            placeholder="искать что-то"
          />
        </div>
      </div>
    </div>
  </label>

  <Select
    :label="'фильтры'"
    @onSelectChange="addChip"
    :options="['sunt', 'qui', 'ea', 'eum']"
  ></Select>

  <div v-for="post in searchedPosts" :key="post.id">
    <h5>{{ post.title }}</h5>
    <p>{{ post.body }}</p>
  </div>

  <divisionCard
    class="bg-grey-2"
    :color="'grey'"
    :name="'Стоп займ'"
    :manager="'Валентин Петрович'"
    :staff="[{ name: 'один' }, { name: 'два' }, { name: 'три' }]"
  ></divisionCard>

  <divisionCard
    class="bg-yellow-2"
    :color="'orange'"
    :name="'Стоп займ'"
    :manager="'Валентин Петрович'"
    :staff="[{ name: 'один' }, { name: 'два' }, { name: 'три' }]"
  ></divisionCard>
</template>
+
<script setup>
import { reactive, computed, ref, watch } from "vue";

import Select from "@/components/Select/commonSelect.vue";
import divisionCard from "../components/divisionCard.vue";

var search = ref("");

const text = reactive({
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
  ],
});

const searchedPosts = computed(() =>
  text.posts.filter((el) =>
    el.title
      .toLowerCase()
      .includes(
        [...filter.filters.map((el) => el.value)].join(" ").toLowerCase()
      )
  )
);

const deleteChip = (id) => {
  filter.filters = filter.filters.filter((el) => el.id !== id);
};

const addChip = (event) => {
  filter.filters.push({ value: event, id: Date.now() });
};

const filter = reactive({
  filters: [
    { value: "привет", id: 1 },
    { value: "пока", id: 2 },
  ],
});

watch(filter, (newValue) => {
  //console.log([...filter.filters.map((el) => el.value)].join(" "));
});

</script>
