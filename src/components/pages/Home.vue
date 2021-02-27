<template>
  <b-container class="w-100 h-100">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <b-row class="flex-container pt-3 pl-5 pb-3 pr-4">
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Panela de Vapor" pill ><i class="fab fa-hotjar fa-4x"></i></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Bebé" pill ><i class="fas fa-baby fa-4x"></i></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Doces e Compotas" pill><JamIcon/></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Sopas" pill ><SoupIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Entradas" pill ><i class="fas fa-cheese fa-4x"/></b-button></b-col>
    </b-row>
    <b-row class="flex-container pt-3 pl-5 pb-3 pr-4">
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Épocas Festivas" pill ><i class="fas fa-birthday-cake fa-4x"></i></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Sobremesas" pill><DessertIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Infantil" pill><ToyIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Massas" pill ><PastaIcon /></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Molhos" pill ><i class="fas fa-oil-can fa-4x"></i></b-button></b-col>
    </b-row>
    <b-row class="flex-container pt-3 pl-5 pb-3 pr-4">
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Carne" pill ><i class="fas fa-drumstick-bite fa-4x"/></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"> <b-button variant="outline-light" to="typeSearch/Vegetarianas" pill ><i class="fas fa-carrot fa-4x"/></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Peixe e Marisco" pill ><i class="fas fa-fish fa-4x"/></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Gelados" pill ><i class="fas fa-ice-cream fa-4x"/></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Acompanhamentos" pill ><i class="fas fa-bacon fa-4x"></i></b-button></b-col>
      <b-col class="flex-container pt-3 pl-5 pb-3 pr-4"><b-button variant="outline-light" to="typeSearch/Bebidas" pill ><i class="fas fa-glass-cheers fa-4x"></i></b-button></b-col>
    </b-row>


  </b-container>
</template>

<script>
import SoupIcon from "@/assets/soup-icon";
import PastaIcon from "@/assets/pasta-icon";
import ToyIcon from "@/assets/toy-icon";
import DessertIcon from "@/assets/dessert-icon";
import JamIcon from "@/assets/jam-icon";

export default {
  name: "Home",
  components: {SoupIcon,PastaIcon,ToyIcon,DessertIcon,JamIcon},
  data(){
    return{
      columnsStyle: {width:"100%",'z-index': -10},
      imgs: [],
    }
  },
}
</script>

<style scoped>

</style>
