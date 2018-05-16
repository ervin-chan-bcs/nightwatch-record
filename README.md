# Nightwatch.js video screen recording via ffmpeg
Modified version of [nightwatch-record](https://github.com/imarenco/nightwatch-record) made to work for Windows with [ffmpeg](https://www.ffmpeg.org/) and [screen-capture-recorder](https://github.com/rdp/screen-capture-recorder-to-video-windows-free).

Record videos of [Nightwatch.js](http://nightwatchjs.org/) test sessions.

## Installation

Using npm:
```
npm i -D nightwatch-record-windows
```

Add to your nightwatch.conf.js:
```
videos: {
                fileName: "nightwatch", // Required field
                nameAfterTest: true,
                format: "mp4",
                enabled: true,
                deleteOnSuccess: false,
                path: SCREENSHOT_PATH,
                fps: 15,
                input: "video=screen-capture-recorder",
                videoCodec: "mpeg4"
              }
```

## License
Released under the [MIT license](https://opensource.org/licenses/MIT).