<template>
  <main class="container mb-0">
    <h1 class="d-md-none text-capitalize text-center">{{ heading }}</h1>
    <h1 class="d-none d-md-block display-1 text-capitalize text-center">
      {{ heading }}
    </h1>
    <img
      class="img-fluid mx-auto d-block m-2"
      src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/iphone-spinner.png?alt=media&token=5e45d79c-e545-4d2a-8b14-2054dab04b96"
      alt="Spinner"
    />
  </main>
</template>

<script>
export default {
  name: "Loader",
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 4000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 4000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 4000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
