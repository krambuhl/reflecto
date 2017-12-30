<template>
  <div class="Readme">
    <slot></slot>
  </div>
</template>

<script>
  export default { }
</script>

<style lang="postcss">
.Readme {
  padding-left: var(--padding);
  padding-right: var(--padding);

  & td {
    vertical-align: top;
  }

  & table code {
    color: var(--color-purple);
    font-family: monospace;
    font-size: 1em;
  }

  & > * {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }

  & > p:first-of-type {
    font-size: 1.5em;
    line-height: 1.35em;
  }

  & > * + * {
    margin-top: 1em;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    line-height: 1.4em;
    font-weight: 700;
  }

  & h1 { font-size: 2.4em; }
  & h2 { font-size: 2.0em; }
  & h3 { font-size: 1.7em; }
  & h4 { font-size: 1.4em; }
  & h5 { font-size: 1.3em; }
  & h6 { font-size: 1.2em; }
}
</style>
