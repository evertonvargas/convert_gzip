
# JSON to Gzip Converter

This utility converts the specified JSON within the *file.json* to a *.gzip* file to comply with the requirements of the [Send Category Mapping to VTEX Mapper](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-mapper#post-/api/mkp-category-mapper/categories/marketplace/-id-) API, where connectors require the payload to be compressed in gzip format.

## Installation

To install the dependencies, run the following command in your terminal:

```bash
  npm i
```

## Generating the .gzip File

To generate the gzip file, execute the following command:

```bash
  npm run start
```

This command will compress the JSON from the *file.json* and produce a corresponding gzip file.