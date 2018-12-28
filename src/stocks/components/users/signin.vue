<template>
  <div class="row  justify-content-center">
    <form class="form col-4">
      <div class="form-group">
        <input
          type="email"
          name="email"
          v-model="email"
          v-validate="'required|email'"
          class="form-control"
          placeholder="email"
        />
        <span>{{ errors.first("email") }}</span>
      </div>

      <div class="form-group">
        <input
          type="password"
          v-validate="'required|min:6'"
          name="password"
          v-model="password"
          class="form-control"
          placeholder="password"
        />
        <span>{{ errors.first("password") }}</span>
      </div>

      <input
        type="submit"
        class="btn btn-primary"
        @click.prevent="signInWrapper"
        value="Sign In"
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
    ...mapActions("user", ["signIn"]),

    signInWrapper() {
      this.signIn({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
