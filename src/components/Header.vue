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

			/* ----------- iPhone 5 ----------- */
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		#mainContainer {
			font-size: 8px;
		}

		.employeeTable__head {
			font-size: 8px;
		}

		.employeeTable__body {
			font-size: 8px;
		}
	}

   /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
   /* Portrait */
   @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		#mainContainer {
			font-size: 9px;
		}

		.employeeTable__head {
			font-size: 9px;
		}

		.employeeTable__body {
			font-size: 9px;
		}
	}

   /* ----------- iPhone 6+, 7+ and 8+ ----------- */
   /* Portrait */
   @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
		#mainContainer {
			font-size: 10px;
		}

		.employeeTable__head {
			font-size: 10px;
		}

		.employeeTable__body {
			font-size: 10px;
		}
   }

   /* ----------- iPhone X ----------- */
	/* Portrait */
   @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
		#mainContainer {
			font-size: 12px;
		}

		.employeeTable__head {
			font-size: 12px;
		}

		.employeeTable__body {
			font-size: 12px;
		}
	}

	/* ----------- iPad Pro ----------- */
	/* Portrait */
   @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
	  .logowrapper__logo {
      width: 300px;
      margin: 0 30px;
    }

    .logowrapper__logo > img{
      width: 300px;
      background: blue;
    }
	}

</style>