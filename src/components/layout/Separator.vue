<template>
  <transition>
    <div class="separator">
      <div class="separator__logo">
        <em>v-stocks</em>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.separator {
  width: 100vw;
  height: 40vh;

  position: absolute;

  background: var(--v-brownDarker-base);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  animation: slide-in 1.3s ease-out;
}

.separator__logo {
  width: 10rem;

  margin: 1rem 2rem;
  padding: 4px 18px;

  border-radius: 3px;
  font-size: 64px;

  color: white;
  background: var(--v-greenLighter-base);
}

@keyframes slide-in {
  from {
    transform: translateY(-500px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
