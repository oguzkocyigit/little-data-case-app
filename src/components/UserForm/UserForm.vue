<template>
  <div class="user-form">
    <img class="company-logo" src="../../assets/images/logos/littledata-logo.svg" alt="">
    <h1 class="welcome-text">Welcome to Littledata</h1>
    <div class="line"></div>
    <form @submit.prevent="checkForm" class="form-wrapper">
      <div class="form-field">
        <label for="storeName">Store Name</label>
        <input required id="storeName" type="text" v-model="form.storeName" placeholder="Your Store Name">
      </div>
      <div class="form-field">
        <label for="storeURI">Store URL</label>
        <input id="storeURI" type="text" v-model="form.storeURI" placeholder="yourstore.myshopify.com">
      </div>
      <div class="notification-box">
        <div class="form-field">
          <label for="emailAddress">Email Notifications</label>
          <input :required="form.sendNotification" id="emailAddress" type="text" v-model="form.emailAddress"
                 placeholder="jane@yourstore.com">
          <span class="error-label" v-if="errors.emailAddress"> {{errors.emailAddress}}</span>
          <input type="checkbox" v-model="form.sendNotification" id="notification" value="Bike">
          <label for="notification">Send me all the important app notifications on this email</label>
        </div>
      </div>
      <div>
        <button class="next" type="submit">
          NEXT
          <svg viewBox="0 0 492.004 492.004">
            <g>
              <g>
                <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
                      c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
                      v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
                      c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
                      l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      form: {
        storeName: '',
        storeURI: '',
        emailAddress: '',
        sendNotification: false,
      },
      errors: {
        emailAddress: ''
      }
    }
  },
  created() {
    if (this.$store.state.userData.storeName) {
      this.form = this.$store.state.userData
    }
  },
  methods: {
    checkForm() {
      if (this.form.sendNotification) {
        if (!this.form.emailAddress.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          this.errors.emailAddress = 'Please, enter a valid email address'
        } else {
          this.$store.dispatch('sendUserForm', this.form)
          this.$emit('continue')
        }
      } else {
        this.$store.dispatch('sendUserForm', this.form)
        this.$emit('continue')
      }
    }
  }
}
</script>

<style lang="scss" src="./UserForm.scss"></style>
