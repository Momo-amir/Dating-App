<template>
  <article>
    <label
      class="btn btn-primary hover:btn-secondary"
      :class="props.modalClass"
      for="modal-1"
      >Sign In</label
    >

    <input class="modal-state" id="modal-1" type="checkbox" />
    <div class="modal">
      <label class="modal-overlay" for="modal-1"></label>
      <div class="modal-content flex w-full flex-col gap-5 p-7">
        <label
          for="modal-1"
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</label
        >
        <div class="flex flex-col gap-2">
          <h2 class="text-center text-2xl font-semibold">Sign In</h2>
          <p class="mx-auto max-w-xs text-sm text-content2">
            Sign in to your account to continue.
          </p>
        </div>

        <section>
          <div v-if="showSignIn" class="form-group">
            <div class="form-field">
              <label class="form-label">Email address</label>
              <input
                v-model="signInData.email"
                placeholder="Type here"
                type="email"
                class="input max-w-full" />
              <label class="form-label">
                <span class="form-label-alt">Please enter a valid email.</span>
              </label>
            </div>

            <div class="form-field">
              <label class="form-label">
                <span>Password</span>
              </label>
              <div class="form-control">
                <input
                  v-model="signInData.password"
                  placeholder="Type here"
                  type="password"
                  class="input max-w-full" />
              </div>
            </div>

            <div class="form-field">
              <div class="form-control justify-between">
                <div>
                  <input type="checkbox" class="checkbox" />
                  <a href="#">Remember me</a>
                </div>
                <label class="form-label">
                  <a class="link link-underline-hover link-primary text-sm"
                    >Forgot your password?</a
                  >
                </label>
              </div>
            </div>

            <div class="form-field pt-5">
              <div class="form-control justify-between">
                <button
                  type="button"
                  class="btn btn-primary w-full"
                  @click="handleSignInSubmit">
                  Sign in
                </button>
              </div>
            </div>
          </div>

          <!-- Sign Up form -->
          <div v-else class="">
            <div class="form-group">
              <div class="form-field">
                <label class="form-label">First name</label>
                <input
                  v-model="signUpData.name"
                  type="email"
                  placeholder="Type here"
                  class="input max-w-full" />
                <label class="form-label"> </label>
              </div>
              <div class="form-field">
                <label class="form-label">Last name</label>
                <input
                  v-model="signUpData.lasName"
                  type="email"
                  placeholder="Type here"
                  class="input max-w-full" />
                <label class="form-label"> </label>
              </div>
              <div class="form-field">
                <label class="form-label">Email address</label>
                <input
                  v-model="signUpData.email"
                  type="email"
                  placeholder="Type here"
                  class="input max-w-full" />
                <label class="form-label">
                  <span class="form-label-alt"
                    >Please enter a valid email.</span
                  >
                </label>
              </div>

              <div class="form-field">
                <label class="form-label">
                  <span>Password</span>
                </label>
                <div class="form-control">
                  <input
                    v-model="signUpData.password"
                    type="password"
                    placeholder="Type here"
                    class="input max-w-full" />
                </div>
              </div>

              <div class="form-field">
                <label class="form-label">
                  <span>Confirm Password</span>
                </label>
                <div class="form-control">
                  <input
                    v-model="signUpData.confirmPassword"
                    type="password"
                    placeholder="Type here"
                    class="input max-w-full" />
                </div>
              </div>

              <div class="form-field pt-5">
                <div class="form-control justify-between">
                  <button
                    @click="handleSignUpSubmit"
                    type="button"
                    class="btn btn-primary w-full">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="divider text-sm" v-if="showSignIn">
            Don't have an account?
          </div>
          <div class="divider text-sm" v-else>Already have an account?</div>

          <div
            class="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2">
            <span>Click here to</span>
            <button
              v-if="showSignIn"
              @click="handleSignUpClick"
              class="link link-primary text-xs">
              Sign up
            </button>
            <button
              v-else
              @click="handleSignInClick"
              class="link link-primary text-xs">
              Sign in
            </button>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{
  modalClass: string;
}>();

const showSignIn = ref(true);

const signInData = ref({
  email: "",
  password: "",
});

const signUpData = ref({
  name: "",
  lasName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleSignUpClick = () => {
  showSignIn.value = false;
};
const handleSignInClick = () => {
  showSignIn.value = true;
};

const handleSignInSubmit = () => {
  console.log(signInData.value);
  // Here you can add code to send the sign in data to your backend
};

const handleSignUpSubmit = () => {
  console.log(signUpData.value);
  // Here you can add code to send the sign up data to your backend
};
</script>
