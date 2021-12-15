<template>
  <div class="header">
    <div class="header__logowrapper">
      <div class="logowrapper__logo">
        <img src="./../../public/assets/header/LogotheLab.svg" alt="The lab" />
      </div>
      <div class="logowrapper__subtext">
        <div class="subtext__catchfrase">
          a collection <br />
          of custom components
        </div>
        <div class="subtext__version">THELAB_V1.exe</div>
      </div>
    </div>
    <div class="header__navContainer">
       <Hamburger />
    </div> 
  </div>
</template>

<script>
import Hamburger from "../components/Hamburger.vue";

export default {
    components: {
           Hamburger,
        },
  
}
</script>


<style>
  /*Header*/

  .header {
    height: 125px;
    width: 100vw;
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

  .logowrapper__logo {
    display: flex;
    height: auto;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 4px;
    text-transform: uppercase;
    justify-content: center;
    margin: 0 40px;
  }

  .logowrapper__subtext {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .subtext__catchfrase {
    font-size: 0.7rem;
    text-transform: uppercase;
  }

  .subtext__version {
    font-weight: 900;
    font-style: italic;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

/* Media Query */

  /* ----------- Small phone ----------- */
  @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
  .logowrapper__logo {
    width: 150px;
    margin: 0 10px;
  }

  .logowrapper__logo > img{
    width: 150px;
  }

  .logowrapper__subtext {
    font-size: 0.4rem;
    text-transform: uppercase;
    width: 90px;
  }

  .subtext__version {
    font-weight: 900;
    font-style: italic;
    font-size: 0.6rem;
    text-transform: uppercase;
  }
}

  /* ----------- Big phone ----------- */
  @media only screen and (min-device-width: 425px) and (max-device-width: 800px) {
    .logowrapper__logo {
      width: 250px;
      margin: 0 25px;
    }

    .logowrapper__logo > img{
      width: 250px;
    }
  }

  /* ----------- Tablet ----------- */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1400px) {
    .logowrapper__logo {
      width: 300px;
      margin: 0 30px;
    }

    .logowrapper__logo > img{
      width: 300px;
    }
  }
</style>