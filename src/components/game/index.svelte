<script>
    import Game from "./GameLogic/index"
    let gameBoard = Game.generateGameBoard();
    let snake = null;

        function startGame() {
            gameBoard = Game.generateGameBoard()
            snake = Game.startSnake(gameBoard)
        }
        console.log(gameBoard)
</script>


<section>
{#each gameBoard as row, i (i)}
    <div class="row">
        {#each row as rowBlock, j (`${i}-${j}`)}
            <div class="{rowBlock ? "snake" : "block"}">
                
            </div>            
        {/each}
    </div>
{/each}
</section>

<br />

{#if !snake }
    <button on:click={startGame}>Start Game</button>
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
        widows: 20px;
        height: 20px;
        background-color: aqua;
    }
   
</style>