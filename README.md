[![test](https://github.com/cardinalby/export-env-action/actions/workflows/test.yml/badge.svg)](https://github.com/cardinalby/export-env-action/actions/workflows/test.yml)

## Download release asset by id

Downloads a single release asset and saves it under specified name. Doesn't do additional 
API requests, just downloads the file. If dirs structure doesn't exist, it will be created.

## Examples

### Simple case:

```env
# constants.env file

VAR1=abc
VAR2=def
```

```yaml
- uses: cardinalby/export-env-action@v1
  with:
    envFile: 'constants.env'    
  
# env.VAR1 == 'abc'
# env.VAR2 == 'def'
```

### Expand variables

```env
# constants.env file

PROTOCOL=https
HOST=example.com
PORT=8080
URI=${PROTOCOL}://${HOST}:${PORT}
```

```yaml
- uses: cardinalby/export-env-action@v1
  with:
    envFile: 'constants.env'    
    expand: 'true'
  
# env.PROTOCOL == 'https'
# env.HOST == 'example.com'
# env.PORT == '8080'
# env.URI == 'https://example.com:8080'
```

### Do not export:

```env
# constants.env file

VAR1=abc
VAR2=def
```

```yaml
- uses: cardinalby/export-env-action@v1
  id: exportStep
  with:
    envFile: 'constants.env'
    export: 'false'
  
# env.VAR1 == ''
# env.VAR2 == ''
# steps.exportStep.outputs.VAR1 == 'abc'
# steps.exportStep.outputs.VAR2 == 'def'
```

## Inputs

### `envFile` **Required**
Path to env file to parse

### `expand` Default: `false`
"Expands" variables if equals `true`. It means, `${ANOTHER}` in variable value will be
substituted by the value of `ANOTHER` variable (defined in the same env file).

### `export` Default: `true`
Export variables to a job environment. If `false`, all variables will be set as an action
outputs instead.

## Outputs

If `export` is `false` then has an individual output for each variable from env file.