<template>
  <div id="default">
    <header>
      Hello Header
    </header>
    <aside>
      Hello Sidebar
    </aside>
    <main>
      <slot><router-view></router-view></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
};
</script>
