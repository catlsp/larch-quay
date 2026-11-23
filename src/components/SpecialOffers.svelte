<script>
    import offerPhoto from '../assets/offer-QS-1209.png';
    export let onBook;
</script>

<section class="offers">
  <div class="offers-header">
    <h2>Special offers</h2>
    <p>Four homes at 7% off the list price until 31 December.</p>
  </div>

  <article class="offer-card">
    <img src={offerPhoto} alt="Living room in a Quayside apartment overlooking the water">
    <p class="offer-meta"> Quayside, floor 12 </p>
    <h3>2 bedrooms, 58.1 m²</h3>
    <p class="offer-meta">Water side, no balcony</p>

    <div class="offer-prices">
        <span>£361,800</span>
        <del>£389,000</del>
    </div>

    <button class="offer-link" type="button" on:click={onBook}>Book a viewing</button>
</article>
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

    .offer-card {
        width: 326px;
        max-width: 100%;
        margin-top: 64px;
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

    @media (max-width: 768px) {
        .offers {
            padding: 96px 16px;
        }

        .offers-header {
            flex-direction: column;
        }

        .offer-card {
            width: 280px;
        }

        .offer-card h3 {
            font-size: 20px;
        }
        
        h2 {
            font-size: 34px;
        }
    }
</style>
