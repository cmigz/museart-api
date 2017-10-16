![alt text](https://i.imgur.com/515HBgb.png "MuseArt Logo")
### By Christian Mignacca

## Introduction

Welcome to the repository for the front end client of my capstone project during my time at GA.  I proudly present to you MuseArt.  A website where people can upload drawings inspired by the songs they love.

In my free time, I've always enjoyed drawing what my mind would visualize when listening to a song, hence the idea for MuseArt.  What a wild ride this course, and this project in particular was.

Being my final project I wanted to use everything I've used in projects past but really wanted to perfect all the pieces I hadn't when submitting them.  This project, in particular, I plan to really continue to work.

## Related Links

- **Deployed Client:** https://cmigz.github.io/museart-client
- **Client Repository:** https://github.com/cmigz/museart-client
- **Herou Deployed:** https://thawing-gorge-11843.herokuapp.com

## Database ERD

![alt text](https://i.imgur.com/qm0MiDG.jpg "ERD V1")

## API routes

|         Action        | Method |          URL          |   Controller Action   |
|:---------------------:|:------:|:---------------------:|:---------------------:|
|      User Sign Up     |  POST  |        /sign-up       |      users#signup     |
|      User Sign In     |  POST  |        /sign-in       |      users#signin     |
|     User Sign Out     | DELETE |     /sign-out/:id     |     users#signout     |
|  User Change Password |  PATCH |     /sign-out/:id     |     users#signout     |
|     Create Drawing    |  POST  |       /drawings       |    drawings#create    |
|    Get All Drawings   |   GET  |       /drawings       |     drawgins#index    |
|    Delete A Drawing   | DELETE |     /drawings/:id     |    drawings#destroy   |
| Get A User's Drawings |   GET  |   /drawings/:userId   | drawings#userDrawings |
|    Update A Drawing   |  PATCH | /drawings/:userId/:id |    drawings#update    |

## Installation Instructions

If you would like to fork/clone this repository simply run `npm install` from within your local directory to install all dependencies.

## Planning Process and Approach

While planning this process I went back and forth with quite a few ideas of how to approach this project.  React? Rails and PSQL or Express and Mongo???

When I really factored the time in to complete and my comfort level in the technologies I realized for what I wanted to do my best bet was to use a simple front end with an API built with express.

I knew there was much more being a minimum viable product I wanted to do with this site so I decided that was the way to go because it would give me the most flexibility.

I began with building out the back end and testing all my CRUD functionality prior to starting on the back end.  Once I was happy with those results I started the work on the front end.

With the front end, I started with the basics, get log in and all user actions in and working.  From their, I built the skeleton of a UI to be able to visualize/navigate the next steps which were building in access and rendering of user's drawings

Once that process was complete I began styling and incorporating error and success handlers for the UI.  The final stretch was cycling between styling and UI interactions for the user.  Had I not broken my laptop halfway through the project work time there is much more Id have done for the presentation.

## Technologies Used

- **Express.js:**
  - Built essentially the entirety of this API using JavaScript and Express.js
  - Following the MVC model, I used mongoose to define models and set up the controller actions and routes for each action.
  - Tested each action using CURL scripts prior to moving on.
- **MongoDB:**
  - The NoSQL database I utilized for this project.
  - I went with Mongo due to its ability to easily change without causing any issue.
  - I know there will be a lot I want to do in a short time with this project so figured make DB changes as simple as possible.

  ## Yet to be Solved Issues

  - Allow user to create a username on sign up
  - Have comments for users to make on others/own drawings
  - Include more data fields for drawings
