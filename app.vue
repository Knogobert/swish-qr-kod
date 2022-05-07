<template>
  <main class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base">
    <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-7xl w-full z-20">
      <div class="col-span-3 rounded p-8 flex flex-col gradient-border">
        <header class="mb-4">
          <h1 class="font-medium text-4xl text-center">Skapa Swish QR-kod gratis</h1>
          <p class="text-center my-2">När du skapat din kod ber du bara någon att skanna den för att snabbt påbörja en betalning till dig</p>
        </header>
        <section class="">
          <FormSwish />
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.gradient-border {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: .5rem;
  position: relative;
  width: 100%;
}

@media (prefers-color-scheme:light) {
  .gradient-border {
    background-color: #ffffff4d;

    &::before {
      background: linear-gradient(90deg, #e2e2e2, #e2e2e2 25%, #00dc82 50%, #36e4da 75%, #0047e1)
    }
  }
}

@media (prefers-color-scheme:dark) {
  .gradient-border {
    background-color: #1414144d;

    &:before {
      background: linear-gradient(90deg, #303030, #303030 25%, #00dc82 50%, #36e4da 75%, #0047e1)
    }
  }
}

.gradient-border {
  &::before {
    pointer-events: none;
    background-position: 0 0;
    background-size: 400% auto;
    border-radius: .5rem;
    bottom: 0;
    content: "";
    left: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: .5;
    padding: 2px;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-position .3s ease-in-out, opacity .2s ease-in-out;
    width: 100%;
  }

  &:hover::before {
    background-position: -50% 0;
    opacity: 1;
  }
}
</style>