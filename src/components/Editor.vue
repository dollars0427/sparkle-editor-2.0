<template>
  <div class="editor-wrapper">
    <textarea id="editor" :style="style"></textarea>
  </div>
</template>

<script>
import Themes from '../default_themes.json';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Editor',
  data(){
    return {
      'currentTheme': '',
      'style': '',
    }
  },
  methods: {
    loadDefaultTheme(){
      const defaultTheme = Themes['themes'][0];
      const bgImage = defaultTheme.imageName;
      const textColor = defaultTheme.fontColor;

      this.currentTheme = defaultTheme['id'];
      this.style = `background-image: url('background/${bgImage}');color: ${textColor}`;
    },
  },
  mounted() {
    this.loadDefaultTheme();
  },
  computed: mapState({
    editor: state => state.editor,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editor{
  height: 90vh;
  padding-left: 10px
}
</style>
