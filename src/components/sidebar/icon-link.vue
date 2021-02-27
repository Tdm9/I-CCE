<template>
  <b-tr>
    <b-th class="text-center">
      <router-link class="link" :to="link">
        <h2><b-icon :icon="icon"></b-icon></h2>
      </router-link>
    </b-th>
    <b-td>
      <links :display-text="displayText" :link="link" />
    </b-td>
  </b-tr>
</template>

<script>
import links from "@/components/sidebar/links";
export default {
  name: "iconLink",
  components: {links},
  props: {
    displayText:String,link:String,icon:String
  }

}
</script>

<style scoped>

</style>
