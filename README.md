# test-webpage

This is a webpage for testing web features against different browsers.

## Requirements

- [deno](https://deno.com/)
- Install deno's file_server (or use other method for local web hosting)
  ```
  deno install --allow-net --allow-read https://deno.land/std/http/file_server.ts
  ```

## Usage

### Website

```sh
cd web
file_server .
```

### API

```sh
cd api
./run.sh
```
