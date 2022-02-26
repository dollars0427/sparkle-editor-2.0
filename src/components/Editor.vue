<template>
  <div class="editor" :style="style">
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Themes from '../default_themes.json';

import { mapState, mapActions } from 'vuex';
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';

export default {
  name: 'Editor',
  components: {
    EditorContent,
  },
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
    ...mapActions(['updateEditor'])
  },
  mounted() {
    const editor = new Editor({
      content: '<p>Sparkle Editor 2.0 is coming !</p>',
      extensions: [
        StarterKit,
      ],
    });
    this.loadDefaultTheme();
    this.updateEditor(editor);
  },
  beforeUnmount() {
    this.editor.destroy();
    this.updateEditor(editor);
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
