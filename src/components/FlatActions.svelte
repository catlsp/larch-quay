<script>
  import FavoriteButton from './FavoriteButton.svelte';

  export let flat;
  export let favorites = [];
  export let config = {};
  export let onFavorite = () => {};

  $: label = config.favoriteLabel || 'Save this home';
</script>

<div class="flat-actions">
  <FavoriteButton {flat} {favorites} {onFavorite} {label} />
</div>

<style>
  .flat-actions {
    display: flex;
    align-items: center;
    flex: none;
    margin-left: 12px;
    margin-right: -10px;
  }
</style>
