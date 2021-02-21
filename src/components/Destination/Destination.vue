<template>
  <div class="destination">
    <img class="company-logo" src="../../assets/images/logos/littledata-logo.svg" alt="">
    <h1>Choose Destination</h1>
    <h3>Please select the destination that you'd like to connnect your store with</h3>
    <div class="external-link-box">
      <a href="https://analytics.google.com" target="_blank">
        <img src="../../assets/images/logos/ga-logo.svg" alt="">
        <p>Google<br>Analytics</p>
      </a>
    </div>
    <div class="external-link-box float-right">
      <a href="https://segment.com/" target="_blank">
        <img src="../../assets/images/logos/segment-logo.svg" alt="">
        <p>Segment</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Destination',
}
</script>

<style lang="scss" src="./Destination.scss"></style>
