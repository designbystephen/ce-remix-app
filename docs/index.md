# Remix App


# Task
- define the task here

## Observations
- There was special wording about formatting
  - Make sure to use current standard styleguide in my react-starter
- I did not see any mention of consuming APIs
  - There might be patterns to do this from within Remix itself on the server side
- I know we can create some mongo collections WITHOUT having db connection 
  - I would like to do this early on in the project and move to something more substantial
  - There would be some fact-finding that would need to happen with collections and typescript

# Notable Changes
- unsure where test script and support is for the default react app template with remix
- yarn version 3 with pnp
- typescript plugin and vscode sdk support

## Jest
- setting up jest with remix
    - https://www.sonng.dev/blog/220612-jest-remix
- configuring jest for typescript
  - https://jestjs.io/docs/getting-started#using-typescript
- using docblock option with jestdom
  - jest-environment-jsdom

## Important Steps
- set vscode typescript version to use the workspace version

# TODO
- eslint preferences
- editor configurations
- storybook
- recommended extensions
- link to https://remix.run/docs

# Improve
- add consistent type imports to react-starter
- will likely fork react starter or create an entirely different repo just for remix
  - issues with jest/babel/typescript configurations on quick start


# Approach

## Unknowns
- needed to look into remix as I have not used it yet in my career
- there may be potential blockers for JSS in an isomorphic environment 


## Knowns
- knew I wanted to use JSS
- knew I wanted to use Typescript
- knew I wanted to setup TDD patterns immediately
- knew I wanted to setup documentation patterns with storybook
- knew I wanted to split the application up at domain levels
  - user was the only domain
- knew I wanted to follow SOLID principles
- knew I wanted to also follow
  - extensibility
  - YAGNI
  - SoC
- knew I wanted to follow React best practices
  - containers and components
  - code splitting
- knew I wanted to follow best practices with SPAs
  - data down / actions up
- knew I wanted to make the approach adaptable
  - could be micro front-end

# UI/UX

This was my inspiration for a modern looking login/create user screen:
- https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI

