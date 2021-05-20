# Changelog

## 0.2.1

- Fixed quote category being change when the widget is manually refreshed when using Ūbersicht refresh all widget. (*This will persist the category until the refreshFrequency time is reached,if you want the old behavior refer to .jsx file to disable the new behavior*);

## 0.2.0

- A random category will now be set base on the refreshFrequency you've set (thanks to [@faisal3389](https://github.com/faisal3389))

## 0.1.2

- Improved position (The widget should now be center on every display sizes)
- Quote infos are now store as JSON string in the localStorage

***you might want to delete the previously set values***

*Here the step for **none developers:***

- On the menubar select Ūbersicht
- Click on Show Debug Console
- A new window will open
- On the tab bar after the title bar (**Web inspector**), locate **Storage** and select it
- Look for **Local Storage — 127.0.0.1** in the sidebar
- Delete the keys named **author,quote, background, quote_title** by selecting each and pressing the key delete on your keyboard
- removed p tags to use appropriate tags
- Added (**" "**) around the quote & a (**—**) on the left author (based on **MDN** documentation)
- Added support for System color scheme

*If you use a different background for each mode like Darkish wallpaper when in Dark mode the text-color will be white & the opposite when using a white like wallpaper in Light mode*
***Disable by default Check the README.md file to set it up***

## 0.1.1

- Removed line separator
- Improved quote display
- set a minimum default background

## 0.1.0

- Initial release (beta)
