# 14 Model-View-Controller (MVC): Tech Blog

### by Dan McKay

* This is the assignment for Week 14 of the Full Stack Coding Bootcamp as offered through UC Berkeley Continuing Education in partnership with edX. This ReadMe is currently a placeholder, as this is very much a work in progress still.

### Overview
* Dan's Tech Blog is a micro-blogging site that is intended as a demonstration of a social media site where users can sign-up, make posts, read other posts, edit and delete their own posts, and comment on others' posts.

### Deployed Site
* Heroku link: <a href=https://dans-tech-blog-9f4cea4a34ae.herokuapp.com/>Dan's Tech Blog</a>

### User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Screenshots
![image](https://github.com/DanielFMcKay/Tech-Blog/assets/123746582/ac2a3162-ecc6-4127-9800-92a253636156)

![image](https://github.com/DanielFMcKay/Tech-Blog/assets/123746582/de932c02-57dd-4d7e-8980-18bb2c17d0b7)

![image](https://github.com/DanielFMcKay/Tech-Blog/assets/123746582/913a6cb5-d327-4f07-ba7d-bb1d51a81149)

![image](https://github.com/DanielFMcKay/Tech-Blog/assets/123746582/e939725c-d3c6-46ce-8f89-521303022735)

### Installation
* Clone the repo to a local directory. After doing so, please navigate there in real time.
* enter the line "npm i" to install dependencies.
* enter the line "npm run seed" to seed the database.
* use "npm start" to start the app.
* you can open a local copy in your web browser at localhost:3001/
* sign up for an account, login, and click the Enter Blogs button to enter, or the New Blog button to write a new one.

### Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

### License
This application is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) [2023] Dan McKay
