function main () {
  logseq.App.showMsg('❤️ Message from Hello World Plugin :)')
//   logseq.Editor.createPage('test-plugin-page')
}

// bootstrap
logseq.ready(main).catch(console.error)