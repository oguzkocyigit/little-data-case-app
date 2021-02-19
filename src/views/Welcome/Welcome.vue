<template>
  <div class="welcome-page-view">
    <div class="welcome-page-view__inner">
      <transition name="fade" v-if="activeStep === 1">
        <UserForm @continue="activeStep = 2"></UserForm>
      </transition>
      <transition name="fade" v-if="activeStep === 2">
        <Questions @back="activeStep = 1" @continue="activeStep = 3"></Questions>
      </transition>
      <transition name="fade" v-if="activeStep === 3">
        <Destination></Destination>
      </transition>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import Questions from "@/components/Questions/Questions";
import Destination from "@/components/Destination/Destination";


export default {
  name: 'Welcome',
  data() {
    return {
      activeStep: parseInt(this.$route.params.user),
    }
  },
  components: {UserForm, Questions, Destination},
}
</script>

<style lang="scss" src="./Welcome.scss"></style>
