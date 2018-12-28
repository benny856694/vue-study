<template>
  <div class="row  justify-content-center">
    <form class="form col-4">
      <div class="form-group">
        <input
          type="email"
          name="email"
          v-validate="'required|email'"
          v-model="email"
          class="form-control"
          placeholder="email"
        />
      </div>

      <div class="form-group">
        <input
          type="password"
          name="password"
          v-validate="'required|min:6'"
          v-model="password"
          class="form-control"
          placeholder="password"
        />
      </div>

      <input
        type="submit"
        class="btn btn-primary"
        @click.prevent="signUpWrapper"
        value="Sign Up"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    ...mapActions("user", ["signUp"]),

    signUpWrapper() {
      this.signUp({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
