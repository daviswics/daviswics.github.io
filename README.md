# WiCS Website


### Set up
`npm install` for package installations


### Editing
If you want to make changes to the styling, make a module css file and import it into the page/component that you want to apply it to. Currently using react-bootstrap and some inline styling, so don't forget to remove those if you want to re-do your own styling.

To update events, there's a dummy data file in the events folder that you can make changes to.


### Saving and Deploying 
Run `yarn build`

Run `yarn deploy` 

And save it to github as usual
`git add []`

`git commit -m "[whatever changes you change]"`

`git push`

NOTE: For this next part, you need to be logged in with the davis wics github account
1. Go to settings
2. Go to the Pages tab (located on the left) 
3. Set the custom domain to "wics.engineering.ucdavis.edu"
