var addon = require('./build/Release/addon.node');

module.exports = {
  cleanup : addon.winSparkleCleanup,
  setAppcastUrl : addon.winSparkleSetAppcastUrl,
  setLang : addon.winSparkleSetLang,
  checkUpdateWithUI : addon.winSparkleCheckUpdateWithUI,
  checkUpdateWithoutUI: addon.winSparkleCheckUpdateWithoutUI,
  init : addon.winSparkleInit,
  setAutomaticCheckForUpdates : addon.winSparkleSetAutomaticCheckForUpdates,
  getAutomaticCheckForUpdates : addon.winSparkleGetAutomaticCheckForUpdates
};
