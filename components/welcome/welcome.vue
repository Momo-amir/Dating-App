<template>
  <div
    class="bg-neutral-50 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
    <div
      class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="mt-12 lg:mt-0">
          <h1
            class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Welcome to <br /><span class="text-primary">HOOKD </span>
          </h1>
          <div class="flex flex-row items-center">
            <SignIn
              modal-class="btnLarge"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#!"
              role="button"></SignIn>
            <a
              class="inline-flex rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#!"
              role="button"
              >Learn more</a
            >
          </div>
        </div>
        <div class="mb-12 lg:mb-0">
          <img
            src="../../assets/images/Hookd.png"
            class="w-full rounded-lg shadow-lg dark:shadow-black/20"
            alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
