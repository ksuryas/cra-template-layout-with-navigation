This project provides a responsive web app with top bar, navigation links, main content area and bottom bar.  It also comes with additional goodies like icons and links for social media, placeholders for contact details (address, e-mail, phone numbers) etc.  

## Using the template

To create an app with this template, you can run:

### `npx create-react-app [app-name] --template cra-template-layout-with-navigation`

This will create a new react app with the name as app-name.  It will install all required dependencies also ("react","react-dom",      "react-router", "react-router-dom" and "react-scripts") <br />
Once you install, run  `npm start` to view it in the browser.  This will open the app at [http://localhost:3000/](http://localhost:3000/).

## Features of the template

Following are the features of this React Web App template.

### Core Application Structure

The created Web app will have a Tool Bar at the top, a main content section in the middle and a bottom bar.

#### Tool Bar
The Tool bar contains place holders for a Logo, Name of the WebApp, tagline for the Web App, e-mail, phone numbers and Social Media links (icons) for Facebook, Twitter, YouTube and Instagram.

The Tool bar also contains a menu section with place holders for 5 menu links.  If you need more menu items, you will need to customize the \src\components\UI\Layout\ToolBarWrapper\Toolbar\Navigation\NavigationItems\NavigationItems.module.css for increasing the number of grid items.  Also, you will need to update the \src\helpers\menuHelper and \src\helpers\navHelper files appropriately.

#### Main Content
The Main content section is rendered through the components in the \src\components\Content folder.  Each of the component corresponds to the corresponding menu item router link, as can be seen in the \src\helpers\navHelper file.  Essentially it renders an empty div and you are free to add any content you want to in each of these components.

#### Bottom Bar
The Bottom Bar comes with four sections - Contact Us section (for Physical Address), Email/Call Section, Social Media Section and Other Links (place holder for any other links that you may have in your application - for example a Terms & Conditions page etc).
The Bottom Bar also has a place holder for Copy Right statement.

### Responsive out of the box!!

The application renders fully responsive.  On the Mobile version, it will forego the TopBar contact details and social media icons and Menu display.  Instead a hamburger menu icon is provided and upon touching it, the menu opens up for navigation.

## `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Provide your valuable Feedback

I am only 12 years old and this is my first React Application Template.  So please be kind in your feedback.  You can send all your feedback to my e-mail - Surya.Kasibhatla@gmail.com! Thank you!