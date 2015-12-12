# apiNG-design-deadwood
Youtube Video Design for [apiNG](https://github.com/JohnnyTheTank/apiNG)

## Demo
[**Demo**](https://rawgit.com/JohnnyTheTank/apiNG-design-deadwood/master/demo/)

## supported apiNG models
- **`video`** (only youtube)

## documentation
full documentation coming soon

### sample
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