<template>
  <div class="questions">
    <img class="company-logo" src="../../assets/images/logos/littledata-logo.svg" alt="">
    <h1 class="welcome-text">Welcome to Littledata</h1>
    <div class="line"></div>
    <form @submit.prevent="checkForm" class="form-wrapper">
      <div class="form-field">
        <p>How did you hear about Littledata?</p>
        <div>
          <input required type="radio" id="appStore" name="source" value="appStore">
          <label for="appStore">THROUGH SHOPIFY APP STORE</label>
        </div>
        <div>
          <input required type="radio" id="agency" name="source" value="agency">
          <label for="agency">RECOMMENDED BY MY AGENCY</label>
        </div>
        <div>
          <input required type="radio" id="friend" name="source" value="friend">
          <label for="friend">TROUGH A FRIEND / COLLEAGUE</label>
        </div>
        <div>
          <input required type="radio" id="ad" name="source" value="ad">
          <label for="ad">I SAW A LITTLEDATA AD</label>
        </div>
        <div>
          <input required type="radio" id="blog" name="source" value="blog">
          <label for="blog">I READ A BLOG POST / ARTICLE / BOOK BY LITTLEDATA</label>
        </div>
        <div>
          <input required type="radio" id="other" name="source" value="other">
          <label for="other">OTHER</label>
        </div>
      </div>
      <div class="form-field">
        <p>Are you part of an agency or a consulting firm?</p>
        <div class="form-field">
          <div>
            <input required v-model="form.checked" type="radio" id="yes" name="checked" value="yes">
            <label for="yes">YES</label>
            <input required v-model="form.checked" type="radio" id="no" name="checked" value="no">
            <label for="no">NO</label>
          </div>
        </div>
      </div>
      <button v-if="userID === 1" class="prev" @click="goBack" type="submit">
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
        BACK
      </button>
      <button class="next" type="submit">NEXT
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
    </form>
  </div>
</template>

<script>

export default {
  name: 'Questions',
  data() {
    return {
      form: {
        source: '',
        checked: '',
      },
    }
  },
  computed: {
    userID() {
      return parseInt(this.$route.params.user)
    }
  },
  methods: {
    goBack() {
      this.$emit('back')
    },
    checkForm() {
      if (this.userID === 1) {
        if (this.$store.state.userData.storeURI.includes('shopify')) {
          this.$emit('continue')
        } else {
          this.$router.push({name: 'end'});
        }
      } else {
        this.$emit('continue')
      }
    }
  }
}
</script>

<style lang="scss" src="./Questions.scss"></style>
