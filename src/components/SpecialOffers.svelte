<section class="offers">
  <div class="offers-header">
    <h2>Special offers</h2>
    <p>Four homes at 7% off the list price until 31 December.</p>
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

    p {
        max-width: 420px;
        font-size: 24px;
        line-height: 1.35;
    }

    @media (max-width: 768px) {
        .offers {
            padding: 96px 16px;
        }

        .offers-header {
            flex-direction: column;
        }
        
        h2 {
            font-size: 34px;
        }
    }
</style>
