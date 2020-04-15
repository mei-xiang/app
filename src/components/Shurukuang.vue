<template>
    <div class="list">
        <van-cell-group>
            <van-field v-model="value" placeholder="{{placeholder}}" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  props:[
      placeholder
  ]
  
}
</script>
<style scoped>

</style>