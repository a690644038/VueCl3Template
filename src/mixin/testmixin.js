export const testmixin = {
  data() {
    return {
      aa:'11'
    }
  },
  mounted() {
    console.log(this.$store.state.testnumber);
  }
}
