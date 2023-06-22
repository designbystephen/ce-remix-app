# Coding Challenge - Notes

## Challenge Details

For this challenge, you will need to create a user registration form for a website that has 4 fields:

- First name
- Last name
- email address
- desired password

This form should be implemented with Remix.js and should write back to a MongoDB collection. The form should implement some basic field validation. Styling the form is completely up to you, you can choose how you want to theme the page.

Your solution will be evaluated by the following:

- Comments in code explaining what the functions do and if they accept and arguments.
- Code is formatted correctly in accordance with best practices.
- Documentation explaining the logic behind the design of the code and any assumptions made.
- Code base includes a README file explaining what the code is and what it is used for.
- Styling of the form, does it look and feel like a modern web form
- Does the code run and does it meet the desired behavior?

## Observations

- Specific mention of formatting
  - There is linting, pretty formatting and husky hooks setup for this project
  - This is based on my own react-starter repo
- There was not any mention of consuming APIs
  - I made sure to follow best practices and utilize Remix loaders, actions, and relevant hooks
- Field validation can be done on server side with Remix

## Assumptions

- Even though I don't necessarily agree with the application architecture choices of using a homespun db **I am ok to proceed** knowing that this is a coding challenge as long as I provide alternatives
- I should use Remix to handle request logic without an API
  - This means I can't show off react-query (sad face emoji)
- I should use client side validation in addition to server side validation
  - **DRY** principles in practice!
- I can treat the "user registration" form as a self service "signup" form
- The registration page is the major functionality of the app
  - I should redirect users there from index
  - I should use a success page to "prove" the data was saved to a database
- I would not need to deploy this app anywhere as we can run it locally for the code evaluation

## Approach

- The signup page allows users to enroll for a totally made up "education.io" website
  - I think it was how much learning I did on this project (Remix being new to me) and seeing `{children}` made me think about my kids and the education issue
- Validation happens both "in real time" when interacting with the form and when the form is submitted and picked up in the action method
  - Yup and Typescript made this easy
- The success page shows that the user was created as it reads from the database to find that user by id
  - Better patterns exist for this, but I wanted to close the loop for the user
- I chose to use an "in memory" MongoDB when testing, and if desired for a local dev environment
  - Being able to test the data locally is something that I wanted to do for this project so that others could interact with it
  - You can swap this out with a real MongoDB connection (follow the readme)
  - I tested on both, and Mongoose makes this super simple
- I chose to demonstrate some concepts I talked about during the technical interview and provide some useful examples for Keven and Jason in particular
  - Including JSS, TypeScript, react-hook-form, MUI and Yup
  - I will most likely change my TSS/JSS preference to use Emotion or Tailwind for other projects
- I followed best practices for Remix while adding some more desirable coding from React and elsewhere
  - **SoC** (separation of concern) by using domain (sometimes called entity) based file structure
  - **Composition over inheritance** functional component structure and hooks
  - **Pure Components** via Container and component patterns
- I love tests
  - I Used **TDD** throughout the entire process
  - Saved me from some headaches

## Recommendations to be Production Ready

- If I were to do something in production I would ask a ton of questions and figure out what the scope is
- Use AWS Cognito and OAuth to CRUD and store user account information
  - I prefer to use trusted, highly available, resilient and tested by millions as opposed to something created in house
- I would have a User domain or entity for storing user data that is not profile related and I would most likely use AWS DocumentDB to achieve those results
  - Creating a user could then trigger Cognito user creation, verification emails, enrollment in mailing lists via event bus
  - There is quite a bit of value in creating this as a service behind a GraphQL API as well so users can be created for automated testing or migrated from existing systems easily
- I think having an OAuth service for a donor/user network would be beneficial for Stand Together
  - Users could authenticate using Stand Together credentials and interact with your patterns easier this way
- If AWS DocumentDB were the only thing available I would also make sure to encrypt the user data at rest which is easy to configure

## Known Issues

- I was not able to stop the initial style flicker issue that likely caused by using the emotion/JSS together
  - This can rarely cause an "insertStyle error" issue when making changes and live reloading takes place
