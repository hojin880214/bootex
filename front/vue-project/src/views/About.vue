<template>
  <div class="about">
    <page-title :title="title"/>
  </div>
</template>

<script>

import ParentComponent from './ParentComponent.vue'

export default {
  components:ParentComponent,
  data() {
    return {
      title: '동적'
  };
}
    
}

</script>
