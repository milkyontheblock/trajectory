<script setup lang="ts">
  const username = ref<string>()
  const password = ref<string>()

  const handleSubmit = async () => {
    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value 
      })
    })

    const data = await res.json()
  }

</script>

<template>
  <fieldset class="px-4 py-3">
    <ul class="flex flex-col gap-4">
      <li class="flex flex-col gap-1">
        <label>Username</label>
        <div>
          <InputText
            type="text"
            @on-input="(e) => { username = (e.target as HTMLInputElement).value }"
          />
        </div>
      </li>

      <li class="flex flex-col gap-1">
        <label>Password</label>
        <div>
          <InputText
            type="password"
            @on-input="(e) => { password = (e.target as HTMLInputElement).value }"
          />
        </div>
      </li>
    </ul>

    <button @click="handleSubmit">
      Submit
    </button>
  </fieldset>
</template>