<template>
  <footer class="bg-dark">
    <div id="footer" class="container px-5">
      <div class="row">
        <div class="col-md-12 col-xl-5">
          <p class="title font-regular-bold">Safety On Yields</p>

          <div class="d-flex align-items-baseline">
            <h4 class="text-white mt-lg-0 mt-3 mb-3 mr-3 font-beautiful">
              <span class="text-success">Soy.</span>Finance
            </h4>
            <span class="copyright-text">© 2021</span>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-2 mb-0">
          <p class="title font-regular-bold">Stablecoin</p>
          <div class="section-size">
            <ul class="pl-0">
              <li class="text my-3">
                <a
                  href="https://soyfinance.netlify.app/#/swap"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-link"
                  >Exchange</a
                >
              </li>
              <li class="text my-3">
                <a
                  href="https://soyfinance.netlify.app/#/farms"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-link"
                  >Yield Farm</a
                >
              </li>
              <li class="text my-3">
                <a
                  href="https://callisto.network/#ecosystem"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-link"
                  >Soy Token</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-2 mr-0 mr-xl-5">
          <p class="title font-regular-bold">Documentation</p>
          <div class="section-size">
            <ul class="pl-0">
              <li class="text my-3">
                <a
                  class="text-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://callisto.network/#coreteam"
                  >Soy.Finance Team</a
                >
              </li>
              <li class="text my-3">
                <a class="text-link" href="https://github.com/SoyFinance/" target="_blank">Github</a>
              </li>
              <li class="text my-3">
                <a
                  class="text-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://callisto.network "
                  >Callisto Network</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-2">
          <p class="title font-regular-bold">Our Social Media</p>
          <div class="section-size">
            <ul class="pl-0">
              <li class="text my-3">
                <a
                  href="https://t.me/Soy_Finance"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-link"
                  >Telegram</a
                >
              </li>
              <li class="text my-3">
                <a
                  href="https://www.reddit.com/r/Soy_Finance/"
                  target="_blank"
                  class="text-link"
                  >Reddit</a
                >
              </li>
              <li class="text my-3">
                <a
                  href="https://twitter.com/Soy_Finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-link"
                  >Twitter</a
                >
              </li>
              <li class="text my-3">
                <a
                  href="https://www.facebook.com/Soy.Finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-link"
                  >Facebook</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.input.value === "") console.log("error");
      console.log(this.email);
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  line-height: 32px;
  color: $main_color;
  margin-bottom: 12px;
  margin-top: 30px;
  @include media-breakpoint-up(xl) {
    margin-top: 56px;
  }
}

.btn {
  &-arrow {
    padding: 6px 17px;
    border-radius: 15px;
  }
}

.input-style {
  border: 2px solid $main_color;
  box-sizing: border-box;
  border-radius: 15px;
  background: transparent;
  padding: 6px 13px;
  margin-bottom: 45px;
  color: $main_color;
  width: 60%;
  font-size: 16px;
  @include media-breakpoint-up(xl) {
    width: 57%;
  }
  &::placeholder {
    color: $light;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
}

.copyright-text {
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: $light;
  opacity: 0.5;
}

.text {
  text-decoration: none;
  list-style: none;

  &-link {
    color: $light !important;
    font-size: 18px;
    text-decoration: none;
  }
}
.section-size {
  margin-bottom: 30px;
  @include media-breakpoint-up(md) {
    margin-bottom: 100px;
  }
}
.soon {
  :hover {

  }
}
</style>
