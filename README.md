# WiCS Website


### Set up
`npm install` for package installations

For any npm packaes that gives issues with dependencies, use `npm install package_name -f` to force the installation. 

Some important pacakges used - 
* bootstrap
* react-bootstrap
* react-reveal
* react-scroll
* gh-pages

### Steps to set it up from scratch
[Deploying a React App to GitHub Pages](https://github.com/gitname/react-gh-pages)

### Editing
If you want to make changes to the styling, make a module css file and import it into the page/component that you want to apply it to. Currently using react-bootstrap and some inline styling, so don't forget to remove those if you want to re-do your own styling.

To add more components to the website, add a new folder under src/components and include in the App.js file. 

To update events, there's a dummy data file in the events folder that you can make changes to.

### Saving and Deploying 
Run `npm run start` to run the app on your local setup

Run `npm run deploy` to deploy the project to gh-pages branch

Then push the code to Github to save your code on the master branch

And save it to github as usual
`git add []`

`git commit -m "[whatever changes you change]"`

`git push origin master`

NOTE: For this next part, you need to be logged in with the davis wics github account
1. Go to settings
2. Go to the Pages tab (located on the left) 
3. Set the custom domain to "wics.engineering.ucdavis.edu"
