<script>
export default {
  template: '<span>{{msg}}</span>',
  props: ['msg'],
  created () {
    console.log("Created")
  }
}
</script>
