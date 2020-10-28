const chalk = require("chalk");
const logSymbol = require("log-symbols");
const alert = require("clialerting");

module.exports = (reqdnodeversion, options) => {
  const defaultOptions = {
    exit: true,
  };

  // console.log(process)
  // console.log(process.versions.node)
  // console.log('process')

  // const nodeversion= process.versions.node
  // const semantics= nodeversion.split('.')
  // const major= nodeversion[0]

  const major = process.versions.node.split(".")[0];
  // console.log(major)

  const opts = { ...defaultOptions, ...options };

  if (major < reqdnodeversion) {
    alert({
      type: "error",
      msg: "Node version issue!",
    });

    console.log(
      "You are running Node Version: " + chalk.red(process.versions.node)
    );
    console.log(
      "Require Node Version is: " +
        chalk.green(reqdnodeversion) +
        " or higher\n"
    );

    console.log(
      logSymbol.info +
        " Please update your version of nodejs to run this program"
    );
    console.log(logSymbol.info + " https://nodejs.org/en/download\n");

    opts.exit && process.exit(1);
  }
};
