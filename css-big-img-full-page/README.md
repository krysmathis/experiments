# Making a full page background image with content in the middle

## Basic Methodology:

### Container:
Your background image or color serves as a container. Set it's position as ```position: relative```
The content you want to display __inside__ of the container is ```position: absolute```. Then you can move the content section around using: ```top: 50%``` or other methods

#### Even better:
Turn the container into a flex box using ```display: flex```:
```css
    display: flex;
    justify-content: center;
    align-items: center;
```

## The HTML

```html
<html lang='en'>
<head>
  <meta charset='utf-8'>
  <title>untitled</title>
  <link rel='stylesheet' href='./styles.css'>
</head>
  <body>
    <nav></nav>
    <main class='main-content'>
      <div class="img-big black" id="top-container">
        <div class="img-big-content">
          <span class="img-big-content-textblock"><a href="#bottom-container">something about this place...</a></span>
        </div>
      </div>
      <div class="img-big blue" id="bottom-container">
          <div class="img-big-content">
            <span class="img-big-content-textblock"><a href="#top-container">something about this place...</a></span>
          </div>
        </div>
      <header></header>  
      <article></article>
    </main>
    <footer></footer>
  <script src='css-big-img-full-page.js'></script>
</html>

```

## The CSS
```css
body {
    margin: 0;
    padding: 0;
}

.img-big {
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    height: 100vh;
    width: 100%;
    
    /* Display the content in the middle of the div using flexbox*/
    display: flex;
    justify-content: center;
    align-items: center;


    /* background-image: url('homeBook.jpg');
    height: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .75;
    background-position: center; */
}

.img-big-content {
    position: absolute;
    text-align: center;
}

.img-big-content-textblock {
    text-align: center;
    color: white;
}

.black {
    background-color: black;
}

.blue {
    background-color: blue;
}
```
