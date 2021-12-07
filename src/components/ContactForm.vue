<template>
    <div class="contact-form">
        <input class="contact-form__input" type="text" placeholder="Name" form="name" v-model="form.name">
        <input class="contact-form__input" type="text" placeholder="Address" form="address" v-model="form.address">
        <div class="contact-form__under-element">
            <input class="contact-form__input" type="text" placeholder="City" form="city" v-model="form.city">
            <input class="contact-form__input" type="text" placeholder="Zip code" v-model="form.zipCode">
        </div>
        <input class="contact-form__input" type="email" placeholder="Email" form="email" v-model="form.email">
        <textarea class="contact-form__input contact-form__input__description" cols="4" placeholder="Message" v-model="form.message"></textarea>
        <div class="">
            <select v-model="form.customVariation.thisSize">
                <option disabled value="Select variation">Select size</option>
                <option v-for="sizes in content.sizes"> {{ sizes }} </option>
            </select>
            <select v-model="form.customVariation.thisTaste">
                <option disabled value="Select variation">Select taste</option>
                <option v-for="tastes in content.tastes"> {{ tastes }} </option>
            </select>
            <select v-model="form.customVariation.thisVariation">
                <option disabled value="Select variation">Select variation</option>
                <option v-for="variation in content.variation"> {{ variation }} </option>
            </select>
            <button class="" @click="push_order">Add order</button>
        </div>
        <div class="">
            <label v-for="(balloon, index) in order">
                <div>
                    <div> {{ balloon.thisSize }} </div>
                    <div> {{ balloon.thisTaste }} </div>
                    <div> {{ balloon.thisVariation }} </div>
                    <button class="" @click="remove_order(index)">Remove</button>
                </div>
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
                customVariation: {
                    thisSize: null,
                    thisTaste: null,
                    thisVariation: null,
                },
            },
            content: {
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'JUMBO', 'MANDINGO'],
                tastes: ['Neutral', 'Strawberry', 'Melon', 'Cola', 'Chocolate', 'Banana', 'Mango'],
                variation: ['Extra sensitive', 'Ultra thin', 'Snug fit', 'Comfy fit', 'Ribbed & Dotted' ]
            },
            order:[],
        }
    },
    methods: {
        push_order() {
            this.order.push({ ...this.form.customVariation })
        },

        remove_order(index) {
            this.order.splice(index, 1);
        },

        submit_order() {
            alert(`Thank you, ${this.form.name}, for ordering with us at DongYourSlong.no. Your order will be delivered in a neutral packaging at your local postbox with your personal message displayed on the packaging. We hope you enjoy your product and hope to do more business in the future.`)
        }
    }
}

</script>

<style>

    .contact-form {
        width: 100%;
        height: 100vh;
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