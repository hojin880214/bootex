<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>

<script>
export default {
    methods:{
        childFunc(){
            console.log('부모 컴포에서 발생시킨 이벤트')
        }
    }
}
</script>

<style>

</style>