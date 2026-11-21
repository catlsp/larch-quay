<script>
  import FlatCard from './FlatCard.svelte';

  export let groups = [];
  export let total = 0;
  export let favorites = [];
  export let config = {};
  export let onOpen = () => {};
  export let onFavorite = () => {};
</script>

<div class="sheet" style="width: 760px">
  <p class="sheet-note">
    {total} homes in four buildings. Three- and four-bedroom homes include a parking space.
  </p>

  {#each groups as group}
    {#if group.flats.length}
      <div class="sheet-group">
        <h3 class="sheet-group-title">{group.title}</h3>
        <div class="sheet-items">
          {#each group.flats as flat}
            <FlatCard {flat} {favorites} {config} {onOpen} {onFavorite} />
          {/each}
        </div>
      </div>
    {/if}
  {/each}

  <p class="sheet-end">
    Sales office open daily, 10:00 to 19:00<br />
    {config.address || '1 Crane Walk, Larch Quay'}
  </p>
</div>

<style>
  .sheet {
    position: relative;
    margin: 0 0 0 auto;
    padding: 72px 64px 76px;
    background: var(--paper);
    will-change: transform;
  }

  .sheet::before,
  .sheet::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background: var(--paper);
    -webkit-mask: radial-gradient(circle 16px at 50% 16px, #000 98%, transparent 100%) 0 0 / 26px 7px repeat-x;
    mask: radial-gradient(circle 16px at 50% 16px, #000 98%, transparent 100%) 0 0 / 26px 7px repeat-x;
  }

  .sheet::before {
    top: -7px;
  }

  .sheet::after {
    bottom: -7px;
    transform: scaleY(-1);
  }

  .sheet-note {
    max-width: 46ch;
    margin: 0 auto !important;
    font-size: var(--step-body);
    line-height: 1.5;
    text-align: center;
  }

  .sheet-group {
    margin-top: 64px;
  }

  .sheet-group-title {
    margin-bottom: 28px !important;
    font-size: var(--step-lead) !important;
    line-height: 1.2 !important;
    letter-spacing: -0.01em;
    text-align: center;
  }

  .sheet-items {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .sheet-end {
    margin-top: 72px !important;
    font-size: var(--step-body);
    line-height: 1.6;
    text-align: center;
  }
</style>
