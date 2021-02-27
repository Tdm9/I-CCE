<template>
  <main>
    <GlassCard/>
    <BackGround/>
  </main>
</template>

<script>
import BackGround from '@/components/BackGround';
//import Glass from '@/components/Glass';
import GlassCard from "@/components/GlassCard";
export default {
  name: 'HelloWorldBootstrap',
  components: {BackGround,GlassCard},
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

h1 {
  color: #426696;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.8;
}
h2, p {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}

h3 {
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
}

main{
  justify-content: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  z-index: 20;
}


</style>
