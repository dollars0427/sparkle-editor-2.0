<template>
  <div v-if="editor" class="editor-toolbar">
    <ul class="toolbar-list">
      <li class="toolbar-menu parent">
        Files
        <ul class="toolbar-submenu">
          <div class="toolbar-item">
            Create
          </div>
          <div class="toolbar-item">
            Open
          </div>
          <div class="toolbar-item">
            Save As
          </div>
        </ul>
      </li>
      <li class="toolbar-menu parent">Edit</li>
      <li class="toolbar-menu parent">Format</li>
      <li class="toolbar-menu parent">Themes</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Toolbar',
  computed: mapState({
    editor: state => state.editor,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editor-toolbar{
  border: 1px solid #ddd;
  margin-bottom: 30px;

  .ProseMirror{
    height: 90vh;
  }

  .toolbar-list{
    list-style: none;
    display: flex;
  }
  .toolbar-menu{
    margin-right: 20px;
  }
  .toolbar-submenu{
    display: none;
  }
}
</style>
