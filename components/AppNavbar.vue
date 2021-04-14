<template>
  <header class="header">
    <div class="container">
      <div class="navbar navbar-expand-lg" :class="{'navbar-opened': isNavbarOpen}">
        <nuxt-link class="navbar-brand ml-n4" to="/">
          <img
            width="128px"
            src="~/assets/images/logo.svg"
            style="width: 193px; height: 76px"
          />
        </nuxt-link>

        <div
          id="collapsibleNavbar"
          class="collapse navbar-collapse justify-content-end text-center"
          :class="{show: isNavbarOpen}"
        >
          <div class="w-80 d-flex">
            <ul class="navbar-nav ml-auto mr-0 mr-lg-2 text-center text-lg-auto">
              <li class="nav-item">
                <a class="nav-link px-0" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-0" href="#">Documentation</a>
              </li>
              <li class="nav-item mb-3 mb-lg-0">
                <a class="nav-link px-0" href="#">About</a>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" class="btn btn-unlock" @click="handleUnlock">
              App - Soon
            </button>
          </div>
        </div>
        <div class="text-right d-lg-none d-block">
          <button
            class="navbar-toggler"
            :class="{'navbar-toggler-active': isNavbarOpen}"
            type="button"
            @click="handleNavBar"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },

  watch: {
    $route() {
      this.isNavbarOpen = false;
    },
  },
  methods: {
    handleUnlock() {
      this.$nuxt.$emit("openUnlockPopup");
    },

    handleNavBar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      if (this.isNavbarOpen) {
        document.getElementById("__nuxt").style.overflow = "hidden";
        document.getElementById("__nuxt").style.touchAction = "none";
      } else {
        document.getElementById("__nuxt").style.overflow = "auto";
        document.getElementById("__nuxt").style.touchAction = "auto";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 75px;
}

.btn-unlock {
  background: $dark;
  border-radius: 15px;
  color: $light;
  font-size: 24px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  padding: 0 38px;
  position: relative;

  &:hover {
    background: linear-gradient(111.1deg, #bee33a 1.92%, #eaee23 96.41%);
    color: $dark;
  }
  &:active {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.67) 0%,
        rgba(255, 255, 255, 0.73) 16.94%,
        rgba(255, 255, 255, 0.402773) 38.62%,
        rgba(255, 255, 255, 0) 100%
      ),
      #fffee2;
    color: $main_color;
    border-radius: 15px;
    &::before {
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      background: linear-gradient(111.1deg, #bee33a 1.92%, #eaee23 96.41%);
      content: "";
      z-index: -1;
      border-radius: 15px;
    }
  }
  &:focus {
    box-shadow: none;
  }
}
.nav {
  &-link {
    color: $dark;
    font-size: 24px;
    margin-bottom: 38px;
    margin-right: 0;
    @include media-breakpoint-up(lg) {
      margin-right: 38px;
      margin-bottom: 0;
    }
  }

  &bar {
    margin: 0 auto;
    max-width: 1440px;
    position: relative;

    @include media-breakpoint-up(lg) {
      border-bottom: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-brand {
      padding: 0;
      top: 27px;
      margin-right: 0;

      @include media-breakpoint-up(lg) {
        position: static;
      }
    }

    &-nav {
      width: 100%;
      margin-top: 50px;

      &.nav-item :nth-child(-n + 4) {
        @include media-breakpoint-up(lg) {
          margin-right: 20px;
        }
      }

      @include media-breakpoint-up(lg) {
        border-top: 0;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
        width: auto;
      }
    }

    &-collapse {
      background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.67) 0%,
          rgba(255, 255, 255, 0.73) 16.94%,
          rgba(255, 255, 255, 0.402773) 38.62%,
          rgba(255, 255, 255, 0) 100%
        ),
        #fffee2;
      bottom: 0;
      display: block;
      flex-direction: column;
      height: 100%;
      left: 110%;
      opacity: 0;
      position: fixed;
      right: 0;
      text-align: center;
      top: 80px;
      transition: 0.5s;
      z-index: 999;

      @include media-breakpoint-up(lg) {
        background: transparent;
        flex-direction: row;
        height: 88px;
        opacity: 1;
        padding: 0;
        position: static;
      }

      &.show {
        left: 0;
        opacity: 1;
      }
    }

    &-toggler {
      cursor: pointer;
      display: block;
      height: 17px;
      margin-left: auto;
      outline: 0;
      padding: 0;
      position: relative;
      transform: rotate(0deg);
      transition: all 0.5s ease-in-out 0s;
      width: 17px;
      z-index: 9999;

      @include media-breakpoint-up(lg) {
        display: none;
      }

      &-icon {
        background: $success;
        border-radius: 9px;
        display: block;
        height: 2px;
        left: 0;
        opacity: 1;
        position: absolute;
        transform: rotate(0deg);
        transition: all 0.25s ease-in-out 0s;
        width: 16px;

        &:first-child {
          top: 0;
        }

        &:nth-child(2) {
          top: 6px;
        }

        &:nth-child(3) {
          top: 12px;
        }
      }

      &-active {
        & .navbar-toggler-icon {
          &:first-child,
          &:last-child {
            position: absolute;
            top: 7px;
            transform: rotate(45deg);
          }
          &:last-child {
            transform: rotate(-45deg);
          }
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
