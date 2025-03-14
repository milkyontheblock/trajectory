<script setup lang="ts">
  const firstName = ref<string>()
  const lastName = ref<string>()
  const email = ref<string>()
  const password = ref<string>()

  const handleSubmit = async () => {
    fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
    })
  }

</script>

<template>
  <fieldset class="px-4 py-3">
    <ul class="flex flex-col gap-4">
      <li class="flex flex-col gap-1">
        <label>First name</label>
        <div>
          <InputText
            type="text"
            @on-input="(e) => { firstName = (e.target as HTMLInputElement).value }"
          />
        </div>
      </li>

      <li class="flex flex-col gap-1">
        <label>Last name</label>
        <div>
          <InputText
            type="text"
            @on-input="(e) => { lastName = (e.target as HTMLInputElement).value }"
          />
        </div>
      </li>

      <li class="flex flex-col gap-1">
        <label>Email</label>
        <div>
          <InputText
            type="email"
            @on-input="(e) => { email = (e.target as HTMLInputElement).value }"
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