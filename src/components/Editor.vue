<template>
  <div class="editor">
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';

export default {
  name: 'Editor',
  components: {
    EditorContent,
  },
  methods: {
    ...mapActions(['updateEditor'])
  },
  mounted() {
    const editor = new Editor({
      content: '<p>Sparkle Editor 2.0 is coming !</p>',
      extensions: [
        StarterKit,
      ],
    });
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
}
</style>
