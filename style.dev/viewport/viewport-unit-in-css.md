# Viewport units in CSS

refs:

- https://dev.to/nirazanbasnet/viewport-units-in-css-1bdj

Over the past few years, Responsive design has become quite a hot topic in the web design community. There are various frameworks which help to build responsive design faster. One of the ways is using Viewport percentage units or “Viewport Units” for short, a CSS3 property which helps you to automate some aspects of your responsive design.

Using viewport units, the size of specific elements can adapt to the varying size of a browser.

Instead of pixel, em or percentage values, you can use these settings:

vw: the percentage of the browser’s width
vh: the percentage of the browser’s height
vmin: the minimum percentage of browser’s height or width, the smallest value of both
vmax: the maximum percentage of the browser’s height or width, the smallest value of both

You may use these units in any CSS property that accepts values in px such as width, height, margin, font-size, etc. They will be recalculated by the browser on window resize or device rotation.

## Full Height of the page

Traditionally, we have been using height:100% to get the full height of the container to fit on the screen. We can obtain the same result with less code by using vh. This helps to scale an image to the height of the user’s screen. View demo in codepen. To see a difference, replace 100vh with 100% in the Codepen demo.

```scss
.image-container {
  height: 100vh;
  width: auto;
}
```

## Keeping an element shorter than the screen

```html
<div class="shortme">
  <p>
    She suspicion dejection saw instantly. Well deny may real one told yet saw
    hard dear. Bed chief house rapid right the. Set noisy one state tears which.
    No girl oh part must fact high my he. Simplicity in excellence melancholy as
    remarkably discovered. Own partiality motionless was old excellence she
    inquietude contrasted. Sister giving so wicket cousin of an he rather
    marked. Of on game part body rich. Adapted mr savings venture it or comfort
    affixed friends.
  </p>
  <p>
    Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had
    county. The use him without greatly can private. Increasing it unpleasant no
    of contrasted no continuing. Nothing colonel my no removed in weather. It
    dissimilar in up devonshire inhabiting.
  </p>
  <p>
    Spot of come to ever hand as lady meet on. Delicate contempt received two
    yet advanced. Gentleman as belonging he commanded believing dejection in by.
    On no am winding chicken so behaved. Its preserved sex enjoyment new way
    behaviour. Him yet devonshire celebrated especially. Unfeeling one provision
    are smallness resembled repulsive.
  </p>
  <p>
    Not him old music think his found enjoy merry. Listening acuteness dependent
    at or an. Apartments thoroughly unsatiable terminated sex how themselves.
    She are ten hours wrong walls stand early. Domestic perceive on an ladyship
    extended received do. Why jennings our whatever his learning gay perceive.
    Is against no he without subject. Bed connection unreserved preference
    partiality not unaffected. Years merit trees so think in hoped we as.
  </p>
  <p>
    Old education him departure any arranging one prevailed. Their end whole
    might began her. Behaved the comfort another fifteen eat. Partiality had his
    themselves ask pianoforte increasing discovered. So mr delay at since place
    whole above miles. He to observe conduct at detract because. Way ham
    unwilling not breakfast furniture explained perpetual. Or mr surrounded
    conviction so astonished literature. Songs to an blush woman be sorry young.
    We certain as removal attempt. Frankness applauded by supported ye
    household. Collected favourite now for for and rapturous repulsive
    consulted. An seems green be wrote again. She add what own only like.
    Tolerably we as extremity exquisite do commanded. Doubtful offended do
    entrance of landlord moreover is mistress in. Nay was appear entire ladies.
    Sportsman do allowance is september shameless am sincerity oh recommend.
    Gate tell man day that who.
  </p>
  <p>
    Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on
    suitable disposed do although blessing he juvenile in. Society or if excited
    forbade. Here name off yet she long sold easy whom. Differed oh cheerful
    procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter
    ability shyness article welcome be do on service. Why painful the sixteen
    how minuter looking nor. Subject but why ten earnest husband imagine sixteen
    brandon. Are unpleasing occasional celebrated motionless unaffected
    conviction out. Evil make to no five they. Stuff at avoid of sense small
    fully it whose an. Ten scarcely distance moreover handsome age although. As
    when have find fine or said no mile. He in dispatched in imprudence
    dissimilar be possession unreserved insensible. She evil face fine calm have
    now. Separate screened he outweigh of distance landlord.
  </p>
</div>
```

```scss
* {
  box-sizing: border-box;
}

hmtl,
body {
  margin: 0;
  padding: 0;
}

.shortme {
  max-height: 80vh;
  overflow-y: scroll;
  padding: 0 15px;
  border: 4px solid #ccc;
  margin: 16px;
  background: rgb(99, 98, 98);
  color: #fff;
}
```

## Scaling Text (Responsive text)

Using this technique it gives developers great flexibility when adjusting font sizes and they help to scale dynamically with the viewport size. For easy practice place a base font size in the root element, and then use a viewport unit on the root element’s font size, and scale with that.

```scss
html {
  font-size: 20px;
}

h1 {
  font-size: calc(100% + 5vw);
}
```

## Breaking out of the container

Viewport units make it possible to break outside of a containing element or elements. In scenarios where the CMS makes it difficult or impossible to alter our markup in an HTML template, using viewport units can achieve the desired result regardless of the markup. This technique won’t work in every scenario, but it’s a nice trick in some instances.

```scss
.container {
  max-width: 1024px;
  margin: 0 auto;
}

.breakout {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
}
```
