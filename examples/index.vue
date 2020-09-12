<template>
  <div id="wrapper">
    <svg viewBox="0 0 300 300">
      <path :d="arc(args1)" fill="#f60" />
    </svg>
    <svg viewBox="0 0 300 300">
      <path :d="arc(args2)" fill="#f60" fill-rule="evenodd" />
    </svg>
    <svg viewBox="0 0 300 300">
      <path :d="arc(args3)" fill="#f60" />
    </svg>
    <svg viewBox="0 0 300 300">
      <path :d="arc(args4)" fill="#f60" fill-rule="evenodd"  />
    </svg>
  </div>
</template>

<script>

import arc from '../index';

export default {
  data() {
    return {
      args1: {
        x: 150,
        y: 150,
        r: 100,
      },
      args2: {
        x: 150,
        y: 150,
        R: 100,
        r: 80,
      },
      args3: {
        x: 150,
        y: 150,
        r: 100,
        start: 100,
        end: 360,
      },
      args4: {
        x: 150,
        y: 150,
        R: 100,
        r: 80,
        start: 300,
        end: 150,
      },
    };
  },
  methods: {
    arc(opt) {
      return arc(opt);
    },
  },
  mounted() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 300 300');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', '#f60');

    svg.appendChild(path);

    const d = arc({
      x: 150,
      y: 150,
      R: 100,
      r: 80,
      start: 100,
      end: 200,
    });
    path.setAttribute('d', d);

    path.setAttribute('fill-rule', 'evenodd');

    const dom = document.getElementById('wrapper');
    dom.appendChild(svg);
  },
};
</script>

<style>
svg {
  float: left;
  width: 300px;
}
</style>
