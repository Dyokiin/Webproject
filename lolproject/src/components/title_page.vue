<template>
  <div class="title">
    <h1>{{ msg }}</h1>
    <h3>League Champs Inions</h3>
    <h2>Need infos on a champ ? You can also take our quick test to dertermine what your next main will be !</h2>
  </div>
</template>

<script>
export default {
  name: 'TitlePage',
  props: {
    msg: String
  }
}
</script>


<style scoped>
h3 {
  font-size: 50px;
  margin: 40px 0 0;
}
h2 {
  color: #a634e8;
}
</style>
