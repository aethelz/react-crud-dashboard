### Artifacts

> Make sure to include all source code in the repository. To make reviewing easier, include a fully built version (= running version to view in a browser) of your assignment in a folder named **public**.

It is impossible to repurpose public folder in CRA apps to store build artifacts, therefore I placed built version in `build` folder instead.
You may serve it with a static server:

```bash
  npm install -g serve
  serve -s build
```
