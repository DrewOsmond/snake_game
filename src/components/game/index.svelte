<script>
    import Game from "./GameLogic/board"
    let game;
    let board;
    let interval;
    let playing = true;

        function startGame() {
            playing = true;
            game = new Game()
            board = game.board
            interval = setInterval(() => gameLoop(), 200);
        }

        function gameLoop() {
            const move = game.snakeMovement()
            if (!move) {
                playing = false;
                clearInterval(interval)
            }
            board = game.board
        }

</script>


<section>
{#if game} 
    {#each board as row, i (i)}
        <div class="row">
            {#each row as rowBlock, j (`${i}-${j}`)}
                {#if rowBlock !== ""}
                    <span class="snake"></span>
                {:else} 
                    <span class="block"></span>
                {/if}  
            {/each}
        </div>
    {/each}
{/if}
</section>

<br />

{#if !game }
    <button on:click={startGame}>Start Game</button>
{:else if game && !playing} 
    <button on:click={startGame}>start over</button>
{/if}

<style>
    .block {
        width: 20px;
        height: 20px;
        /* margin-right: 1px; */
        background-color: red;
        
    }

    .row {
        display: flex;
    }

    .snake {
        width: 20px;
        height: 20px;
        background-color: aqua;
    }
   
</style>