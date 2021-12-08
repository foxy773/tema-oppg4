<template>
  <div class="header">
    <div class="header__logowrapper">
      <div class="header__logowrapper__logo">
        <img src="./../../public/assets/header/LogotheLab.svg" alt="" />
      </div>
      <div class="header__logowrapper__subtext">
        <div class="header__logowrapper__subtext__catchfrase">
          a collection <br />
          of custom components
        </div>
        <div class="header__logowrapper__subtext__version">THELAB_V1.exe</div>
      </div>
    </div>
    <div class="header__navContainer">
            <Hamburger />
    </div> 
  </div>
</template>

<script>
import Hamburger from '../components/Hamburger.vue';

export default {
    components: {
           Hamburger,
        },
    data() {
        
    
        Hamburger},
}
</script>


<style>
/*Header*/
.header {
  height: 125px;
  width: 100%;
  background: white;
  border-bottom: solid black 1px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.header__logowrapper {
  height: 100%;
  display: flex;
  align-items: center;
}

.header__navContainer {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header__logowrapper__logo {
  display: flex;
  width: 400px;
  height: auto;
  font-weight: 900;
  font-style: italic;
  letter-spacing: 4px;
  text-transform: uppercase;
  justify-content: center;
}

.header__logowrapper__subtext {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.header__logowrapper__subtext__catchfrase {
  font-size: 0.7rem;
  text-transform: uppercase;
}

.header__logowrapper__subtext__version {
  font-weight: 900;
  font-style: italic;
  font-size: 0.8rem;
  text-transform: uppercase;
}

/* mindre nettbrett */
@media screen and (max-width: 735px) {
  .header {
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas: "logo logo logo logo logo logo none";
  }
}
</style>