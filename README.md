# lsif-typescript

[LSIF](https://github.com/sourcegraph/scip) indexer for TypeScript and JavaScript.

## Quick start

### Installation

```sh
yarn build
yarn link
```

Currently, Node v14, Node v16 and Node v18 are supported. <!-- Source of truth: .github/workflows/ci.yml -->

### Indexing a TypeScript project

Navigate to the project root, containing `tsconfig.json`.

```sh
yarn build
yarn link
lsif-typescript index
```

### Indexing a JavaScript project

Navigate to the project root, containing `package.json`.

```sh
yarn build
yarn link
lsif-typescript index --infer-tsconfig
```

To improve the quality of indexing results for JavaScript,
consider adding `@types/*` packages as `devDependencies` in `package.json`.

### Index a TypeScript project using Yarn workspaces

Navigate to the project root, containing `package.json`.

```sh
yarn build
yarn link

lsif-typescript index --yarn-workspaces # For Yarn v2
lsif-typescript index --yarn-berry-workspaces # For Yarn v3 (Berry)
```

### Running (against Typescript) using the Docker image

When using the Docker image

```sh
GITHUB_REPO_PATH=""
REPO_MOUNT_DIR="/src"
LSIF_OUTPUT_DIRECTORY="test-sourcefield"
LSIF_DIR_IN_DOCKER="/test"
LSIF_FILE="index.lsif"
LATEST_BUILT_IMAGE="us-docker.pkg.dev/plumbr/source-field/sourcefield-lsif-typescript:62b533a"

# Get latest-built image from:
# https://console.cloud.google.com/artifacts/docker/plumbr/us/source-field/sourcefield-lsif-typescript?project=plumbr

docker \
  run \
  -v ${LSIF_OUTPUT_DIRECTORY}:${LSIF_DIR_IN_DOCKER} \
  -v ${GITHUB_REPO_PATH}:${REPO_MOUNT_DIR} \
  -w ${REPO_MOUNT_DIR} \
  -it \
  ${LATEST_BUILT_IMAGE} \
  lsif-typescript index --output ${LSIF_DIR_IN_DOCKER}/${LSIF_FILE}
```
