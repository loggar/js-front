# Prioritize resources in the browser

`<link rel="preload" />` informs the browser that a resource is needed as part of the current navigation, and that it should start getting fetched as soon as possible.

`<link rel="preconnect" />` informs the browser that your page intends to establish a connection to another origin, and that you'd like the process to start as soon as possible.

`<link rel="prefetch" />` is somewhat different from `<link rel="preload" />` and `<link rel="preconnect" />`, in that it doesn't try to make something critical happen faster; instead, it tries to make something non-critical happen earlier, if there's a chance.
