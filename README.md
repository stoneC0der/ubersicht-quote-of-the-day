# Quote of the Day

This a widget for [Übersïcht](http://tracesof.net/uebersicht/) that displays a random quote from [They Said So Quotes API](https://theysaidso.com/api/)

## Installation

Download the quote-of-the-day.widget.zip and unzip it to your widgets folder (default: ~/Library/Application Support/Übersicht/widgets).

## Preview

![quote-of-the-day.widget preview](https://github.com/stoneC0der/ubersicht-quote-of-the-day/blob/dev/screenshot.png?raw=true)

## Settings

### Refresh time

A request is made every 6 hours, this is because I am not connected all day long so this make sure that the quote is updated everyday. You might want to set it to higher number

```js
    // the refresh frequency in milliseconds
    // 21600000 = every 6h Default
    // 43200000 = every 12h
    // 86400000 = every 24h / day
    export const refreshFrequency = 21600000;
````

### Quote

The plugin use the public API no need for a key, the is retrieve from a category. The default is **Funny**

### categories

A category is automatically set when the widget is automatically refreshed.
Edit the file to set your desired categories
here are the predefined categories: **"death", "love", "life", "funny", "inspire", "art"**

```js
    // Add/remove categories here, make sure that those categories exist on the endpoint 
    // if you don't know how to, I suggest removing instead of adding
    const categories = ["death", "love", "life", "funny", "inspire", "art"];
````

### Appearance

For white backgrounds, uncomment this line in the css class, increase the alpha to your liking:

```css
    background: rgba(0,0,0,0.5) /*will be dark enough to be readable.*/
````

**Note**: There is now minimum background color by default.

```css
    .quote-of-the-day::before 
    {
        background: rgba(9, 10, 13, 0.10);
    }
````

If you use a different background for each mode like Darkish wallpaper when in Dark mode the text-color will be white & the opposite when using a white like wallpaper in Light mode

uncomment this part to enable it, if you made your quote background a lot more darker you probably don't need to.

```css
    /*@media(prefers-color-scheme: light) {
        color: #444444;
    
    .title {
        color: #888888;
    }
    .author {
        color: #666666;
    }
    }*/
````

Edit the position by changing these settings:

```css
    bottom: 100px;
    left: 0; 
````

To change the width of the container change this part according to your need

```css
    .quote-of-the-day-container {
        margin: 0 auto;
        max-width: 960px;// no make it wider or narrowed
    }
````

#### Quote image

Comment line ** to hide the image

```html
    <img className="image" src={image}/>
````

## Disclaimer

I am not a react developer so, the widget might not be optimize I just edit the default file and throw in some Vanilla JavaScript.
I use localStorage to limit the amount of request to the end point and to have the quote even when the network is down.

## To Do

- [x] Automatically set a random category every day
- [] Add a button (Hidden) somewhere on the widget to show a drop down list on click and manually set the category in interactive mode
- [] Errors handling
- [] A fancy design (maybe) 😃
