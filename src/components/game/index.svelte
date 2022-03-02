<script>
    import Game from "./test"
    let gameBoard = Game.generateGameBoard();
    let snake = null;

        function startGame() {
            gameBoard = Game.generateGameBoard()
            snake = 1
        }
</script>


<section>
{#each gameBoard as _spot, i (i)}
    <div></div>
{/each}
</section>
<br />
{#if !snake }
<button on:click={startGame}>Start Game</button>
{/if}
<style>
    div {
        width: 20px;
        height: 20px;
        /* margin-right: 1px; */
        background-color: red;
    }
    section {
        display: flex;
        flex-wrap: wrap;
        width: 500px;
    }
</style>