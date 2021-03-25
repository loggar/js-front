if (/\slow-2g|2g|3g/.test(navigator.connection.effectiveType)) {
  this.connection = "slow";
} else {
  this.connection = "fast";
}
