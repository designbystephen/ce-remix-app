# ce-remix-app

> Code evaluation for remix based app

<br />

Read about my process, assumptions and recommendations for a production ready enrollment app:

- [Notes](docs/index.md)

The Remix docs for this project can be found here:

- [Remix](docs/remix.md)

<br />

---

<br />

## Prerequisites

- Node.js > 14.0
- Latest Yarn

<br />

## Recommended

- Visual Studio Code (vscode)
- git bash (if on a Windows machine)

<br />

## Getting Started

<br />

### Quick Start

<br />

After cloning the repo, to your project folder:

- `$ cd ce-remix-app`

Its a good idea to install the dependencies:

- `$ yarn`

Start up the local dev remix server:

- `$ yarn dev`

### Advanced Setup

<br />

By default you can just run the application and interact with a local "in memory" MongoDB.
However, you can also specify a connection string in the `.env` of the project root to connect to **most** any MongoDB, DocumentDB.
After setting up some unit tests for the user model I went and created a free cluster on MongoDB Atlas and was able to use both for this project.

Checkout the `.env.example` in this project for details on how to do this.

<br />

## Running Tests

Run unit tests:

- `$ yarn test`

<br />

## Troubleshooting

If you run into issues with getting the module paths to be recognized in Visual Studio Code then make sure that you set the TypeScript version
to use the workspace version.

An easy way to do this is:
`cmd+shift+p` from a type script file and search for `TypeScript`
