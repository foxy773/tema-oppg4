<template>
    <div class="contact-form">
        <div class="contact-form__container">
            <div class="contact-form__header">
                <div class="contact-form__title">DONGyourSLONG.ru</div>

                <div class="contact-form__info">Order your condoms anonymously</div>
            </div>

            <div class="contact-form__form">
                <input class="contact-form__input" type="text" placeholder="Name" form="name" v-model="form.name">

                <input class="contact-form__input" type="text" placeholder="Address" form="address" v-model="form.address">

                <div class="contact-form__under-element">
                    <input class="contact-form__input" type="text" placeholder="City" form="city" v-model="form.city">
                    <input class="contact-form__input" type="text" placeholder="Zip code" v-model="form.zipCode">
                </div>

                <input class="contact-form__input" type="email" placeholder="Email" form="email" v-model="form.email">
            </div>

            <div class="contact-form__order-assembler">
                <div class="contact-form__order-menu">
                    <div class="contact-form__menu-title">Size</div>

                    <!-- Droplist that loops the strings in content[index] as options + v-model the 'customVariation' object.  -->
                    <select class="contact-form__select" v-model="form.customVariation.thisSize">
                        <option disabled value="Select variation">Select size</option>
                        <option v-for="sizes in content.sizes"> {{ sizes }} </option>
                    </select>
                </div>

                <div class="contact-form__order-menu">
                    <div class="contact-form__menu-title">Taste</div>

                    <select class="contact-form__select" v-model="form.customVariation.thisTaste">
                        <option disabled value="Select variation">Select taste</option>
                        <option v-for="tastes in content.tastes"> {{ tastes }} </option>
                    </select>
                </div>

                <div class="contact-form__order-menu">
                    <div class="contact-form__menu-title">Variation</div>

                    <select class="contact-form__select" v-model="form.customVariation.thisVariation">
                        <option disabled value="Select variation">Select variation</option>

                        <option v-for="variation in content.variation"> {{ variation }} </option>
                    </select>
                </div>

                <button class="contact-form__add-button" @click="push_order">Add</button>
            </div>

            <button class="contact-form__submit-button" @click="submit_order">Submit order</button>

            <div class="contact-form__order-container">

                <!-- Loops the order list as a composition under a label for easy screenreading -->
                <label v-for="(balloon, index) in order">
                    <div class="contact-form__order-item">
                        <div> {{ balloon.thisSize }} </div>
                        <div> {{ balloon.thisTaste }} </div>
                        <div> {{ balloon.thisVariation }} </div>
                        <button class="contact-form__remove-button" @click="remove_order(index)">Remove</button>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                address: null,
                city: null,
                zipCode: null,
                email: null,

                customVariation: {
                    thisSize: null,
                    thisTaste: null,
                    thisVariation: null,
                },
            },

            content: {
                sizes: ["XS", "S", "M", "L", "XL", "JUMBO", "MANDINGO"],
                tastes: ["Neutral", "Strawberry", "Melon", "Cola", "Chocolate", "Banana", "Mango"],
                variation: ["Extra sensitive", "Ultra thin", "Snug fit", "Comfy fit", "Ribbed & Dotted"]
            },
            
            order:[],
        }
    },
    methods: {

        // Pushes customVariation and its edited values as a separate object into the 'order' list.
        push_order() {
            this.order.push({ ...this.form.customVariation })
        },

        // Splices objects in the 'order' list based on the objects index.
        remove_order(index) {
            this.order.splice(index, 1);
        },

        // Pushes a popup with a prewritten message, which has a template literal incorporated that displays the 'name' value in 'form' list.
        submit_order() {
            alert(`Thank you, ${this.form.name}, for ordering with us at DongYourSlong.no. Your order will be delivered in a neutral packaging at your local postbox with your personal message displayed on the packaging. We hope you enjoy your product and hope to do more business in the future.`)
        }
    }
}
</script>

<style>
    /* 1.1 Base */

    .contact-form {
        font-family:"Times New Roman", Times, serif;
        width: 100%;
        height: 100%;
        color: #EF233C;
        background: #EDF2F4;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: scroll;
    }

    .contact-form__container {
        height: 90%;
        width: 80%;
        max-width: 600px;
        padding: 4% 0% 4% 0%;
    }

    /* 2.1 Header */

    .contact-form__header {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        margin-bottom: 8%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .contact-form__title {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 5%;
    }

    /* 3.1 Form */

    .contact-form__form {
        margin-bottom: 8%;
    }

    .contact-form__under-element {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
    }

    .contact-form__under-element > input {
        width: 50%;
    }

    .contact-form__input {
        width: 100%;
        height: 2rem;
        margin: 0.1rem;
        padding: 1rem;
        border: none;
        border-radius: 10px;
    }

    .contact-form__input__description {
        height: 8em;
    }

    /* 4.1 Order assembler */

    .contact-form__order-assembler {
        width: 100%;
        margin-bottom: 4%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    }

    .contact-form__order-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-form__menu-title {
        margin-bottom: 3%;
    }

    .contact-form__select {
        border-style: none;
        width: 97%;
    }

    .contact-form__add-button {
        width: 125px;
        height: 19px;
        color: white;
        background: #EF233C;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        border: none;
        border-radius: 3px;
    }

    .contact-form__add-button:hover {
        color: #EF233C;
        background: white;
        transition: 0.2s;
    }

    /* 5.1 Order container */

    .contact-form__order-container {
        background: white;
        border-radius: 5px;
    }

    .contact-form__order-item {
        color: gray;
        font-size: 0.9rem;
        padding: 0.3rem 0.3rem 0.3rem 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .contact-form__remove-button {
        color: white;
        background: #EF233C;
        border: none;
        border-radius: 3px;
        padding: 1%;
    }

    .contact-form__submit-button {
        width: 100%;
        height: 3em;
        color: white;
        background: #EF233C;
        margin-bottom: 4%;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        border: none;
        border-radius: 10px;
    }

    .contact-form__submit-button:hover {
        color: #EF233C;
        background: white;
        transition: 0.2s;
    }

    @media only screen and (max-device-width: 1400px) {
        .contact-form__order-assembler{
            flex-direction: column;
            align-items: center;
        }
    }
</style>