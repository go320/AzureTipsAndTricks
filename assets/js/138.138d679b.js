(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{493:function(e,t,o){"use strict";o.r(t);var n=o(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://youtu.be/cavW-t4rItY?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use deployment slots for web applications"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"test-web-apps-in-production-with-azure-app-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-web-apps-in-production-with-azure-app-service"}},[e._v("#")]),e._v(" Test Web Apps in Production with Azure App Service")]),e._v(" "),o("p",[e._v("We've recently created a "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web app"),o("OutboundLink")],1),e._v(" and uploaded it to Azure App Service. We also took a look at "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple ways"),o("OutboundLink")],1),e._v(" to examine those files through the Azure portal interface and how we'd add "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(" to our web apps. In this post, we'll take a look at using deployment slots for web apps.")]),e._v(" "),o("h5",{attrs:{id:"creating-deployment-slot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-deployment-slot"}},[e._v("#")]),e._v(" Creating Deployment Slot")]),e._v(" "),o("p",[o("strong",[e._v("Hold Up. What's a Deployment Slot?")]),e._v(" Deployment slots let you deploy different versions of your web app to different URLs. You can test a certain version and then swap content and configuration between slots.")]),e._v(" "),o("p",[e._v("Go to the Azure Portal and select my App Service and click on "),o("strong",[e._v("Deployment Slots")]),e._v(" under "),o("strong",[e._v("Deployment")]),e._v(" to get started. Then click on the "),o("strong",[e._v("Add Slots")]),e._v(" button. Give it a name such as "),o("code",[e._v("staging")]),e._v(' then use an existing configuration source. We\'ll use our "production" web app. You know, the cool '),o("a",{attrs:{href:"http://myquizapplication.azurewebsites.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("quiz application"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/testinprodazure3.png")}}),e._v(" "),o("p",[e._v("Great, now if we go back to Deployment Slots, we should see it running.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/testinprodazure4.png")}}),e._v(" "),o("p",[e._v("Click on the new staging site that we just created and you'll notice that it has appended the word "),o("code",[e._v("staging")]),e._v(" then you'll notice we have a "),o("a",{attrs:{href:"http://myquizapplication-staging.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("new site"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("We need to push a new version of our existing quiz application to this staging slot. Go to "),o("code",[e._v("Deployment Options")]),e._v(" and select "),o("code",[e._v("External Repository")]),e._v(" and give it the following url "),o("code",[e._v("https://github.com/mbcrump/jsQuizEngine.git")]),e._v(" and hit OK. You might have to hit Sync, and you'll eventually see the following:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/testinprodazure5.png")}}),e._v(" "),o("p",[e._v("Give it a couple of minutes until you see that it has completed pulling down your code from Git and then go to the new URL of your site. You can find the URL on your overview page. In my case it is, "),o("a",{attrs:{href:"http://myquizapplication-staging.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/testinprodazure6.png")}}),e._v(" "),o("p",[e._v("Success! This is our new site as indicated by the awesome large font that says "),o("code",[e._v("jsQuizEngine version 2")]),e._v(".")]),e._v(" "),o("p",[e._v("We could now return to the original app service that we created and swap between the two sites that we have. For example, you might want to move the "),o("code",[e._v("staging")]),e._v(" site over to the "),o("code",[e._v("production")]),e._v(" site and vice versa. The power of this is that your users don't experience a downtime and you can continue working in your preferred space until ready to move to production.")])])}),[],!1,null,null,null);t.default=r.exports}}]);