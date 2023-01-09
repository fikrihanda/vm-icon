<script lang="ts" setup>
import { BForm, BFormGroup, BFormInput } from 'bootstrap-vue-3'
</script>

<template>
  <BForm>
    <BFormGroup label="Alamat Email" label-for="email">
      <BFormInput id="email" name="email" placeholder="Email" />
    </BFormGroup>
    <BFormGroup label="Password" label-for="password">
      <BFormInput id="password" name="password" type="password" placeholder="Masukan Password" />
    </BFormGroup>
  </BForm>
</template>
