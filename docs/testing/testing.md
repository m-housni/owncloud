---
title: "Running tests"
date: 2021-07-27T00:00:00+00:00
weight: 60
geekdocRepo: https://github.com/owncloud/web
geekdocEditPath: edit/master/docs/testing
geekdocFilePath: testing.md
---

{{< toc >}}
## Introduction

In order to allow us to make changes quickly, often and with a high level of confidence, we heavily rely on tests within the `web` repository.

All the steps below require you to have the `web` repo cloned locally and dependencies installed. 
This can be achieved by running

```shell
$ git clone https://github.com/owncloud/web.git
$ cd web
$ pnpm install
```

### Unit Tests

We have a steadily growing coverage of unit tests. You can run them locally via

```shell
$ pnpm test:unit
```

You can also specify which tests to run by giving a path param, like so: `pnpm test:unit packages/<app-name>/tests/unit/path/to/test.spec.js`.

#### Unit test file structure
Our unit tests spec files follow a simple structure:
- fixtures and mocks at the top
- helper functions at the bottom
- tests in between

We usually organize tests with nested `describe` blocks. If you would like to get feedback from the core team about 
the structure, scope and goals of your unit tests before actually writing some, we invite you to make a pull request 
with only `describe` blocks and nested `it.todo("put your test description here")` lines. 

### E2E Tests (Playwright)

Our end-to-end test suite is built upon the [Playwright Framework](https://github.com/microsoft/playwright), 
which makes it easy to write tests, debug them and have them run cross-browser with minimal overhead.

#### Prerequisites

To run e2e tests with Docker, please make sure you have the following tools installed:

- docker
- docker-compose (if not already included in your docker installation)
- pnpm
- node

Please also make sure to point `host.docker.internal` to `127.0.0.1` by adding it to your `/etc/hosts` file.

#### Prepare & start web

Bundle the web frontend with the following command:

```shell
$ pnpm build:w
```

Our compose setup automatically mounts it into an oC10 and oCIS backend, respectively. Web also gets recompiled on changes.

#### Start Docker

Using compose, you can start the required Docker containers by running

For running the test with oc10 run
```shell
$ docker compose up oc10
```

For running the test with ocis run
```shell
$ docker compose up ocis
```

and make sure there are no conflicting ports and everything runs smoothly. You can check if everything has worked by opening [https://host.docker.internal:9200](https://host.docker.internal:9200) (oCIS) and [http://host.docker.internal:8080](http://host.docker.internal:8080) (OC10) and logging in using the demo user (admin/admin).

#### Run E2E tests

Depending on the backend you want to run the tests on, you can either run

```shell
$ pnpm test:e2e:cucumber 'tests/e2e/cucumber/**/*[!.ocis].feature'
```

for an **ownCloud 10** backend (filenames including `.ocis` are excluded) or

```shell
$ OCIS=true pnpm test:e2e:cucumber 'tests/e2e/cucumber/**/*[!.oc10].feature'
```

for an **oCIS** backend (filenames including `.oc10` are excluded).

#### Options

To run a particular test, simply add the feature file and line number to the test command, e.g. `pnpm test:e2e:cucumber tests/e2e/cucumber/shareFileJourney.feature:13`

Various options are available via ENV variables, e.g.
- `OCIS=true` to run the E2E tests against an oCIS backend
- `RETRY=n` to retry failures `n` times
- `SLOW_MO=n` to slow the execution time by `n` milliseconds
- `TIMEOUT=n` to set tests to timeout after `n` milliseconds
- `HEADLESS=bool` to open the browser while the tests run (defaults to true => headless mode)
- `BROWSER=name` to run tests against a specific browser. Defaults to Chrome, available are Chrome, Firefox, Webkit, Chromium

For debugging reasons, you may want to record a video or traces of your test run. 
Again, you can use the following ENV variables in your command:

- `REPORT_DIR=another/path` to set a directory for your recorded files (defaults to "reports")
- `REPORT_VIDEO=true` to record a video of the test run
- `REPORT_HAR=true` to save request information from the test run
- `REPORT_TRACING=true` to record traces from the test run

To then open e.g. the tracing from the `REPORT_DIR`, run

```shell
$ npx playwright show-trace path/to/file.zip
```

### Acceptance Tests (Nightwatch)

{{< hint info >}}
We've decided to switch to playwright for end-to-end tests. As we steadily increase the coverage of our playwright 
based e2e tests we keep the existing nightwatch based e2e tests maintained. However, we decided to not add new scenarios 
to the nightwatch based e2e tests anymore.

In other words: only continue reading about our nightwatch based acceptance tests below if you need to debug a failing test.
{{< /hint >}}

At ownCloud, we have decided to adopt Docker as the main environment for developing our application. This also applies for running our acceptance tests.

#### Prerequisites

To run acceptance tests with Docker, please make sure you have the following tools installed:

- docker
- docker-compose (if not already included in your docker installation)
- pnpm
- node

Please also make sure to point `http://host.docker.internal/` to `127.0.0.1` by adding it to your hosts.

#### Prepare & start web

Bundle the web frontend, which then gets mounted into the respective backends. It also gets recompiled on changes.

```shell
$ pnpm build:w
```

#### Start Docker

Using compose, you can start the required Docker containers by running

For running the test with oc10 run
```shell
$ docker compose up oc10 vnc selenium middleware-oc10
```

For running the test with ocis run
```shell
$ docker compose up ocis vnc selenium middleware-ocis
```

and make sure there are no conflicting ports and everything runs smoothly. You can check if everything has worked by opening [https://host.docker.internal:9200](https://host.docker.internal:9200) (oCIS) and [http://host.docker.internal:8080](http://host.docker.internal:8080) (OC10) and logging in using the demo user (admin/admin).

If you're using a M1 Mac, you need to use `seleniarm/standalone-chromium:4.4.0-20220814`for now. To do so, export `SELENIUM_IMAGE=seleniarm/standalone-chromium:4.4.0-20220814`.

#### Run acceptance tests

- Change the directory to `tests/acceptance`
- Install all the test dependencies with `pnpm` command
- Depending on the backend you're running the tests on, you can either run

  ```shell
  $ pnpm test:acceptance:oc10 features/path/to/test
  ```

  for ownCloud 10.X or

  ```shell
  $ pnpm test:acceptance:ocis features/path/to/test
  ```

  for oCIS acceptance tests.


#### Watch the test run

To watch the tests while running, open [http://host.docker.internal:6080/](http://host.docker.internal:6080/) in the browser to access your VNC client.


### Analyze the test report

The cucumber library is used as the test runner for both e2e and acceptance tests. The report generator script lives inside the `tests/e2e/cucumber/report` folder. If you want to create a report after the tests are done, run the command:

```bash
node tests/e2e/cucumber/report --report-input=tests/e2e/cucumber/report/report.json
```

`--report-input` is the path to the report file generated by the test runner. If you want to generate a report for the acceptance tests, you can run the command

```bash
node tests/e2e/cucumber/report --report-input=tests/acceptance/report/report.json
```

By default, the report gets generated to reports/e2e/cucumber/releaseReport/cucumber_report.html.
The location can be changed by adding the ```--report-location``` flag.

To see all available options run

```bash
node tests/e2e/cucumber/report --help
```
