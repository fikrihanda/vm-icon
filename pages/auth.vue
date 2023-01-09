<script lang="ts" setup>
import { BTab, BTabs } from 'bootstrap-vue-3'
</script>

<template>
  <div
    :class="useCss({
      display: 'flex',
      flexDirection: 'column',
    })"
  >
    <div
      :class="useCss({
        display: 'flex',
        justifyContent: 'center',
      })"
    >
      <img
        src="~/assets/images/icon-logo.png"
        :class="useCss({
          width: '151px',
          marginBottom: '78px',
        })"
      >
    </div>
    <div
      :class="useCss({
        marginBottom: '88px',
      })"
    >
      <h1
        :class="useCss({
          fontSize: '32px',
          fontWeight: 700,
          color: 'var(--bs-primary)',
        })"
      >
        Selamat Datang
      </h1>
      <p
        :class="useCss({
          letterSpacing: '0.014em',
          marginBottom: 0,
        })"
      >
        Gunakan alamat email dan password untuk akses dashboard.
      </p>
    </div>
    <BTabs lazy :class="tabsDesignAuth">
      <BTab title="Login" active>
        <AuthLogin />
      </BTab>
      <BTab title="Register">
        <p>I'm the second tab</p>
      </BTab>
    </BTabs>
  </div>
</template>
