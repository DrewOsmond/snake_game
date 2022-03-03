<script>
    import Game from "./GameLogic/board"
    let firstGame = true;
    let game = new Game();
    let board = game.board;
    let interval;
    let playing = false;
    let score = 0;

        function startGame() {
            score = 0
            interval = setInterval(() => gameLoop(), 70);
            if (!firstGame) {
                game = new Game();
                board = game.board;
            } else {
                firstGame = false;
            }
        }

        function gameLoop() {
            const move = game.snakeMovement()
            if (!move) {
                playing = false;
                clearInterval(interval)
                return 
            }
            const [_moved, ate] = move
            if (ate) score++
            board = game.board
        }

</script>

{#if !game }
    <button on:click={startGame}>Start Game</button>
{:else if game && !playing} 
    <button on:click={startGame}>start over</button>
{/if}
<section>
<div class="gameBoard">
    <h3>Score: {score}</h3>
    {#if game} 
        {#each board as row, i (i)}
            <div class="row">
                {#each row as rowBlock, j (`${i}-${j}`)}
                 {#if rowBlock === "snek"}
                     <span class="snake"></span>
                        {:else if rowBlock === "."}
                     <span class="dot"></span>
                  {:else} 
                     <span class="block"></span>
                {/if}  
                {/each}
            </div>
        {/each}
    {/if}
</div>
</section>

<br />


<style>
    .block {
        width: 20px;
        height: 20px;
        /* margin-right: 1px; */
        background-color: rgb(88, 77, 77);
        
    }

    .row {
        display: flex;
    }

    .snake {
        width: 20px;
        height: 20px;
        background-color: rgb(133, 224, 163);
    }
    .dot {
        width: 20px;
        height: 20px;
        background-color: rgb(238, 49, 159);
    }
   
   .gameBoard {
       width: 99vw;
       height: 80vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
   }
</style>