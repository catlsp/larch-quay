<script>
  import { onMount } from 'svelte';
  import { getJSONSync } from '../lib/api.js';
  import { uiStore } from '../lib/store.js';

  export let texts = {};
  export let config = {};

  let name = '';
  let phone = '';
  let sent = false;
  let message = '';

  $: fields = texts.fields || {};

  function close() {
    document.body.style.overflow = '';
    uiStore.update((s) => ({ ...s, callbackOpen: false }));
  }

  function submit() {
    const res = getJSONSync('/api/lead.json');
    window.appState.user = { name, phone };
    sent = res.ok;
    message = res.message || texts.success;
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }

  onMount(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
  });
</script>

<div class="popup" on:click|self={close}>
  <div class="popup-box" role="dialog" aria-modal="true" aria-label={texts.title}>
    <button class="popup-close" type="button" on:click={close} style="top: 22px; right: 28px">
      Close <i class="fa-solid fa-xmark"></i>
    </button>

    <h2 class="popup-title">{texts.title || ''}</h2>
    <p class="popup-phone" style="margin-top: 14px">
      <a class="link-line" href={'tel:' + (config.phone || '').replace(/\s/g, '')}>{config.phone || ''}</a>
    </p>

    <form class="popup-form" on:submit|preventDefault={submit} style="margin-top: 32px">
      <input class="popup-field" type="text" name="name" placeholder={fields.name} bind:value={name} />
      <input class="popup-field" type="tel" name="phone" placeholder={fields.phone} bind:value={phone} />
      <button class="btn btn-accent popup-btn" type="submit">{texts.button || ''}</button>
    </form>

    {#if sent}
      <p class="popup-done">{message}</p>
    {/if}
  </div>
</div>

<style>
  .popup {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    background: rgba(51, 50, 49, 0.72);
    animation: popup-in 0.35s var(--ease-out);
    will-change: opacity;
  }

  .popup-box {
    position: relative;
    width: 420px;
    padding: 64px 40px 40px;
    background: var(--paper);
    animation: popup-up 0.5s var(--ease-out);
    will-change: transform, opacity;
  }

  .popup-close {
    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    border: 0;
    background: transparent;
    font-size: 15px;
    cursor: pointer;
    transition: left 0.3s ease, opacity 0.2s ease;
  }

  .popup-close:hover {
    opacity: 0.7;
  }

  .popup-title {
    font-size: clamp(2rem, 1.3rem + 2vw, 3rem) !important;
  }

  .popup-phone {
    margin-top: 14px !important;
    font-size: var(--step-body);
    font-variant-numeric: tabular-nums;
  }

  .popup-form {
    display: grid;
    gap: 8px;
  }

  .popup-field {
    display: block;
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border: 0;
    border-radius: 0;
    background: var(--surface);
    color: var(--ink);
    font-family: var(--font);
    font-size: var(--step-body);
    transition: background-color 160ms ease;
  }

  .popup-field::placeholder {
    color: #a9a49e;
    opacity: 1;
  }

  .popup-field:hover {
    background-color: #dcd8d3;
  }

  .popup-field:focus {
    outline: 2px solid var(--ink);
    outline-offset: -2px;
  }

  .popup-btn {
    width: 100%;
    margin-top: 16px;
  }

  .popup-done {
    margin-top: 16px !important;
    font-size: var(--step-small);
    line-height: 1.45;
  }

  @keyframes popup-in {
    from {
      opacity: 0;
    }
  }

  @keyframes popup-up {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
  }
</style>
