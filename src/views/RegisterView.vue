<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: v$.email.$error }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          {{ printErrorEmail(error.$validator, error.$params) }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model.trim="password"
          :class="{ invalid: v$.password.$error }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          {{ printErrorPassword(error.$validator, error.$params) }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          v-model.trim="name"
          :class="{ invalid: v$.name.$error }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          {{ printErrorName(error.$validator, error.$params) }}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "registerView",
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
  }),
  validations: () => ({
    email: { email, required, minLength: minLength(3) },
    password: { required, minLength: minLength(3) },
    name: { required, minLength: minLength(3) },
    agree: { checked: (v) => v },
  }),
  methods: {
    submitHandler() {
      console.log(this.v$.name);
      this.v$.$touch();
      if (this.v$.$error) return;

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      console.log(formData);

      this.$router.push("/");
    },

    printErrorEmail($name) {
      if ($name === "required") {
        return "Поле не должно быть пустым";
      } else if ($name === "minLength") {
        return "Введите коректный Email";
      }
    },
    printErrorPassword($name, $params) {
      if ($name === "required") {
        return "Введите пароль";
      } else if ($name === "minLength") {
        return (
          "Минимальная длина пароля должна быть" +
          " " +
          $params.min +
          " символов "
        );
      }
    },
    printErrorName($name, $params) {
      if ($name === "required") {
        return "Введите имя";
      } else if ($name === "minLength") {
        return (
          "Минимальная длина имени должна быть" +
          " " +
          $params.min +
          " символов "
        );
      }
    },
  },
};
</script>

<style></style>
