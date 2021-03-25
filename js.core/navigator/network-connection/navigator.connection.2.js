switch (connectionType) {
  case "4g":
    return <Video src={videoSrc} />;

  case "3g":
    return <Image src={imageSrc.hires} alt={alt} />;

  default:
    return <Image src={imageSrc.lowres} alt={alt} />;
}
