(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{538:function(t,e,n){"use strict";n.r(e);var o=n(42),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("🔥 Make sure you "),n("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("star the repo"),n("OutboundLink")],1),t._v(" to keep up to date with new tips and tricks.")]),t._v(" "),n("p",[t._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-premium-plan?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions Premium plan"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=fx5pW1VJ1ng&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=5&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Azure Functions Premium Plan to avoid cold-start"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h3",{attrs:{id:"using-azure-functions-premium-plan-to-avoid-cold-start"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-azure-functions-premium-plan-to-avoid-cold-start"}},[t._v("#")]),t._v(" Using Azure Functions Premium Plan to avoid cold-start")]),t._v(" "),n("h4",{attrs:{id:"azure-functions-cold-starts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions-cold-starts"}},[t._v("#")]),t._v(" Azure Functions cold starts")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://azure.microsoft.com/services/functions/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions"),n("OutboundLink")],1),t._v(" are incredible. You can use them to run pieces of code, without having to create the plumbing to run a complete application. This is perfect for processes that you run in the background or that are decoupled from your application (like a process that resizes images that users upload).\nYou can run Azure Functions serverless, in their "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-scale#consumption-plan?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Consumption pricing plan"),n("OutboundLink")],1),t._v(". This is great, because Functions that run in the consumption plan, scale automatically. And you only pay for functions that you execute, you don't pay the whole month for having a function that can run.")]),t._v(" "),n("p",[t._v("When you have functions that run in the consumption plan, they will have a '"),n("strong",[t._v("cold start")]),t._v("'. This is a small period of time that the Function App needs to warm up and start the execution of your function. This is needed because the Function runs in a shared environment and needs compute resources to be allocated to it. Once your Function executed, it will stay 'warm' for the next 20 minutes or so, to execute subsequent requests. How long you have to wait for a Function App to warm up, is different for each Function and typically ranges between 1 and 3 seconds. You can find a detailed analysis of how long cold starts can be in "),n("a",{attrs:{href:"https://mikhail.io/serverless/coldstarts/azure/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("this article"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("There are several ways to deal with cold starts in Azure Functions. You can run your Function App in an "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-scale#app-service-plan?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Plan"),n("OutboundLink")],1),t._v(". When you do this, it runs on compute resources that you reserve and pay for, 24 hours per day. Functions that run in an App Service Plan do not scale automatically, like their consumption-plan counter parts.")]),t._v(" "),n("p",[t._v("Another way to avoid cold starts is to use the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-premium-plan?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions Premium Plan"),n("OutboundLink")],1),t._v(". This is a plan that allows your Functions to scale automatically and eliminates cold starts. It also offers more advanced features, like "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-create-vnet?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("VNET integration"),n("OutboundLink")],1),t._v(" and a maximum function duration of 60 minutes (if you modify the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-host-json#functiontimeout",target:"_blank",rel:"noopener noreferrer"}},[t._v("host.json configuration"),n("OutboundLink")],1),t._v(").")]),t._v(" "),n("p",[t._v("In this post, we'll set up an Azure Function with a Premium Plan to see how it eliminates cold starts.")]),t._v(" "),n("h4",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),n("ul",[n("li",[t._v("An Azure subscription (If you don't have an Azure subscription, create a "),n("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("free account"),n("OutboundLink")],1),t._v(" before you begin)")])]),t._v(" "),n("h4",{attrs:{id:"avoid-cold-starts-with-the-azure-functions-premium-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#avoid-cold-starts-with-the-azure-functions-premium-plan"}},[t._v("#")]),t._v(" Avoid cold starts with the Azure Functions Premium Plan")]),t._v(" "),n("p",[t._v("Let's create an Azure Function in a Premium Plan to avoid cold starts.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Go to the "),n("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure portal"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Click the "),n("strong",[t._v("Create a resource")]),t._v(" button (the plus-sign in the top left corner)")])]),t._v(" "),n("li",[n("p",[t._v("Search for "),n("strong",[t._v("Azure Function")]),t._v(" and click on the result to start creating a new Azure Function\na. This brings you to the "),n("strong",[t._v("create Function App blade")]),t._v("\nb. Select a "),n("strong",[t._v("Resource Group")]),t._v(" for the Function App or create a new one\nc. Fill in a "),n("strong",[t._v("Name")]),t._v(" for the Function App\nd. Leave the "),n("strong",[t._v("Publish")]),t._v(" setting to "),n("strong",[t._v("Code")]),t._v(". We'll work with the code that an out-of-the-box Function comes with\ne. Select "),n("strong",[t._v(".NET Core")]),t._v(" for the "),n("strong",[t._v("Runtime Stack")]),t._v(" setting\nf. Select a "),n("strong",[t._v("Region")]),t._v(" for the Function App\ng. Click "),n("strong",[t._v("Next: Hosting")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/51createfunctionpremium.png")}}),t._v(" "),n("p",[t._v("(Hosting configuration for a new Function App in the Azure portal)")]),t._v(" "),n("p",[t._v("h. In the Hosting tab, leave the "),n("strong",[t._v("Storage account")]),t._v(" and "),n("strong",[t._v("Operating System")]),t._v(" settings as they are\ni. For "),n("strong",[t._v("Plan type")]),t._v(", select "),n("strong",[t._v("Premium")]),t._v("\nj. The "),n("strong",[t._v("Sku and size")]),t._v(" indicate the compute resources that you reserve for this Function App. Leave the "),n("strong",[t._v("Sku and size")]),t._v(" as they are. You can scale this up if you want in the settings of the Function App\nk. Click "),n("strong",[t._v("Review + Create")]),t._v(" and "),n("strong",[t._v("Create")]),t._v(" after that to create the Function App")])])]),t._v(" "),n("p",[t._v("When the new Function App is deployed, you need to create a new Function in it.")]),t._v(" "),n("ol",[n("li",[t._v("Navigate to the new Function App in the Azure portal")]),t._v(" "),n("li",[t._v("The Function App is a container that can contain and run one or more Functions. Click "),n("strong",[t._v("New Function")]),t._v(" to start creating a new Function")]),t._v(" "),n("li",[t._v("Select "),n("strong",[t._v("In-portal")]),t._v(" and click "),n("strong",[t._v("Continue")]),t._v(". This makes it easy for us to create and run the Function")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/51createnewfunction.png")}}),t._v(" "),n("p",[t._v("(Create new Azure Function in the Azure portal)")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("Now select "),n("strong",[t._v("Webhook + API")]),t._v(" and click "),n("strong",[t._v("Create")]),t._v(". This creates a new C# Azure Function that is triggered by an HTTP request")])]),t._v(" "),n("p",[t._v("When the Function is created, you'll see that it has some out-of-the-box code in it. We'll leave that in there and use it to test the Function.")]),t._v(" "),n("p",[t._v("Function Apps that run in the Premium Plan can eliminate cold starts. They can do that by prewarming Function instances so that they are ready to handle incoming requests. When you click on the "),n("strong",[t._v("Function App")]),t._v(" name (above the Functions) and click "),n("strong",[t._v("Platform Features > Scale out")]),t._v(", you can configure the instances of the Premium Plan. You can configure the minimum of instances that the plan should run and the maximum. Configuring the maximum amount is a great way to restrict the amount of instances that can be run and thus restrict the amount of money that you spend. Each Premium Plan needs at least one instance to run and be pre-warmed, so using the Premium Plan will cost you a minimum fee per moth. You can increase the minimum amount of instances and prewarmed instances to make sure that requests to your app never run into a cold start. Let's leave it at one for now.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/51premiumscaleout.png")}}),t._v(" "),n("p",[t._v("(Configure Azure Function Premium Plan instances in the Azure portal)")]),t._v(" "),n("p",[t._v("Let's test it. Click on the Function that we've created earlier and click the "),n("strong",[t._v("</> Get Function URL")]),t._v(" link to retrieve the URL for the Function. The default code takes a parameter called "),n("strong",[t._v("name")]),t._v(", so you can take the URL and append "),n("strong",[t._v("&name=somename")]),t._v(" to it to test it out. Paste the URL in a browser to test it out.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/51geturl.png")}}),t._v(" "),n("p",[t._v("(Get Function URL in the Azure portal)")]),t._v(" "),n("p",[t._v("This should be instantaneous as there is no cold start. The Function executes on the pre-warmed instance and executes immediately.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/51result.png")}}),t._v(" "),n("p",[t._v("(Result of executing the Azure Function)")]),t._v(" "),n("h4",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-premium-plan?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions Premium Plan"),n("OutboundLink")],1),t._v(" is a powerful plan to run your Azure Functions in. You can use it to eliminate cold starts and still have the benefits of serverless, like automatic scaling. Go and check it out!")])])}),[],!1,null,null,null);e.default=r.exports}}]);