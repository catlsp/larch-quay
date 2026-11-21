<script>
  import { onMount } from 'svelte';
  import { uiStore } from '../lib/store.js';

  export let items = [];
  export let start = 0;

  let el;
  let prevBtn;
  let nextBtn;
  let swiper;
  let current = start;

  $: active = items[current] || {};

  function close() {
    document.body.style.overflow = '';
    uiStore.update((s) => ({ ...s, lightboxIndex: -1 }));
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }

  onMount(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    uiStore.subscribe((s) => {
      if (swiper && s.lightboxIndex > -1) swiper.slideToLoop(s.lightboxIndex, 0);
    });

    try {
      swiper = new Swiper(el, {
        loop: true,
        initialSlide: start,
        speed: 700,
        spaceBetween: 32,
        grabCursor: true,
        keyboard: { enabled: true },
        navigation: { prevEl: prevBtn, nextEl: nextBtn },
        on: {
          slideChange() {
            current = this.realIndex;
          },
        },
      });
    } catch (e) {}
  });
</script>

<div class="lightbox" role="dialog" aria-modal="true" aria-label="The quay in pictures">
  <div class="lightbox-ambient" style="background-image: url({active.src})"></div>

  <button class="lightbox-close" type="button" on:click={close} style="top: 24px; right: 32px">
    Close <i class="fa-solid fa-xmark"></i>
  </button>

  <div class="swiper lightbox-swiper" bind:this={el}>
    <div class="swiper-wrapper">
      {#each items as item}
        <div class="swiper-slide lightbox-slide">
          <img src={item.src} alt={item.alt} />
        </div>
      {/each}
    </div>
  </div>

  <div class="lightbox-bar" style="padding: 0 32px 28px">
    <p class="lightbox-caption">{active.alt || ''}</p>
    <div class="lightbox-nav">
      <button type="button" bind:this={prevBtn}><i class="fa-solid fa-arrow-left"></i> Previous</button>
      <button type="button" bind:this={nextBtn} style="margin-left: 28px">Next <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</div>

<style>
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    background: var(--ink);
    color: var(--paper);
    animation: lightbox-in 0.5s var(--ease-out) both;
    will-change: opacity;
  }

  .lightbox-ambient {
    position: absolute;
    inset: -120px;
    background-size: cover;
    background-position: center;
    filter: blur(90px);
    opacity: 0.16;
    transition: background-image 0.6s ease;
    will-change: filter, opacity;
    pointer-events: none;
  }

  .lightbox-close {
    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 44px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--paper) !important;
    font-size: 15px;
    cursor: pointer;
    transition: left 0.3s var(--ease-out), opacity 0.18s ease;
    will-change: opacity;
  }

  .lightbox-swiper {
    position: relative;
    flex: 1;
    width: 100%;
    min-height: 0;
    margin-top: 84px;
  }

  .lightbox-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8vw;
    will-change: transform;
  }

  .lightbox-slide img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    box-shadow: 0 60px 140px rgba(0, 0, 0, 0.35);
    will-change: transform;
  }

  .lightbox-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 108px;
    font-size: 15px;
  }

  .lightbox-caption {
    color: var(--paper);
    max-width: 40ch;
  }

  .lightbox-nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .lightbox-nav button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 44px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--paper) !important;
    font-size: 15px;
    cursor: pointer;
    will-change: transform;
  }

  .lightbox-close:hover,
  .lightbox-nav button:hover {
    opacity: 0.72;
  }

  .lightbox-nav button:active {
    transform: scale(0.97);
  }

  @keyframes lightbox-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
