Exercise 11.1 Warming up

The pipeline for our Python application requires a linter, a test framework, and tools for building. Popular options for a linter include Ruff, PyLint, and flake8.

Test frameworks include Pytest, Robot, and Unittest. As the name suggests, Unittest is for writing unit tests, while Robot is an automation testing framework and PyTest is especially useful for API tests.

Build tools assist in handling library dependencies and project metadata, compiling the code and packaging the application into distributable forms. These tools can be all-purpose, such as Poetry and PyBuilder, or focus on a specific task, for example PyOxidizer focuses on production of standalone executables.

Self-hosted CI platform alternatives to Jenkins include Travis CI, Docker, Bamboo, Buddy, and Azure DevOps. Cloud-based solutions include Circle CI, Gitlab and Google Cloud CI.

The cloud-based solutions offer greater convenience but less control and security. With these paid services, a greater team size and longer CI pipeline will increase the costs of using the service. But for a smaller team, this shouldn't be an issue.

However, the advantages of improved security and speed, which can be optimized as opposed to cloud-based pipelines, make self-hosted CI worth considering. These are not easily scalable with organization size and require expertise to maintain, but this is not that big of an issue with a small team.

Considering these advantages and disadvantages, either a self-hosted or cloud-based CI environment should work just fine for us. However, if the team were to grow massively, the self-hosted environment might be the better choice.
