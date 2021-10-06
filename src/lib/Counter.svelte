<script>
  let count = 0
  const increment = () => { count += 1 }
  const decrement = () => { count -= 1 }
</script>

<button on:click={increment}>increment</button>
<button on:click={decrement}>decrement</button>
Clicks: <span id='counter-value' data-testid="counter-value">{count}</span>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
