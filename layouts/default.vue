<script lang="ts" setup>
import { BCol, BContainer, BRow } from 'bootstrap-vue-3'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import NoAuthBg from '~/assets/images/no-auth-bg.png'

console.log(NoAuthBg)
</script>

<template>
  <BContainer fluid gutter-x="0" gutter-y="0">
    <BRow no-gutters>
      <BCol
        cols="6"
        :class="useCss({
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: 'var(--bs-primary)',
          backgroundImage: `url(${NoAuthBg})`,
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--bs-white)',
        })"
      >
        <div>
          <div
            :class="useCss({
              fontWeight: '700',
              fontSize: '50px',
              lineHeight: 1.2,
              marginBottom: '8px',
            })"
          >
            Vendor <br>
            Management <br>
            System
          </div>
          <div
            :class="useCss({
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: 1.2,
            })"
          >
            by: Indonesia Comnet Plus
          </div>
        </div>
      </BCol>
      <BCol
        cols="6"
        :class="useCss({
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        })"
      >
        <slot />
      </BCol>
    </BRow>
  </BContainer>
</template>
