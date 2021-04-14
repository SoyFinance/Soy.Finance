<template>
  <div class="container">
    <div class="icon-block-size">
      <h1 class="title font-beautiful">
        Join our<span class="text-success"> Community!</span>
      </h1>
      <div class="d-flex justify-content-center flex-column flex-lg-row">
        <div class="first-block">
          <a
            href="https://t.me/Soy_Finance"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded card-block text-center"
          >
            <img
              src="~/assets/images/icon/telegram.svg"
              class="card-block-img mb-3"
              style="width: 57px"
            />
            Telegram
          </a>
        </div>

        <div class="second-block justify-content-md-around">
          <a
            class="rounded card-block text-center"
            href="https://twitter.com/Soy_Finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/icon/twitter.svg"
              class="card-block-img mb-3"
              style="width: 57px"
            />
            Twitter
          </a>
          <a
            class="rounded card-block text-center"
            target="_blank"
            href="https://www.reddit.com/r/Soy_Finance/"
          >
            <img
              src="~/assets/images/icon/reddit.svg"
              class="card-block-img mb-3"
              style="width: 54px"
            />
            Reddit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  font-size: 45px;
  line-height: 75px;
  text-align: center;
  letter-spacing: 0.02em;
  color: $dark;
  margin-bottom: 25px;
  @include media-breakpoint-up(lg) {
    margin-bottom: 41px;
  }
}

.icon-block-size {
  margin-bottom: 82px;
  text-align: -webkit-center;
  @include media-breakpoint-up(lg) {
    margin-bottom: 182px;
  }
}

.first-block,
.second-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }
}

.card-block {
  padding: 34px;
  background: $dark;
  width: 192px;
  margin-bottom: 32px;
  font-size: 25px;
  color: $main_color;
  margin-top: 15px;
  text-decoration: none;
  margin-right: 0;

  @include media-breakpoint-up(lg) {
    margin-right: 80px;
  }
  &:hover {
    background: linear-gradient(111.1deg, #bee33a 1.92%, #eaee23 96.41%);
    color: $dark;
  }
}
.second-block {
  :last-child {
    @include media-breakpoint-up(md) {
      margin-right: 0;
    }
  }
}
.rounded {
  border-radius: 15px !important;
}
</style>
