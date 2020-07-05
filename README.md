# Address book app

This is a fictional address book app, where you can search for users addresses and
personal information. The app should display a list of users for the end user to browse and
get personal information for a selected user, where you can also select via a settings page
which nationalities you’re interested in.

## Demo

Countinous deployment has been setup.

In order to see the app alive open the PR:

https://github.com/daniboomerang/address-book-app/pull/1

And visit the latest deployment URL of the PR:

https://deploy-preview-1--address-book-app.netlify.app/

### Resopnsiveness

The app is fully responsive and has been tested for mobile devices (from the iPhone 5 to the iPad pro).

## Main libraries used

The following packages have been used:

- TailwindCSS: Light utility-first CSS framework.
- Fortawesome: Icons and typefaces.
- React router.
- React redux.
- Axios.
- React testing library, Jest & Enzyme: For testing.
- React infinite scroll component.
- React modal.
- ESLinter & prettier.

## Installation

To install, clone the repository to your preferred location on your machine:

`git clone https://github.com/daniboomerang/address-book-app.git`

Next, cd to the directory of the project.

`$ cd address-book-app`

Next, install the dependencies for the project using the following command:

`$ yarn install`

 then

`$ yarn start`

Runs the app in the development mode.
Open [localhost](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`yarn test -u`

Launches the test runner in the interactive watch mode.
It also update the snapshots.
See the section about running tests for more information.

`yarn lint`

Launches the linter.

`yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!
