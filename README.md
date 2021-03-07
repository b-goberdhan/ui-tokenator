# ui-design-tokenizer

## Usage

### Using dockerfile

In order to spin up your own ui design token api, you will need to do the following:

```Dockerfile
FROM brandongobdev/theme:latest
COPY color-tokens.yaml ./definitions/color-tokens.yaml
```

Next, build and run the docker file, exposing port 8080 (`-p 8080:8080`).

### Endpoints

| endpoint | method | description |
| -- | -- | -- |
| `/api/style/css` | GET | retrieves the `css` file containing the design tokens.
| `/api/style/scss` | GET | retrieves the `scss` file containing the design tokens.
| `/api/style/json` | GET | retrieves the `json` file containing the design tokens.

### Configuration

| environment variable name | default value | description |
| -- | -- | -- |
| USE_PLACE_HOLDER_DEFINITION | `true` | By default there is a _placeholder.yaml file, setting this to `false` will ensure it is not parsed and compiled to css, scss and json. |
| GENERATE_JSON | `true` | Determines whether or not a json version of design tokens is created. |
| GENERATE_CSS | `true` | Determines whether or not a css version of design tokens is created. |
| GENERATE_SASS | `true` | Determines whether or not a scss version of design tokens is created. |
| PORT | `8080` | Defines what port the api is available from.

