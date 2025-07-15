<template>
  <div class="gradient-text">
    <h1 class="text-layer top-3">{{ text }}</h1>
    <h1 class="text-layer top-2">{{ text }}</h1>
    <h1 class="text-layer top-1">{{ text }}</h1>
    <h1 class="main-text">{{ text }}</h1>
    <h1 class="text-layer bottom-3">{{ text }}</h1>
    <h1 class="text-layer bottom-2">{{ text }}</h1>
    <h1 class="text-layer bottom-1">{{ text }}</h1>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'TextAnimation',
  setup() {
    const text = ref('W-JPK');

    onMounted(() => {
      const layers = {
        topText1: document.querySelector('.top-1'),
        topText2: document.querySelector('.top-2'),
        topText3: document.querySelector('.top-3'),
        bottomText1: document.querySelector('.bottom-1'),
        bottomText2: document.querySelector('.bottom-2'),
        bottomText3: document.querySelector('.bottom-3'),
        mainText: document.querySelector('.main-text'),
      };

      gsap.to(layers.mainText, {
        duration: 1,
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        repeatDelay: 2,
      });

      gsap.to(layers.topText1, { duration: 2, opacity: 1, y: -20, repeat: -1, yoyo: true, repeatDelay: 1 });
      gsap.to(layers.topText2, { duration: 2, opacity: 1, y: -40, repeat: -1, yoyo: true, repeatDelay: 1 });
      gsap.to(layers.topText3, { duration: 2, opacity: 1, y: -60, repeat: -1, yoyo: true, repeatDelay: 1 });
      gsap.to(layers.bottomText1, { duration: 2, opacity: 1, y: 20, repeat: -1, yoyo: true, repeatDelay: 1 });
      gsap.to(layers.bottomText2, { duration: 2, opacity: 1, y: 40, repeat: -1, yoyo: true, repeatDelay: 1 });
      gsap.to(layers.bottomText3, { duration: 2, opacity: 1, y: 60, repeat: -1, yoyo: true, repeatDelay: 1 });
    });

    return { text };
  },
};
</script>

<style>
:root {
  --background-color: #fff;
  --text-color: #000;
}

/* body {
  margin: 0;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: x-large;
} */

.gradient-text {
  position: relative;
  width: 100%;
  height: 20vh;
  background-color: var(--background-color);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: x-large;
}

.text-layer {
  position: absolute;
  color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  text-shadow: 0px 1px 4px var(--background-color);
  opacity: 0;
  -webkit-text-stroke: 2px var(--text-color);
}

.main-text {
  position: absolute;
  z-index: 10;
  padding: 40px;
  color: var(--text-color);
  text-shadow: 2px 2px 4px var(--background-color);
  -webkit-text-stroke: 2px transparent;
}
</style>