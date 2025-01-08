<script>
   import { generatePassword } from './svelte';
   let iLength = 10;
   let includeSpecialChars = false;

   let generatedPassword = "";
</script>

<main>
   <h1>Password Generator</h1>

   <label>
       Password Length:
       <input type="number" bind:value={iLength} min="8" max="99"/>
   </label>

   <label>
       Include Special Characters:
       <input type="checkbox" bind:checked={includeSpecialChars} />
   </label>

   <button onclick={() => generatedPassword = generatePassword(iLength, includeSpecialChars)}>Generate Password</button>

   <p><strong>Generated Password:</strong> {generatedPassword}</p>
</main>

<style>
   main {
       display: flex;
       flex-direction: column;
       align-items: center;
       margin: 2rem;
       font-family: Arial, sans-serif;
   }

   label {
       margin: 1rem 0;
   }

   input {
       margin-left: 0.5rem;
   }

   button {
       padding: 0.5rem 1rem;
       margin-top: 1rem;
       background-color: #007bff;
       color: white;
       border: none;
       border-radius: 5px;
       cursor: pointer;
   }

   button:hover {
       background-color: #0056b3;
   }

   p {
       margin-top: 2rem;
       font-size: 1.2rem;
   }
</style>
