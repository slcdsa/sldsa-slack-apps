<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sldsa/sldsa-slack-apps">
    <img src="/src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">SLDSA Slack App</h3>

  <!-- <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p> -->
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

A repository of the Slack app the SLDSA Technology Committee has developed for the SLDSA.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

We expect all contributors to:
- Have a basic understanding of web development concepts. (ie. JavaScript, ES6, NodeJS, etc.)
- Have been granted access to the Slack App secrets. (Learn more [here](https://slack.dev/bolt-js/tutorial/getting-started).)
- Follow the <a href="#contribution">rules for contribution</a>.


If you are developing locally, it is recommended to have the following software(s) installed:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. There are two ways to develop in this project: 

- (In the browser) The quick and easy way to begin developing for this project is to use GitHub Codespaces. 
GitHub Codespaces greatly simplifies the developer's workflow by setting up the 
development environment for you inside your browser.

To begin, simply click the green code button at the top of this repo,
select the codespaces tab, and create a codespace. Follow the steps to get the 
codespace set up.

- (Locally) To install and open locally, clone the repository:
   ```sh
   git clone https://github.com/slcdsa/sldsa-slack-apps.git
   ```

  Navigate into your cloned project:
   ```sh
   cd sldsa-slack-apps
   ```

  > *Note:* This project is set up to integrate well with VS Code, so we recommend using it as your IDE for this project. 
  >
  > If you use VS Code and want to utilize a dev container using Docker, you can follow instructions [here](https://code.visualstudio.com/docs/devcontainers/containers) to get it set up for your computer.
  
  Open the project in VS Code:
  ```sh
  code .
  ```

2. Once your project is set up in an IDE, install the NPM packages:
   ```sh
   npm install
   ```

3. Duplicate the `.env.local` file and rename it to `.env`.

> *WARNING* Do NOT put any secrets in the `.env.local` file. Doing so would publicly expose the secrets resulting in a security breach.
>
> If you have committed secrets in the `.env.example` file, revert the file back to its original 

4. Paste the appropriate Slack App credentials into the newly created `.env` file.

5. Type the following into your terminal:
   ```sh
   npm run dev
   ```
  > *Note* This will spin up a server on localhost:3000, and (if everything is set up properly) you should see a new post in the `bot-spam` channel with a bot version message.

  Alternatively, run the following to suppress the bot version message on reload:
   ```sh
   npm run dev:silent
   ```

  To reset the server type `rs` in the terminal.
  To quit the server use `CTRL + C` in the terminal.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Listeners
- Messages
    - (sample) Monitors channel messages for 'hi', 'hello', or 'hey', and posts a greeting reply in the channel.
- Commands
    - `/health` returns a health check message in the channel.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Build out CI/CD pipeline
- [ ] Automatic adding new members
- [ ] Automatic "orientation" for new members
- [ ] Events Channel
- [ ] Automatic moderation
    - [ ] Monitor user chats for ToS violations
    - [ ] Automate grievance tickets for mods to review

See the [open issues](https://github.com/slcdsa/sldsa-slack-apps/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
<a name="contributing" />
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your (Conventional)[https://www.conventionalcommits.org/en/v1.0.0/] Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request and fill out the form

<p align="right">(<a href="#readme-top">back to top</a>)</p>
