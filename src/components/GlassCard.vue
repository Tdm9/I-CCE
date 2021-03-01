<template>
  <div class="overflow-hidden glass">
    <b-row class="pageContainer pl-2">
      <b-col align-self="center" class="flex-grow-0 dashboard">
        <b-table-simple align-self="center" hover small>
          <b-tbody>
            <iconlink v-for="icon in icons" v-bind:key="icon.text" :link="icon.link" :icon="icon.icon" :display-text="icon.text"/>
          </b-tbody>
        </b-table-simple>
      </b-col>
      <b-card-body class="content">
        <b-card no-body>
          <b-card-body style="position:absolute; top:5%; bottom:5%; min-height:550px; overflow-y:auto;">
            <router-view/>
          </b-card-body>
        </b-card>
        <div class="fixed-top pl-3 pt-2">
          <b-button pill variant="outline-info" v-b-toggle.collapse-1.sidebar-variant ><b-icon-list-nested/></b-button>
        </div>
      </b-card-body>
    </b-row>
  </div>
</template>

<script>
import iconlink from "@/components/sidebar/icon-link";
import {homePath,popularPath,favPath,searchPath} from '@/utils/links';
export default {
  name: "GlassCard",
  components: {iconlink},
  data() {
    return {
      icons: [
        { icon: 'house', link: homePath ,text:'Home'},
        { icon: 'list-stars', link:popularPath, text:'Most Popular'},
        { icon: 'star', link:favPath, text:'Favorites'},
        { icon: 'binoculars', link:searchPath, text:'Search'},
      ],
    }
  }
}
</script>

<style scoped>
.glass {
  background: white;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  left: 10%;
  right: 10%;
  top: 10%;
  bottom: 10%;
  min-width: 80%;
  min-height: 80vh;
  /*  height: 1000vh;*/
  border-radius: 2rem;
  z-index: 50;
  backdrop-filter: blur(0.5rem);
}

.dashboard {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  min-height: 100%;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
}
.content {
  margin: 5rem;
  display: flex;
  flex-direction: column;
}

.pageContainer {
  position: absolute;
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
</style>
