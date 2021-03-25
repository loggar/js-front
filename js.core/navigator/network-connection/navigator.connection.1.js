console.log(navigator.connection.effectiveType); // 4G

function onConnectionChange() {
  const { rtt, downlink, effectiveType, saveData } = navigator.connection;

  console.log(`Effective network connection type: ${effectiveType}`);
  console.log(`Downlink Speed/bandwidth estimate: ${downlink}Mb/s`);
  console.log(`Round-trip time estimate: ${rtt}ms`);
  console.log(`Data-saver mode on/requested: ${saveData}`);
}

navigator.connection.addEventListener("change", onConnectionChange);

switch (connectionType) {
  case "4g":
    return <Video src={videoSrc} />;

  case "3g":
    return <Image src={imageSrc.hires} alt={alt} />;

  default:
    return <Image src={imageSrc.lowres} alt={alt} />;
}
