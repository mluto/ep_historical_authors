var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_userlist = function (hook_name, args, cb)
{
  args.content = args.content + eejs.require("ep_historical_authors/templates/historicalAuthors.ejs"); 
}

exports.eejsBlock_styles = function (hook, context)
{
  context.content = context.content + eejs.require("ep_historical_authors/templates/styles.ejs");
}
