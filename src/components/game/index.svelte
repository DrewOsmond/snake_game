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
            interval = setInterval(() => gameLoop(), 70);
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

{#if !game }
    <button on:click={startGame}>Start Game</button>
{:else if game && !playing} 
    <button on:click={startGame}>start over</button>
{/if}
<section>
<div class="gameBoard">
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