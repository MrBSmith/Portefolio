<template>
  <transition name="back-to-top-fade">
    <a
      href="#navbar"
      class="vue-back-to-top"
      :style="`bottom:${this.bottom};right:${this.right};`"
      v-show="visible">
      <slot>
        <div class="default">
          <span>
            {{ text }}
          </span>
        </div>
      </slot>
   </a>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Back to Top',
    },
    visibleoffset: {
      type: [String, Number],
      default: 500,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '70px',
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) {},
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll () {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      window.smoothscroll()
      this.$emit('scrolled')
    }
  },
}
</script>

<style lang= "css">
   a{
      text-decoration: none !important;
   }
   .back-to-top-fade-enter-active,
   .back-to-top-fade-leave-active {
   transition: opacity .7s;
   }
   .back-to-top-fade-enter,
   .back-to-top-fade-leave-to {
   opacity: 0;
   }

   .vue-back-to-top {
   cursor:pointer;
   position: fixed;
   z-index: 1000;
   text-decoration: none;
   }

   .vue-back-to-top .default {
   background-color: #e6a119;
   border-radius: 7px;
   color: var(--dark-color);
   height: 40px;
   line-height: 40px;
   text-align: center;
   font-size: 1.4rem;
   width: 190px;
   }

   .vue-back-to-top .default span{
   color: var(--text-main-color);
   }

   .vue-back-to-top--is-footer {
   bottom: 50% !important;
   position: absolute;
   transform: translateY(50%);
   }
</style>
