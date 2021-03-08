<template>
  <b-container class="w-100 h-100">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <b-row class="flex-container pt-3 pl-5 pb-3 pr-4">
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button v-b-tooltip.hover title="Doces e Compotas" variant="outline-light" :to="typePath+'Doces e Compotas'" pill><JamIcon/></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button v-b-tooltip.hover title="Sobremesas" variant="outline-light" :to="typePath+'Sobremesas'" pill><DessertIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button v-b-tooltip.hover title="Infantil" variant="outline-light" :to="typePath+'Infantil'" pill><ToyIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button v-b-tooltip.hover title="Massas" variant="outline-light" :to="typePath+'Massas'" pill ><PastaIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button v-b-tooltip.hover title="Sopas" variant="outline-light" :to="typePath+'Sopas'" pill ><SoupIcon /></b-button></b-col>
    </b-row>
    <b-row class="flex-container pt-3 pl-5 pb-3 pr-4" :key="line[0].link + 'row'" v-for="line in buttonList">

      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4" :key="item.link" v-for="item in line">
        <b-button variant="outline-light" v-b-tooltip.hover :title="item.link" :to="typePath+item.link" pill >
          <i v-html="item.icon"></i>
        </b-button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import SoupIcon from "@/assets/soup-icon";
import PastaIcon from "@/assets/pasta-icon";
import ToyIcon from "@/assets/toy-icon";
import DessertIcon from "@/assets/dessert-icon";
import JamIcon from "@/assets/jam-icon";
import {typePath} from '@/utils/links';
export default {
  name: "Home",
  components: {JamIcon,SoupIcon,DessertIcon,ToyIcon,PastaIcon},
  data(){
    return{
      buttonList:[
          [{link:'Panela de Vapor',icon:'<i class="fab fa-hotjar fa-4x"></i>'},{link:'Bebé',icon:'<i class="fas fa-baby fa-4x"></i>'},
            {link:'Bebidas',icon:'<i class="fas fa-glass-cheers fa-4x"></i>'}, {link:'Peixe e Marisco',icon:'<i class="fas fa-fish fa-4x"/>'},
            {link:'Gelados',icon:'<i class="fas fa-ice-cream fa-4x"/>'},{link:'Entradas',icon:'<i class="fas fa-cheese fa-4x"/>'}],
          [{link:'Épocas Festivas',icon:'<i class="fas fa-birthday-cake fa-4x"></i>'},{link:'Acompanhamentos',icon:'<i class="fas fa-bacon fa-4x"></i>'},
            {link:'Vegetarianas',icon:'<i class="fas fa-carrot fa-4x"/>'},{link:'Carne',icon:'<i class="fas fa-drumstick-bite fa-4x"/>'},
            {link:'Molhos',icon:'<i class="fas fa-oil-can fa-4x"></i>'}, {link:'Bebidas',icon:'<i class="fas fa-glass-cheers fa-4x"></i>'}]
      ],
      rawhtml: '<i class="fas fa-glass-cheers fa-4x"></i>',
      typePath,
      columnsStyle: {width:"100%",'z-index': -10},
      imgs: [],
    }
  },
}
</script>

<style scoped>

</style>
