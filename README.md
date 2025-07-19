# AI Code Review Tool

This project is an AI-powered code review tool that automatically checks code changes in the current branch against the master branch. It uses Google Gemini or OpenAI models to review your code and outputs whether your changes pass or not.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd ai-code-review-tool
npm install
```

### As an npm package

Install in another project via npm:

```bash
npm install ai-code-review-tool
```

## Usage

### Local usage

Run the application locally:

```bash
node src/index.js
```

### CLI usage (recommended)

If installed as a package, use the CLI command:

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

This will trigger the code review process, comparing the current branch's changes against the master branch and printing the AI review result.

## Environment Variables

Create a `.env` file in your project root and add your API keys:

```
GOOGLE_API_KEY=your_google_genai_key
OPENAI_API_KEY=your_openai_key
```

At least one key is required. The tool will use Gemini by default if `GOOGLE_API_KEY` is set.

## Example Workflow

1. Make changes in your code.
2. Commit your changes.
3. Run the review command as shown above.
4. The tool will output whether the changes "✅ Passed" or "❌ Not Passed" with a short reason.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.