<script>
  export let flat;
  export let favorites = [];
  export let onFavorite = () => {};
  export let label = 'Save this home';

  $: saved = favorites.indexOf(flat.id) > -1;
</script>

<button
  type="button"
  class="fav"
  class:fav-on={saved}
  aria-label={label}
  aria-pressed={saved}
  on:click|stopPropagation={() => onFavorite(flat.id)}
>
  <i class={saved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
</button>

<style>
  .fav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--muted);
    font-size: 17px;
    cursor: pointer;
    transition: color 160ms ease, transform 160ms var(--ease-out);
    will-change: transform;
  }

  .fav:hover {
    color: var(--ink);
  }

  .fav:active {
    transform: scale(0.86);
  }

  .fav:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: -2px;
  }

  .fav-on {
    color: var(--ink);
  }
</style>
