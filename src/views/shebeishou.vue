<template>
<div id="shebeis">
    <!-- <p> -->
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
                background="#32ECDE"
            />
            </form>
    <!-- </p> -->
    <Shebei></Shebei>
</div>
</template>

<script>
import Shebei from '../components/shebei'
// import { Toast } from 'vant'
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onSearch(val) {
      console.log(val)
    },
    onCancel() {
      Toast('取消');
    }
  },
  components:{
    Shebei
  }
}
</script>