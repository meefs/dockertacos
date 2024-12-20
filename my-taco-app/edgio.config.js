// This file was automatically added by edgio init.
// You should commit this file to source control.
// Learn more about this file at https://docs.edg.io/guides/edgio_config
module.exports = {
  connector: '@edgio/react-cra',

  // The name of the site in Edgio to which this app should be deployed.
  // name: 'my-site-name',

  // The name of the organization in Edgio to which this app should be deployed.
  // organization: 'my-organization-name',

  // Overrides the default path to the routes file. The path should be relative to the root of your app.
  // routes: 'routes.js',

  

  // When set to true, Edgio includes the deployment number in the cache key,
  // effectively purging the cache each time you deploy.
  // If omitted this will default to the "Automatic Purging" configuration on the environment's Caching tab.
  // purgeCacheOnDeploy: false,

  // If you need to proxy some URLs to an origin instead of your Next.js app, you can configure the origins here:
  // origins: [
  //   {
  //     // The name of the backend origin
  //     name: "origin",
  //
  //     // When provided, the following value will be sent as the host header when connecting to the origin.
  //     // If omitted, the host header from the browser will be forwarded to the origin.
  //     override_host_header: "test-origin.edgio.net",
  //
  //     // The list of backend hosts
  //     hosts: [
  //       {
  //         // The domain name or IP address of the origin server
  //         location: "test-origin.edgio.net"
  //       }
  //     ]
  //   }
  // ],

  // Options for hosting serverless functions on Edgio
  // serverless: {
  //   // Set to true to include all packages listed in the dependencies property of package.json when deploying to Edgio.
  //   // This option generally isn't needed as Edgio automatically includes all modules imported by your code in the bundle that
  //   // is uploaded during deployment
  //   // includeNodeModules: true,
  //
  //   // Include additional paths that are dynamically loaded by your app at runtime here when building the serverless bundle.
  //   // include: ['views/**/*'],
  // },

  // The maximum number of URLs that will be concurrently prerendered during deployment when static prerendering is enabled.
  // Defaults to 200, which is the maximum allowed value.
  // prerenderConcurrency: 200,

  // A list of glob patterns identifying which prerenderConcurrency source files should be uploaded when running edgio deploy --includeSources.
  // This option is primarily used to share source code with Edgio support personnel for the purpose of debugging. If omitted,
  // edgio deploy --includeSources will result in all files which are not gitignored being uploaded to Edgio.
  //
  // sources : [
  //   '**/*', // include all files
  //   '!(**/secrets/**/*)', // except everything in the secrets directory
  // ],
}
