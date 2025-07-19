# AI Code Review Tool

This project is an AI-powered code review tool that automatically checks code changes in the current branch against the master branch. It evaluates the changes and provides feedback on whether they pass predefined criteria.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd ai-code-review-tool
npm install
```

### As an npm package

You can also install this tool in another project via npm:

```bash
npm install ai-code-review-tool
```

## Usage

To run the application locally, use the following command:

```bash
node src/index.js "ai review code"
```

Or, if installed as a package, use the CLI command:

```bash
npx ai-review-code
```

Or add to your npm scripts:

```json
"scripts": {
  "ai-review-code": "ai-review-code"
}
```
Then run:
```bash
npm run ai-review-code
```

This command will trigger the code review process, comparing the current branch's changes against the master branch.

### Example

1. Make some changes in your code.
2. Run the command as shown above.
3. The tool will output whether the changes "pass" or "not pass" based on the review criteria.

## Environment Variables

Create a `.env` file in your project root and add your API keys:

```
OPENAI_API_KEY=your_openai_key
GOOGLE_API_KEY=your_google_genai_key
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.