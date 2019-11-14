// slugをとってくる
// then -> JSON
exports.createPages = ({ graphql, actions}) => {
  return graphql(`
    {
      allWorksYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    // stringifyの引数はインデント幅
    console.log(JSON.stringify(result, null, 4))
  })
}
