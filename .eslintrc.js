module.exports = {
    "extends": "airbnb-base",
    "rules":
     { "comma-dangle":
       ["error", "always",
      { "functions": "never" }]
              ,"camelcase": ["error", {"ignoreDestructuring": true}]
              , "camelcase": ["error", {"allow": ["UNSAFE_componentWillMount"]}]}

}
