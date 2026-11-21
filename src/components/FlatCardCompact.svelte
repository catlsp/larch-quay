<script>
  import FlatActions from './FlatActions.svelte';

  export let flat;
  export let favorites = [];
  export let config = {};
  export let onOpen = () => {};
  export let onFavorite = () => {};

  const names = ['Studio', '1 bedroom', '2 bedrooms', '3 bedrooms', '4 bedrooms'];
  const statuses = { reserved: 'Reserved', sold: 'Sold' };

  $: title = names[flat.rooms] + ', ' + flat.area + ' m², floor ' + flat.floor;
  $: note = flat.building + ', ' + flat.aspect.toLowerCase();
  $: price = '£' + Number(flat.price).toLocaleString('en-GB');
  $: status = statuses[flat.status] || '';
</script>

<div class="flat flat-compact" class:flat-off={status} on:click={() => onOpen(flat)}>
  <img class="flat-plan" src={'/media/plans/' + flat.planType + '.png'} alt="" />
  <div class="flat-main">
    <p class="flat-title">
      {title}
    </p>
    <p class="flat-note">
      {note}
    </p>
  </div>
  <div class="flat-side">
    {#if status}
      <span class="flat-status">{status}</span>
    {:else}
      <span class="flat-price">{price}</span>
    {/if}
  </div>
  <FlatActions {flat} {favorites} {config} {onFavorite} />
</div>

<style>
  .flat {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 -16px;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 180ms ease;
    will-change: transform, background-color;
  }

  .flat:hover {
    background-color: var(--bg);
  }

  .flat-plan {
    flex: none;
    width: 72px;
    height: 54px;
    margin-right: 18px;
    object-fit: cover;
    background: var(--surface);
  }

  .flat-main {
    flex: 1;
    min-width: 0;
  }

  .flat-title {
    font-size: var(--step-body);
    line-height: 1.4;
    font-variant-numeric: tabular-nums;
  }

  .flat-note {
    margin-top: 2px !important;
    font-size: var(--step-small);
    line-height: 1.4;
    color: var(--muted);
  }

  .flat-side {
    flex: none;
    padding-left: 20px;
    font-size: var(--step-body);
    line-height: 1.4;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  .flat-off .flat-title,
  .flat-off .flat-status {
    color: var(--muted);
  }
</style>
