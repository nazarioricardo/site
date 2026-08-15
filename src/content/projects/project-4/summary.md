# Remix by Remidi

Remix was an iOS app that made Remidi’s hardware accessible to non-professional musicians. It used Bluetooth to connect to Remidi Pro. Once connected, it was up to the user’s creativity to make cool sounds.

## Background

https://www.youtube.com/watch?v=lJjqT7zo5Qg&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fnazarioricardo.com%2F&embeds_referring_origin=https%3A%2F%2Fnazarioricardo.com

Remidi wanted to improve the visuals and performance of their mobile app,

Previously, the readability was difficult because the album art was stretched across the entire screen, and all the buttons were just icons over the image. It wasn’t clear which buttons were musical, and which were functional. I separated the UI into three sections, below the iOS navigation bar: The image, the soundboard, and the functional area. I also turned the image into a clear space for manipulating sound parameters.

Remix was also loading all assets—sound, and image—synchronously. Causing jittery animations on view transitions, and unresponsiveness for a moment. If the wrong track was selected, the user had to wait for all the assets to load before tapping back on the navigation bar and finding the correct track. This was fixed by loading files asynchronously and atomically.

The soundboard buttons were also loaded with PNG files. This would cause the visual and audio responses of the button tap to appear out of sync. I switched all icons to lighter SVG files. This also improved legibility by reducing visual pixelation and loading times using smaller files that scaled better on different screens.

You can check out some hardware demos!
