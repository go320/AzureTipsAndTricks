(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{461:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more: "),o("a",{attrs:{href:"https://azure.microsoft.com/services/frontdoor?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Front Door Service"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=YV2nYfWfgAk&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=46?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure Front Door"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"getting-started-with-azure-front-door"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-front-door"}},[e._v("#")]),e._v(" Getting Started with Azure Front Door")]),e._v(" "),o("p",[e._v("In this post we'll get started with the "),o("a",{attrs:{href:"https://azure.microsoft.com/services/frontdoor?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Front Door Service"),o("OutboundLink")],1),e._v(". This is a new networking service that acts as a load balancer and an application firewall.")]),e._v(" "),o("p",[e._v("So what can you do with Azure Front Door? Amongst other things, you can use it to:")]),e._v(" "),o("ul",[o("li",[e._v("Route users to the most performant application")]),e._v(" "),o("li",[e._v("Ensure users get routed to a working application (so fail over to a working endpoint when one fails)")]),e._v(" "),o("li",[e._v("Protect your application against DDoS attacks")]),e._v(" "),o("li",[e._v("Route users based on URL (https://contoso.com/product goes to one website and https://contoso.com/jobs goes to another)")]),e._v(" "),o("li",[e._v("Filter traffic to your application based on country")]),e._v(" "),o("li",[e._v("Rewrite URLs")])]),e._v(" "),o("p",[e._v('My first thought when Azure Front Door was released was "'),o("em",[e._v("How is this different from "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/traffic-manager/traffic-manager-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Traffic Manager"),o("OutboundLink")],1),e._v("?")]),e._v('". As you might know, Azure Traffic Manager is also a kind of load balancer service that provides similar capabilities. Azure Front Door is different from Azure Traffic Manager through. Here are the main reasons why:')]),e._v(" "),o("ol",[o("li",[e._v("Azure Front Door provides "),o("strong",[e._v("TLS protocol termination (SSL offload)")]),e._v(", and Azure Traffic Manager does not")]),e._v(" "),o("li",[e._v("Azure Front Door provides "),o("strong",[e._v("application layer processing")]),e._v(", and Azure Traffic Manager does not. This means that Azure Front Door can do things like URL rewriting and that it provides a Web Application Firewall (WAF) that protects you against common web attacks")])]),e._v(" "),o("h4",{attrs:{id:"improving-performance-and-availability-with-azure-front-door"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#improving-performance-and-availability-with-azure-front-door"}},[e._v("#")]),e._v(" Improving performance and availability with Azure Front Door")]),e._v(" "),o("p",[e._v("Let's get started. I'll show you a simple example of how to create a new Azure Front Door instance and how to use that, to route to the most performant application and increase the availability of the solution.")]),e._v(" "),o("h4",{attrs:{id:"_1-create-web-apps-in-different-regions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-web-apps-in-different-regions"}},[e._v("#")]),e._v(" 1. Create Web Apps in different regions")]),e._v(" "),o("p",[e._v('First, I\'ve created two Azure App Service Web Apps and deployed a simple website to them. The Web Apps are in different geographical regions. One in West Europe and one in West US. The website in the Web Apps shows a message that says "This app is in West US" in the US Web App and "This app is in West Europe" for the Web App in Europe.')]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/WebAppsInDifferentRegions.png")}}),e._v(" "),o("p",[e._v("(Two Web Apps in the Azure portal)")]),e._v(" "),o("h4",{attrs:{id:"_2-create-a-new-azure-front-door-instance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-new-azure-front-door-instance"}},[e._v("#")]),e._v(" 2. Create a new Azure Front Door instance")]),e._v(" "),o("p",[e._v("Next, I've created a new Azure Front Door instance in the Azure portal. This is pretty straightforward. Just like with any service that you create, you click the "),o("strong",[e._v('"Create a resource" button')]),e._v(" (the green plus sign on the left of the portal) and search for Azure Front Door and click "),o("strong",[e._v("create")]),e._v(".")]),e._v(" "),o("p",[e._v("Now, you go through a designer experience that asks you to put in the frontend URL, that users will use.")]),e._v(" "),o("p",[e._v("The designer also asks you to create a "),o("strong",[e._v("backend pool")]),e._v(". This represents the resources that handle the requests. in this case, these are the two Web Apps. But you have the choice to add any resource that can handle HTTP traffic, inside and outside of Azure.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/CreateAzureFrontDoorBackend.png")}}),e._v(" "),o("p",[e._v("(Different options for adding resources to the backend pool)")]),e._v(" "),o("p",[e._v("The backend pool contains both Web Apps and looks like the image below:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/BackendPool.png")}}),e._v(" "),o("p",[e._v("Finally, you can create routing rules that determine how traffic is routed to the backend pool. you could for instance, have multiple backend pools and route traffic that has a URL that contains "),o("strong",[e._v("\\mobile")]),e._v(" to a backend pool that contains an app specifically for mobile platforms. Once you've created one or more rules, you are done and the Azure Front Door can be deployed.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/CreateAzureFrontDoor.png")}}),e._v(" "),o("p",[e._v("(Azure Front Door designer)")]),e._v(" "),o("h4",{attrs:{id:"_3-testing-the-route-for-performance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-testing-the-route-for-performance"}},[e._v("#")]),e._v(" 3. Testing the route for performance")]),e._v(" "),o("p",[e._v("By default, Azure Front Door routes users to the most performant node in the backend. So when I navigate to the frontend URL, Azure Front Door routes me to the Web App in West US.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/WebAppWestUS.png")}}),e._v(" "),o("p",[e._v("(The frontend URL routes to the West US Web App)")]),e._v(" "),o("p",[e._v("This makes sense, because I'm located in West US and the Web App in West US is the most performant to me, because it is the closest to me and has the lowest latency.")]),e._v(" "),o("h4",{attrs:{id:"_4-testing-improved-availability"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-testing-improved-availability"}},[e._v("#")]),e._v(" 4. Testing improved availability")]),e._v(" "),o("p",[e._v("Another cool thing that Azure front Door can do is improve the availability of your application. Let's test that out.")]),e._v(" "),o("p",[e._v("By default, when I go to the Azure Front Door frontend URL (https://azuretipsandtricks.azurefd.net), I get routed to the West US Web App, because I am in the US.")]),e._v(" "),o("p",[e._v("Let's stop the West US Web App to see what happens. You can do that very easily from the Azure portal. In the dashboard, you can right-click the context menu of the Web App and perform all sorts of actions, including stopping it.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/StopWebApp.png")}}),e._v(" "),o("p",[e._v("(Stop the West US Web App from the Azure portal dashboard)")]),e._v(" "),o("p",[e._v("Now, the backend pool only has one working node in it; the Web App in West Europe. So, when I navigate to https://azuretipsandtricks.azurefd.net/, I now get routed to the West Europe Web App.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/WebAppWestEurope.png")}}),e._v(" "),o("p",[e._v("(The frontend routes to the West Europe Web App)")]),e._v(" "),o("p",[e._v("This didn't work instantly though. The first few times that I refreshed the browser after stopping the Web App, I was still routed to the West US Web App and got an error that said that it was stopped. I was only routed to the West Europe Web App after a while. This is because Azure Front Door only pings the endpoints in the backend pool periodically to see if they are working. You can speed this process up by adjusting the health probes for the backend pool.")]),e._v(" "),o("h4",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("As you can see, Azure Front Door is a very powerful service. You can easily configure it using the designer in the Azure portal and also by using PowerShell. And it can do a lot more on top of increasing performance and availability. Go and try it out!")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/front-door-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Front Door overview"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/front-door-tutorial-geo-filtering?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tutorial: Set up a geo-filtering policy fr your Azure front Door"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/front-door-url-rewrite?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL rewriting with Azure Front Door"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);