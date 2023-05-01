const DEFAULT_PATHS = {
  production: { path: 'bundle.js', sri: '' },
  vendor: { path: '404', sri: '' },
}

module.exports = (initialHtml = '', paths = DEFAULT_PATHS) =>
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="#FFFFFF">
  <title>Bills Payable System</title>
  <link rel="manifest" href="manifest.json">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <div id="root"></div>
</body>
</html>`
