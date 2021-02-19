<template>
  <div class="home-page-view">
    <div class="home-page-view__inner">
      <h1>Littledata Welcome Flow Test</h1>
      <div class="container">
        <div class="flex-row">
          <div class="flex-grid" v-for="(user,key) in users" :key="key">
            <div class="user-info">
              <div class="user-info__avatar">
                <img :src="getImgUrl(user.avatar.src)" alt="">
              </div>
              <div class="user-info__name">
                {{ user.name }}
              </div>
              <div class="user-info__desc">
                {{ user.desc }}
              </div>
              <button @click="goToPage(key+1)">Enter {{ user.name }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      users: [
        {
          avatar: {
            src: "John.png"
          },
          name: "John",
          desc: "John is a new customer for littledata. We want him to go through the full servey so that we can properly setup his account."
        },
        {
          avatar: {
            src: "Claire.png"
          },
          name: "Claire",
          desc: "Claire was invited by John to her account. We only want her to answer a few quick questions and that's it."
        },
        {
          avatar: {
            src: "Paul.png"
          },
          name: "Paul",
          desc: "Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the app."
        },
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../../assets/images/avatars/' + pic)
    },
    goToPage(value) {
      this.$router.push({
        name: 'welcome',
        params: {
          user: value
        }
      });
    }
  }
}
</script>

<style lang="scss" src="./Start.scss"></style>
