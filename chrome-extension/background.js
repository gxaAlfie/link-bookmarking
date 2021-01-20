chrome.browserAction.onClicked.addListener(function(tab) {
  const { url, title } = tab

  fetch('https://link-bookmarking-api.herokuapp.com/api/v1/links', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      link: url,
      name: title
    })
  }).then(({ status }) => alert('Link is saved successfully.'))
    .catch((error) => alert(error))
})
