<template>
  <div class="navbar rounded-lg navbar-no-boxShadow">
    <div class="navbar-start">
      <NuxtLink to="/" class="navbar-item text-secondary font-bold"
        >HOOKD</NuxtLink
      >
    </div>
    <div class="navbar-end">
      <div>
        <ul class="flex">
          <li>
            <a class="navbar-item text-sm">Home</a>
          </li>
          <li>
            <NuxtLink to="/udforsk" class="navbar-item text-sm"
              >Udforsk</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" class="navbar-item text-sm">Matches</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="avatar avatar-ring avatar-md">
        <div class="dropdown-container">
          <div class="dropdown">
            <label class="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar" />
            </label>
            <div class="dropdown-menu dropdown-menu-bottom-left">
              <a class="dropdown-item text-sm">Profile</a>
              <a tabindex="-1" class="dropdown-item text-sm"
                >Account settings</a
              >
              <a tabindex="-1" class="dropdown-item text-sm">Subscriptions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
