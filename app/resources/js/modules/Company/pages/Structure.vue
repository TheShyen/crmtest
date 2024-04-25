<template>
  <div>Структура</div>
  <Select @onSelectChange="change" :options="array"></Select>

  <Button @onButtonClick="ewq" :color="'secondary'">Привет</Button>

  <Input
    @onInputChange="g"
    :width="'500px'"
    :border="'2px solid #00BCD4'"
  ></Input>

  <Tooltip :show="'true'" :color="'black'" :bg="'red'">Привет!</Tooltip>
</template>

<script setup>
import Select from "@/components/Select/select.vue";
import Button from "@/components/Buttons/CommonButton.vue";
import Input from "@/components/Input/input.vue";
import Tooltip from "@/components/Tooltip/tooltip.vue";

var ewq = (event) => {
  console.log(event);
};

var g = (event) => {
  console.log(event);
};

var change = (event) => {
  console.log(event);
};

const array = ["qwe", " asd", "zxc"];
</script>
