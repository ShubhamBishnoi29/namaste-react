# Namste React code


# Parcel
-Dev build
-Local server
-HMR = Hot module Replacement
- File watching a   lgorithm - written in C++
- Caching - Faster builds
-- Image otimization for the apps
- Minifications
- bunlding
- Compressing
- consistence hashing
- code splitting
- differentias bundling - support to older browsers
- Diagnostics
- Error Handling
- gives a way to host on parcel HTTPS
- Tree Shaking - remove unused code from 
- different dev and prod buildes

<!-- CDN stands for Content Delivery Network. 
A CDN is a network of servers that are spread out across the world and cache content close to end users. 
This helps to speed up the delivery of web content, especially for data-heavy applications, and can also help to prevent issues like buffering, poor image and sound quality, and incomplete transmissions. 

AWS
What is a CDN? - Content Delivery Network Explained - AWS
A content delivery network (CDN) is a network of interconnected servers that speeds up web...

GeeksforGeeks
CDN Full Form - GeeksforGeeks
3 Jan 2024 — Benefits of CDN. Security: CDN provides security to the website mainly for DDoS ...

Cloudflare
What is a content delivery network (CDN)? | How do CDNs work?
A content delivery network (CDN) is a geographically distributed group of servers that cac...

Akamai
What Is a CDN (Content Delivery Network)? | How Do CDNs Work?
A content delivery network (CDN) is a group of geographically distributed servers that spe...

IBM
What Is a Content Delivery Network (CDN)? - IBM
Buffering, poor image and sound quality and incomplete transmissions also affect the deliv...
CDNs can also help to load balance traffic, which can prevent routers or servers from becoming overwhelmed. This can be especially important for e-commerce retailers during peak traffic periods, when customers expect fast product image load times and quick transactions. 
CDNs can also provide other benefits, such as:
Security: CDNs can help to protect websites from DDoS attacks
Availability: CDNs can ensure that data is provided by the server at all times
Bandwidth costs: CDNs can save on bandwidth costs by delivering data to the closest client 
Generative AI is experimental. -->

<!-- 
    bundler are-> webpack, parcel, vite
    bundler basically its bundles your app or packages your app properly so that you can
    shift to production level.  -->

<!-- create-react-app behind the sence uses webpack which is bundler -->

<!-- 
        two types dependencies:-
        dev-dependecies- required when we are developing the app
        dependencies-> the dependencies are used in production also -->

<!-- 
            npm install -D parcel
            installing it as dev-dependencies -->

<!-- ========== -->
<!-- package.json is configuration for our npm -->

<!-- package.lock.json -> keep a track of every exact version which is installed as dependencies.
intergity in package.lock.json-> it is a hash which keep track on production

package.json -> keep the track of approximate version

node_modules-> It contains all the code that we fetched from npm    (it u=is a collection of packages) -->

<!-- transitive-depndecies-> suppose parcel is installed so it has also other dependencies to it. -->

<!-- if you have package and package.lock json you can create all your nodemodules. -->

<!-- what we can regenerate we should put it in .gitignore -->

<!-- carat(^) -> it gives minor updates
dilda(~) -> it gives major updates -->
<!-- 
npm -> for installing the packages
npx -> for running or execute the package -->

<!-- 
"main": "App.js" -> It tells us that it is the entry point for our app
but when we run build command "npx parcel build index.html" in terminal
it will five error because here we are making build throug index.html.
So, remove "main": "App.js" from package.json -->


<!-- In package.json on https://browserslist.dev/?q=bGFzdCAxMCB2ZXJzaW9ucw%3D%3D
"browsersList": [
    "last 10 versions"
] -->

<!-- npm start is euivelent to npm run start  -> it is only possible for start command because it is resvered by npm -->



/*
Header
- logo
- navItems
Body
- search
- RestaurantContainer
  - RestaurantCard
Footer
- links
- Address
- Contact


*/


What is React hook?
It is normal javascript function which is a utility function, it gives you some utilities.


Reconciliation Algorithm (React Fibre) :- (Explained in Episode-5 last 20 minutes video) Algortithm com in React 16
Dom Tree:-

Dif Algorithm:- 


Why react is fast?
Because it dose efficient DOM manipulatiuon.


CORS-POLICY-ERROR:-
swiggy.com api from localhost is blocked due to cors policy.
Who is blocking us?
our browsers blockers are stopping us to call from one origin to another origin.
i.e. localhost to swiggy origin
watch cors videos of namste.

to remove cors error to bypass. is to install allow cors extension


Whenever state variables update, react triggers a reconciliation cycle.(re-renders the component) 



# 2 types of routing in web application
# - Client side Routing
# - Server side Routing