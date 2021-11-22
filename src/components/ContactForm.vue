<template>
    <div class="contact-form">
        <input class="contact-form__input" type="text" placeholder="Name" v-model="name">
        <input class="contact-form__input" type="text" placeholder="Address" v-model="address">
        <div class="contact-form__under-element">
            <input class="contact-form__input" type="text" placeholder="City" v-model="address">
            <input class="contact-form__input" type="text" placeholder="Zip code" v-model="address">
        </div>
        <input class="contact-form__input" type="email" placeholder="Email" v-model="email">
        <textarea class="contact-form__input contact-form__input__description" cols="4" placeholder="Message" v-model="message"></textarea>
        <div class="contact-form__under-element">
            <label :for="`sizes-input-${index}`" v-for="(size, index) in content.sizes">
			<div>{{ size }}</div>
			<input :id="`sizes-input-${index}`" name="sizes" type="checkbox" v-model="form.sizes" :value="size" />
		    </label>
        </div>

        <button class="contact-form__button" @click="submit_order">Submit</button>
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
                message: null,
                sizes: [],
            },
            content: {
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'JUMBO', 'MANDINGO'],
                balloonTastes: ['Neutral', 'Strawberry', 'Melon', 'Cola', 'Chocolate', 'Banana', 'Mango'],
                balloonVariation: ['Extra sensitive', 'Ultra thin', 'Snug fit', 'Comfy fit', 'Ribbed & Dotted' ]
            },
            customVariation: {
                thisSize: null,
                thisTaste: null,
                thisVariation: null,
            }
        }
    },
    methods: {
        submit_order() {
            alert(`Thank you, ${this.name}, for ordering with us at DongYourSlong.no. Your order will be delivered in a neutral packaging at your local postbox with your personal message displayed on the packaging. We hope you enjoy your product and hope to do more business in the future.`)
        }
    }
}

</script>

<style>

    .contact-form {
        width: 40vw;
        height: 50vh;
        background: gray;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .contact-form__under-element {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
    }

    .contact-form__under-element > input {
        width: 48.5%;
    }

    .contact-form__input {
        width: 90%;
        padding: 1em;
    }

    .contact-form__input__description {
        height: 8em;
    }

    .contact-form__button {
        width: 10em;
        height: 3em;
    }

</style>