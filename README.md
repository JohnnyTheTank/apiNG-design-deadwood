# apiNG-design-deadwood
[![Join the chat at https://gitter.im/JohnnyTheTank/apiNG](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/JohnnyTheTank/apiNG?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Youtube Video Design for [apiNG](https://github.com/JohnnyTheTank/apiNG)

## Demo
[**Demo**](https://rawgit.com/JohnnyTheTank/apiNG-design-deadwood/master/demo/)

## References
- [**sonymusic.de/videos**](https://sonymusic.de/videos) based on apiNG-design-deadwood

## supported apiNG models
- **`video`** (only youtube)

## documentation
_full documentation coming soon_

### sample usage
```html
<aping
    template-url="deadwood_template.html"
    model="video"
    order-by="position"
    order-reverse="true"
    payload-json="{'autoplay':1, 'iv_load_policy':3, 'loop':0, 'showinfo':0}"
    aping-youtube="[{'playlistId':'PLzm_lfByuAEF5RTM5j94TLrbbF4a9PBG4'}]">
</aping>
```

## dependencies
* [apiNG](https://github.com/JohnnyTheTank/apiNG)
* [apiNG-plugin-youtube](https://github.com/JohnnyTheTank/apiNG-plugin-youtube)
* [angular-youtube-embed](https://github.com/brandly/angular-youtube-embed)
* [OwlCarousel](https://github.com/OwlFonk/OwlCarousel)