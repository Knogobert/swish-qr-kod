<template>
  <form class="grid md:grid-cols-2 gap-4 md:gap-8 w-full text-slate-100">
    <div class="column inputs">
      <div class="input-group">
        <div class="title-section">
          <label for="input-title">Rubrik</label>
          <span class="counter">{{ form.title.length }}/20</span>
        </div>
        <input id="input-title" v-model="form.title" type="text" maxlength="20" placeholder="T.ex. vad du tänkte sälja">
      </div>
      <div class="input-group">
        <div class="title-section">
          <label for="input-payee">Mottagare</label>
        </div>
        <input id="input-payee" v-model="form.payee" type="tel" placeholder="Ditt Swish- eller telefonnummer">
      </div>
      <div class="input-group">
        <div class="title-section">
          <label for="input-amount">Belopp <span class="optional">(Valfritt)</span></label>
        </div>
        <div class="input-container">
          <input id="input-amount" v-model="form.amount" type="text" placeholder="Belopp som är kopplat till QR-koden">
          <span class="unit">kr</span>
        </div>
        <div class="toggle-wrapper text-slate-100">
          <BtnToggler v-model="form.lockedAmount" />
          <div v-if="form.lockedAmount" class="explanation"><b>Låst</b><span>Beloppet kan inte ändras av den som skannar din QR-kod.</span></div>
          <div v-else class="explanation"><b>Öppet</b><span>Beloppet kan ändras av den som skannar din QR-kod.</span></div>
        </div>
      </div>
      <div class="input-group">
        <div class="title-section">
          <label for="input-message"> Meddelande <span class="optional">(Valfritt)</span></label>
          <span class="counter">{{ form.message.length }}/50</span>
        </div>
        <textarea
          id="input-message"
          v-model="form.message"
          cols="30"
          rows="2"
          maxlength="50"
          placeholder="Meddelande som är kopplat till QR-koden"
          class="min-h-[42px] max-h-[64px]"
        />
        <div class="toggle-wrapper text-slate-100">
          <BtnToggler v-model="form.lockedMessage" />
          <div v-if="form.lockedMessage" class="explanation"><b>Låst</b><span>Meddelandet kan inte ändras av den som skannar din QR-kod.</span></div>
          <div v-else class="explanation"><b>Öppet</b><span>Meddelandet kan ändras av den som skannar din QR-kod.</span></div>
        </div>
      </div>
      <div class="buttons flex justify-start items-center gap-4">
        <button
          type="button"
          class="button flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          @click="createQRCode"
        >Generera QR-kod</button>
        <button
          type="button"
          class="button flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          @click="downloadImage(imgWrapper?.children?.[0]?.src, form.payee)"
        >Ladda ner som PNG</button>
      </div>
    </div>
    <div class="column qr-code">
      <div class="qr-code-wrapper">
        <div class="qr-code">
          <div class="img-wrapper" ref="imgWrapper" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const form = reactive({
  title: '',
  payee: '',
  amount: '',
  message: '',
  lockedAmount: false,
  lockedMessage: false,
});
const imgWrapper = ref(null);

const { getQRCode, createImageFromBlob, downloadImage } = useQR();

const createQRCode = async () => {
  const blob = await getQRCode( "https://api.swish.nu/qr/v2/prefilled", {
    size: 500,
    border: 1,
    transparent: true,
    title: { value: form.title || 'testtitle' },
    payee: form.payee || '0703466533',
    amount: { value: parseFloat(form.amount) || 100, editable: !form.lockedAmount },
    message: { value: form.message || 'testmess', editable: !form.lockedMessage },
    format: 'png'
  });
  const swishImageEl = await createImageFromBlob(blob);
  imgWrapper.value.innerHTML = '';
  imgWrapper.value.append(swishImageEl);
};

onMounted(createQRCode);
</script>

<style lang="scss" scoped>
.img-wrapper {
  &:empty {
    @apply outline-slate-800 outline-1 outline-dashed rounded-3xl max-h-[592px] min-h-[592px] h-full flex justify-center items-center;
    &::after {
      content: 'Loading…';
      @apply text-slate-600;
    }
  }
}
.input-group {
  @apply text-slate-800;

  label {
    @apply font-medium text-2xl text-slate-100 w-full mb-2 inline-flex items-center gap-2;

    .optional {
      @apply text-lg text-slate-500;
    }
  }

  input, textarea {
    @apply w-full;
  }

  + .input-group {
    @apply mt-6;
  }
}
.title-section  {
  @apply font-medium text-slate-100 w-full flex justify-between items-center;
}

.input-container {
  @apply relative;

  .unit {
    @apply absolute top-1/2 right-6 font-light -translate-y-1/2;
  }
}

.toggle-wrapper {
  @apply flex items-start justify-center gap-4 my-4;

  .explanation {
    @apply flex-grow;
    b {
      @apply block;
    }
    span {
      @apply text-slate-500 text-sm;
    }
  }
}

[multiple], [type="date"], [type="datetime-local"], [type="email"], [type="month"], [type="number"], [type="password"], [type="search"], [type="tel"], [type="text"], [type="time"], [type="url"], [type="week"], select, textarea {
  @apply rounded-xl;
}
</style>