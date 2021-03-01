<template>
    <div>
      <div class="gridContainer"/>
      <b-row class="mainRow">
        <b-col class="imageColumn p-1" v-for="column in chunkedColumns" v-bind:key="column[0]+'col'" >
          <b-img v-for="item in column" :src="item" v-bind:key="item" :style="columnsStyle"/>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import {chunk} from 'lodash';

export default {
  name:'BackGround',
  data(){
    return{
      columnsStyle: {width:"100%",'z-index': -10},
      chunkedColumns: [],
    }
  },
  beforeCreate() {

    fetch(`https://icce-server.herokuapp.com/api/range/0/40`)
        .then(response => response.json())
        .then(result => {
          this.chunkedColumns=chunk(result//.slice(0,20)
              .map(({recipeImage})=>recipeImage), 7);
        })
        .catch(error => console.log('error', error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainRow{;
  z-index: 0;
  position: fixed;
  top: 0;
  display: flex;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
}

.imageColumn{
  z-index: -2;
  height: 100vh;
}
.gridContainer{
  background: linear-gradient(
      to right bottom,
      rgba(78, 176, 176,0.6),
      rgba(236, 107, 107, 0.6)
  );
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
