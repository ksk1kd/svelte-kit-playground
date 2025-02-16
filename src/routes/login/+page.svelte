<script lang="ts">
import type { PageProps } from './$types'

let { form }: PageProps = $props()
</script>

{#if form?.success}
  <p>Success</p>
{/if}
{#if form?.missingEmail}<p>The email field is required</p>{/if}
{#if form?.missingPassword}<p>The password field is required</p>{/if}

<form method="POST" action="?/login">
  <div>
    <label>
      Email
      <input name="email" type="email">
    </label>
  </div>
  <div>
    <label>
      Password
      <input name="password" type="password">
    </label>
  </div>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>