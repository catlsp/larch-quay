<script>
    import quaysidePhoto from '../assets/offer-QS-1209.png';
    import cranePhoto from '../assets/offer-CH-907.png';
    import yardPhoto from '../assets/offer-YD-708.png';
    import terrracePhoto from '../assets/offer-TR-609.png';
    import { pounds } from '../lib/format';
    export let onBook;
    export let flats = [];

    const photos ={
        'QS-1209': quaysidePhoto,
        'CH-907': cranePhoto,
        'YD-708': yardPhoto,
        'TR-609': terrracePhoto
    }
    
    const offerIds = ['QS-1209', 'CH-907', 'YD-708', 'TR-609'];

    $: offers = offerIds
        .map((id) => flats.find((flat) => flat.id === id))
        .filter(Boolean);
    function offerPrice(price) {
        return Math.round(price * 0.93 / 100) * 100;
    }
</script>

<section class="offers">
  <div class="offers-header">
    <h2>Special offers</h2>
    <p>Four homes at 7% off the list price until 31 December.</p>
  </div>

<div class="offers-list">
{#each offers as flat (flat.id)}
<article class="offer-card">
    <img src={photos[flat.id]} alt="Living room in a {flat.building} apartment"/>
    <p class="offer-meta"> {flat.building}, floor {flat.floor}</p>
    <h3>{flat.rooms} bedrooms, {flat.area} m²</h3>
    <p class="offer-meta"> {flat.aspect}, {flat.balcony}</p>
    <div class="offer-prices">
        <span>{pounds(offerPrice(flat.price))}</span>
        <del>{pounds(flat.price)}</del>
    </div>
    <button class="offer-link" type="button" on:click={onBook}>Book a viewing</button>
</article>
{/each}
</div>
</section>

<style>
    .offers {
        padding: 160px 32px;
    }
    .offers-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;
    }

    h2 {
        font-size: 64px;
    }

    .offers-header p{
        max-width: 420px;
        font-size: 24px;
        line-height: 1.35;
    }

    .offers-list {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 48px 24px;
        margin-top: 64px;
    }

    .offer-card {
        min-width: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .offer-card img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
    }

    .offer-meta {
        font-size: 14px;
        color: var(--muted);
    }

    .offer-card h3 {
        font-size: 24px;
    }

    .offer-prices {
        display: flex;
        align-items: baseline;
        gap: 12px;
        font-size: 24px;
    }

    .offer-prices del {
        font-size: 14px;
        color: var(--muted);
    }

    .offer-link {
        padding: 0;
        border: 0;
        background: transparent;
        font-size: 16px;
        text-decoration: underline;
        text-underline-offset: 3px;
        cursor: pointer;
    }

    .offer-link:focus-visible {
        outline: 2px solid var(--ink);
        outline-offset: 4px;
    }

    @media (max-width: 1023px) {
        .offers {
            padding: 120px 32px;
        }

        .offers-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            
        }
        
        .offers-header {
            flex-direction: column;
        }

        .offers-header p {
            max-width: 340px;
        }

        h2 {
            font-size: 48px;
        }
    }
    @media (max-width: 767px) {
        .offers {
            padding: 96px 16px;
        }

        .offers-header {
            flex-direction: column;
        }

        .offer-card {
            scroll-snap-align: start;
        }

        .offer-card h3 {
            font-size: 20px;
        }
        
        h2 {
            font-size: 34px;
        }

        .offers-list {
            grid-template-columns: none;
            grid-auto-flow: column;
            grid-auto-columns: 280px;
            gap: 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-padding-left: 16px;
            margin-inline: -16px;
            padding: 4px 16px 8px;
        }

    }
</style>
